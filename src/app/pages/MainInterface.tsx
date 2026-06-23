import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import InteractiveMap from "../components/InteractiveMap";
import LocationContent from "../components/LocationContent";
import ThemeSwitcher from "../components/ThemeSwitcher";
import ContentSwitchers from "../components/ContentSwitchers";
import { locations } from "../data/locations";
import { useTheme } from "../contexts/ThemeContext";
import { ScrollArea } from "../components/ui/scroll-area";

export default function MainInterface() {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [currentId, setCurrentId] = useState(parseInt(locationId || "1"));

  const currentLocation = locations.find((loc) => loc.id === currentId);
  const isVintage = theme === "vintage";

  useEffect(() => {
    if (locationId) {
      setCurrentId(parseInt(locationId));
    }
  }, [locationId]);

  const handleLocationSelect = (id: number) => {
    setCurrentId(id);
    navigate(`/tour/${id}`);
  };

  const handlePrevious = () => {
    const newId = currentId > 1 ? currentId - 1 : locations.length;
    handleLocationSelect(newId);
  };

  const handleNext = () => {
    const newId = currentId < locations.length ? currentId + 1 : 1;
    handleLocationSelect(newId);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentId]);

  if (!currentLocation) {
    return <div>Location not found</div>;
  }

  return (
    <div className={`flex h-screen flex-col ${isVintage ? 'vintage-paper' : ''}`}>
      {/* Header */}
      <header
        className={`flex flex-wrap items-center justify-between gap-4 border-b px-4 py-4 md:px-6 ${
          isVintage
            ? "border-neutral-800 bg-[#f5f5e8]"
            : "border-neutral-300 bg-white"
        }`}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <Link
            to="/"
            className={`flex items-center gap-2 text-sm uppercase tracking-wider transition-colors ${
              isVintage
                ? "text-neutral-700 hover:text-neutral-900"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <div className="h-6 w-[1px] bg-neutral-300" />
          <h1
            className={`text-base md:text-xl ${
              isVintage ? "font-serif" : ""
            }`}
          >
            LMML: Rome Cinema Walk
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <ContentSwitchers />
          <div className="hidden h-8 w-[1px] bg-neutral-300 md:block" />
          <ThemeSwitcher />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Side - Map */}
        <div
          className={`flex w-[38.2%] flex-col border-r ${
            isVintage ? "border-neutral-800" : "border-neutral-300"
          }`}
          style={{ width: "38.2%" }} // Golden ratio: 1 / 1.618 ≈ 0.618, inversely 0.382
        >
          <div className="flex-1">
            <InteractiveMap
              currentLocationId={currentId}
              onLocationSelect={handleLocationSelect}
            />
          </div>

          {/* Navigation Controls */}
          <div
            className={`flex items-center justify-between border-t p-4 ${
              isVintage
                ? "border-neutral-800 bg-[#f5f5e8]"
                : "border-neutral-300 bg-neutral-50"
            }`}
          >
            <button
              onClick={handlePrevious}
              className={`flex items-center gap-2 border px-4 py-2 text-xs uppercase tracking-wider transition-all ${
                isVintage
                  ? "border-neutral-800 hover:bg-neutral-900 hover:text-white"
                  : "border-neutral-300 hover:bg-black hover:text-white"
              }`}
              title="Previous location (←)"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <div
              className={`text-sm ${
                isVintage ? "font-serif" : ""
              }`}
            >
              <span className="text-neutral-900">{currentId}</span>
              <span className="text-neutral-500"> / {locations.length}</span>
            </div>

            <button
              onClick={handleNext}
              className={`flex items-center gap-2 border px-4 py-2 text-xs uppercase tracking-wider transition-all ${
                isVintage
                  ? "border-neutral-800 hover:bg-neutral-900 hover:text-white"
                  : "border-neutral-300 hover:bg-black hover:text-white"
              }`}
              title="Next location (→)"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <div className="p-8">
              <LocationContent location={currentLocation} />
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
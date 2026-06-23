import { useTheme } from "../contexts/ThemeContext";
import { Location } from "../data/locations";
import { Calendar, Film, User, Clock } from "lucide-react";

type LocationContentProps = {
  location: Location;
};

export default function LocationContent({ location }: LocationContentProps) {
  const { theme, detailLevel, audienceTone } = useTheme();

  const isVintage = theme === "vintage";

  return (
    <div
      className={`h-full space-y-8 academic-text ${
        isVintage
          ? "bg-[#f5f5e8] font-serif text-neutral-900"
          : "bg-white text-neutral-900"
      }`}
    >
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-2 flex items-center gap-3">
              <span
                className={`flex h-8 w-8 items-center justify-center border text-sm ${
                  isVintage
                    ? "border-neutral-800 bg-neutral-900 text-white"
                    : "border-black bg-black text-white"
                }`}
              >
                {location.id}
              </span>
              <div className="h-[1px] flex-1 bg-neutral-300" />
            </div>
            <h1
              className={`mb-2 ${
                isVintage ? "font-serif text-3xl" : "text-3xl"
              }`}
            >
              {location.name}
            </h1>
            <p className="text-sm uppercase tracking-wider text-neutral-600">
              {location.movie} ({location.year})
            </p>
          </div>
        </div>

        {/* Movie Still Placeholder */}
        <div className="relative aspect-[16/9] overflow-hidden border border-neutral-300">
          <img
            src={location.imageUrl}
            alt={location.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <p className="text-xs text-white">
              {location.scene}
            </p>
          </div>
        </div>

        {/* Metadata Table */}
        <div
          className={`border ${
            isVintage ? "border-neutral-800" : "border-neutral-300"
          }`}
        >
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-neutral-300">
                <td className="p-3 uppercase tracking-wider text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Film className="h-4 w-4" />
                    <span>Director</span>
                  </div>
                </td>
                <td className="p-3">{location.director}</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-3 uppercase tracking-wider text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Year</span>
                  </div>
                </td>
                <td className="p-3">{location.year}</td>
              </tr>
              <tr className="border-b border-neutral-300">
                <td className="p-3 uppercase tracking-wider text-neutral-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>Filming Date</span>
                  </div>
                </td>
                <td className="p-3">{location.metadata.filmingDate}</td>
              </tr>
              <tr>
                <td className="p-3 uppercase tracking-wider text-neutral-600">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Scene Type</span>
                  </div>
                </td>
                <td className="p-3">{location.metadata.sceneType}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <div>
          <h2
            className={`mb-3 border-b pb-2 text-xs uppercase tracking-wider ${
              isVintage ? "border-neutral-800" : "border-neutral-300"
            }`}
          >
            Description
          </h2>
          <p
            className={`leading-relaxed ${
              isVintage ? "font-serif text-[15px]" : "text-[15px]"
            }`}
          >
            {location.content[detailLevel]}
          </p>
        </div>

        <div>
          <h2
            className={`mb-3 border-b pb-2 text-xs uppercase tracking-wider ${
              isVintage ? "border-neutral-800" : "border-neutral-300"
            }`}
          >
            Interpretation
          </h2>
          <p
            className={`leading-relaxed ${
              isVintage
                ? "font-serif text-[15px] italic"
                : "text-[15px]"
            }`}
          >
            {location.tone[audienceTone]}
          </p>
        </div>

        {/* Historical Timeline */}
        <div>
          <h2
            className={`mb-4 border-b pb-2 text-xs uppercase tracking-wider ${
              isVintage ? "border-neutral-800" : "border-neutral-300"
            }`}
          >
            Historical Timeline
          </h2>
          <div className="space-y-4">
            {location.historicalTimeline.map((item, index) => (
              <div
                key={index}
                className="flex gap-4"
              >
                <div
                  className={`flex-shrink-0 ${
                    isVintage
                      ? "w-24 font-serif text-sm"
                      : "w-24 text-sm"
                  } text-neutral-600`}
                >
                  {item.year}
                </div>
                <div className="relative flex-1 pb-4">
                  <div className="absolute -left-[22px] top-[6px] h-2 w-2 rounded-full bg-black" />
                  {index < location.historicalTimeline.length - 1 && (
                    <div className="absolute -left-[18px] top-[14px] h-full w-[2px] bg-neutral-300" />
                  )}
                  <p
                    className={`leading-relaxed ${
                      isVintage ? "font-serif text-[15px]" : "text-[15px]"
                    }`}
                  >
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Significance */}
        <div>
          <h2
            className={`mb-3 border-b pb-2 text-xs uppercase tracking-wider ${
              isVintage ? "border-neutral-800" : "border-neutral-300"
            }`}
          >
            Cinematic Significance
          </h2>
          <p
            className={`leading-relaxed ${
              isVintage ? "font-serif text-[15px]" : "text-[15px]"
            }`}
          >
            {location.metadata.significance}
          </p>
        </div>
      </div>
    </div>
  );
}
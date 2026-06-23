import { useTheme } from "../contexts/ThemeContext";
import { Monitor, BookOpen } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2 border border-neutral-300 bg-white p-1">
      <button
        onClick={() => setTheme("modern")}
        className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider transition-all ${
          theme === "modern"
            ? "bg-black text-white"
            : "bg-transparent text-neutral-600 hover:bg-neutral-100"
        }`}
      >
        <Monitor className="h-3.5 w-3.5" />
        <span>Modern Screen</span>
      </button>
      <button
        onClick={() => setTheme("vintage")}
        className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider transition-all ${
          theme === "vintage"
            ? "bg-black text-white"
            : "bg-transparent text-neutral-600 hover:bg-neutral-100"
        }`}
      >
        <BookOpen className="h-3.5 w-3.5" />
        <span>XIX Century Print</span>
      </button>
    </div>
  );
}

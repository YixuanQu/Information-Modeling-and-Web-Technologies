import { useTheme } from "../contexts/ThemeContext";
import { FileText, Users } from "lucide-react";

export default function ContentSwitchers() {
  const { detailLevel, setDetailLevel, audienceTone, setAudienceTone } = useTheme();

  return (
    <div className="flex flex-col gap-4">
      {/* Level of Detail */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-600">
          <FileText className="h-3.5 w-3.5" />
          <span>Level of Detail</span>
        </div>
        <div className="flex gap-1 border border-neutral-300 bg-white p-1">
          <button
            onClick={() => setDetailLevel("brief")}
            className={`flex-1 px-3 py-2 text-xs uppercase tracking-wider transition-all ${
              detailLevel === "brief"
                ? "bg-black text-white"
                : "bg-transparent text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            Brief
          </button>
          <button
            onClick={() => setDetailLevel("mid")}
            className={`flex-1 px-3 py-2 text-xs uppercase tracking-wider transition-all ${
              detailLevel === "mid"
                ? "bg-black text-white"
                : "bg-transparent text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            Mid
          </button>
          <button
            onClick={() => setDetailLevel("long")}
            className={`flex-1 px-3 py-2 text-xs uppercase tracking-wider transition-all ${
              detailLevel === "long"
                ? "bg-black text-white"
                : "bg-transparent text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            Long
          </button>
        </div>
      </div>

      {/* Audience Tone */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-600">
          <Users className="h-3.5 w-3.5" />
          <span>Audience Tone</span>
        </div>
        <div className="flex gap-1 border border-neutral-300 bg-white p-1">
          <button
            onClick={() => setAudienceTone("young")}
            className={`flex-1 px-3 py-2 text-xs uppercase tracking-wider transition-all ${
              audienceTone === "young"
                ? "bg-black text-white"
                : "bg-transparent text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            Young
          </button>
          <button
            onClick={() => setAudienceTone("adult")}
            className={`flex-1 px-3 py-2 text-xs uppercase tracking-wider transition-all ${
              audienceTone === "adult"
                ? "bg-black text-white"
                : "bg-transparent text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            Adult
          </button>
          <button
            onClick={() => setAudienceTone("scholar")}
            className={`flex-1 px-3 py-2 text-xs uppercase tracking-wider transition-all ${
              audienceTone === "scholar"
                ? "bg-black text-white"
                : "bg-transparent text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            Scholar
          </button>
        </div>
      </div>
    </div>
  );
}

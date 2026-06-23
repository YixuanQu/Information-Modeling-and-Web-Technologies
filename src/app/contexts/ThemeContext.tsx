import { createContext, useContext, useState, ReactNode } from "react";

type Theme = "modern" | "vintage";
type DetailLevel = "brief" | "mid" | "long";
type AudienceTone = "young" | "adult" | "scholar";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  detailLevel: DetailLevel;
  setDetailLevel: (level: DetailLevel) => void;
  audienceTone: AudienceTone;
  setAudienceTone: (tone: AudienceTone) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("modern");
  const [detailLevel, setDetailLevel] = useState<DetailLevel>("mid");
  const [audienceTone, setAudienceTone] = useState<AudienceTone>("adult");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        detailLevel,
        setDetailLevel,
        audienceTone,
        setAudienceTone,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

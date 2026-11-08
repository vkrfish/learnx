import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function useTheme() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // Initial sync
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");

    const handleThemeChange = (e: CustomEvent<"dark" | "light">) => {
      setTheme(e.detail);
    };

    window.addEventListener("learnx-theme-change" as any, handleThemeChange);
    return () => {
      window.removeEventListener("learnx-theme-change" as any, handleThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    try {
      localStorage.setItem("learnx_theme", nextTheme);
    } catch {}
    setTheme(nextTheme);
    window.dispatchEvent(new CustomEvent("learnx-theme-change", { detail: nextTheme }));
  };

  return { theme, toggleTheme };
}

export function ThemeToggle({
  className = "",
  showLabel = false,
}: {
  className?: string;
  showLabel?: boolean;
}) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`h-8 w-8 rounded-md border border-border/70 bg-card/60 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to white/light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to white/light mode" : "Switch to dark mode"}
      className={`group flex items-center gap-1.5 rounded-md border border-border/80 bg-card/80 p-1.5 text-muted-foreground hover:bg-secondary/70 hover:text-foreground active:scale-95 transition-all outline-none ${className}`}
    >
      <div className="relative h-4 w-4">
        <Sun
          className={`h-4 w-4 transition-all duration-200 ${
            isDark
              ? "rotate-0 scale-100 text-amber-400"
              : "-rotate-90 scale-0 opacity-0 absolute inset-0"
          }`}
        />
        <Moon
          className={`h-4 w-4 transition-all duration-200 ${
            isDark
              ? "rotate-90 scale-0 opacity-0 absolute inset-0"
              : "rotate-0 scale-100 text-primary"
          }`}
        />
      </div>
      {showLabel && (
        <span className="text-xs font-medium pr-1">
          {isDark ? "Light Mode" : "Dark Mode"}
        </span>
      )}
    </button>
  );
}


import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./language-provider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  // Since we only support dark theme per theme-provider.tsx, this button is disabled
  return (
    <Button
      variant="ghost"
      size="icon"
      disabled={true}
      aria-label={t("darkMode")}
    >
      <Moon className="h-5 w-5 rotate-0 scale-100" />
      <span className="sr-only">{t("darkMode")}</span>
    </Button>
  );
}


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useLanguage } from "@/components/language-provider";
import { 
  BarChart, 
  Calendar, 
  FileText, 
  Home, 
  Image, 
  Inbox, 
  LayoutDashboard, 
  Moon, 
  Settings, 
  Sun, 
  Upload, 
  Users 
} from "lucide-react";
import { useTheme } from "./theme-provider";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder={t("typeACommand")} />
      <CommandList>
        <CommandEmpty>{t("noResultsFound")}</CommandEmpty>
        <CommandGroup heading={t("navigation")}>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/"))}
          >
            <Home className="mr-2 h-4 w-4" />
            <span>{t("dashboard")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/channels"))}
          >
            <Users className="mr-2 h-4 w-4" />
            <span>{t("channels")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/ideas"))}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>{t("ideas")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/headlines"))}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>{t("headlines")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/thumbnails"))}
          >
            <Image className="mr-2 h-4 w-4" />
            <span>{t("thumbnails")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/scripts"))}
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>{t("scripts")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/upload"))}
          >
            <Upload className="mr-2 h-4 w-4" />
            <span>{t("upload")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/analytics"))}
          >
            <BarChart className="mr-2 h-4 w-4" />
            <span>{t("analytics")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/comments"))}
          >
            <Inbox className="mr-2 h-4 w-4" />
            <span>{t("comments")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/scheduler"))}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>{t("scheduler")}</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/settings"))}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>{t("settings")}</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading={t("theme")}>
          <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
            <Sun className="mr-2 h-4 w-4" />
            <span>{t("lightMode")}</span>
          </CommandItem>
          <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
            <Moon className="mr-2 h-4 w-4" />
            <span>{t("darkMode")}</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

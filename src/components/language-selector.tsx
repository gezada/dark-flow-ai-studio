
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useUIStore } from "@/store";

const languages = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "pt", label: "Português" },
];

export interface LanguageSelectorProps {
  minimal?: boolean;
}

export function LanguageSelector({ minimal = false }: LanguageSelectorProps) {
  const { i18n } = useTranslation();
  const { locale, setLocale } = useUIStore();
  const [open, setOpen] = useState(false);
  
  const currentLanguage = languages.find(l => l.value === locale) || languages[0];

  const handleLanguageChange = (value: string) => {
    setLocale(value);
    i18n.changeLanguage(value);
  };

  // Render a simplified version for minimal mode
  if (minimal) {
    return (
      <Button
        variant="outline"
        className="w-10 p-0 justify-center"
        onClick={() => {
          // Cycle through languages
          const currentIndex = languages.findIndex(l => l.value === locale);
          const nextIndex = (currentIndex + 1) % languages.length;
          handleLanguageChange(languages[nextIndex].value);
        }}
      >
        <span className="text-xs font-medium">{locale.toUpperCase()}</span>
      </Button>
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[180px] justify-between"
        >
          <span>{currentLanguage.label}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandEmpty>No language found.</CommandEmpty>
          <CommandGroup>
            {languages.map((lang) => (
              <CommandItem
                key={lang.value}
                value={lang.value}
                onSelect={handleLanguageChange}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    locale === lang.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {lang.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

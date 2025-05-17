
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
import { 
  BarChart, 
  Calendar, 
  FileText, 
  Home, 
  Image, 
  Inbox, 
  LayoutDashboard, 
  Settings, 
  Upload, 
  Users 
} from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

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
      <CommandInput placeholder="Type a command" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          <CommandItem
            onSelect={() => runCommand(() => navigate("/"))}
          >
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/channels"))}
          >
            <Users className="mr-2 h-4 w-4" />
            <span>Channels</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/analytics"))}
          >
            <BarChart className="mr-2 h-4 w-4" />
            <span>Analytics</span>
          </CommandItem>
          <CommandSeparator />
          <CommandItem
            onSelect={() => runCommand(() => navigate("/ideas"))}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Ideas</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/headlines"))}
          >
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <span>Headlines</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/thumbnails"))}
          >
            <Image className="mr-2 h-4 w-4" />
            <span>Thumbnails</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/scripts"))}
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Scripts</span>
          </CommandItem>
          <CommandSeparator />
          <CommandItem
            onSelect={() => runCommand(() => navigate("/comments"))}
          >
            <Inbox className="mr-2 h-4 w-4" />
            <span>Comments</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/upload"))}
          >
            <Upload className="mr-2 h-4 w-4" />
            <span>Upload</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/scheduler"))}
          >
            <Calendar className="mr-2 h-4 w-4" />
            <span>Scheduler</span>
          </CommandItem>
          <CommandItem
            onSelect={() => runCommand(() => navigate("/settings"))}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

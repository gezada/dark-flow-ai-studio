
import { useState } from "react";
import { Sidebar } from "./sidebar";
import { ThemeProvider } from "./theme-provider";
import { CommandPalette } from "./command-palette";
import { UserMenu } from "./user-menu";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex h-screen w-screen overflow-hidden bg-background dark">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="flex justify-end mb-4">
            <UserMenu />
          </div>
          <CommandPalette />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}

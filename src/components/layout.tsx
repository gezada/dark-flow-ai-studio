
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./sidebar";
import { ThemeProvider } from "./theme-provider";
import { CommandPalette } from "./command-palette";
import { UserMenu } from "./user-menu";

export function Layout() {
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
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
}

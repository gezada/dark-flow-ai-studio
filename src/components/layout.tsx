
import { useState } from "react";
import { Sidebar } from "./sidebar";
import { ThemeProvider } from "./theme-provider";
import { LanguageProvider } from "./language-provider";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ThemeProvider defaultTheme="dark">
      <LanguageProvider>
        <div className="flex h-screen w-screen overflow-hidden bg-background dark">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

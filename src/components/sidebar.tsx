
import { cn } from "@/lib/utils";
import { useLanguage } from "./language-provider";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSelector } from "./language-selector";
import { Button } from "@/components/ui/button";
import { BarChart, Calendar, ChevronRight, Home, Image, Inbox, LayoutDashboard, LogOut, Plus, Settings, Upload, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
}

export function Sidebar({
  className,
  collapsed = false,
  setCollapsed,
  ...props
}: SidebarProps) {
  const { t } = useLanguage();

  return (
    <div 
      className={cn(
        "flex flex-col h-screen bg-card border-r transition-all duration-300", 
        collapsed ? "w-16" : "w-64", 
        className
      )} 
      {...props}
    >
      <div className="flex items-center justify-between h-14 px-4 border-b">
        <h2 className={cn("font-bold text-xl whitespace-nowrap", collapsed && "hidden")}>
          Dark Hammer
        </h2>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setCollapsed?.(!collapsed)} 
          className={cn("ml-auto", !collapsed && "rotate-180")}
        >
          <ChevronRight />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar">
        <nav className="flex flex-col gap-1 px-2 py-4">
          <NavItem href="/" icon={<Home />} label={t("dashboard")} collapsed={collapsed} />
          <NavItem href="/channels" icon={<Users />} label={t("channels")} collapsed={collapsed} />
          <NavItem href="/ideas" icon={<LayoutDashboard />} label={t("ideas")} collapsed={collapsed} />
          <NavItem href="/headlines" icon={<LayoutDashboard />} label={t("headlines")} collapsed={collapsed} />
          <NavItem href="/thumbnails" icon={<Image />} label={t("thumbnails")} collapsed={collapsed} />
          <NavItem href="/scripts" icon={<LayoutDashboard />} label={t("scripts")} collapsed={collapsed} />
          <NavItem href="/upload" icon={<Upload />} label={t("upload")} collapsed={collapsed} />
          <NavItem href="/analytics" icon={<BarChart />} label={t("analytics")} collapsed={collapsed} />
          <NavItem href="/comments" icon={<Inbox />} label={t("comments")} collapsed={collapsed} />
          <NavItem href="/scheduler" icon={<Calendar />} label={t("scheduler")} collapsed={collapsed} />
          <NavItem href="/settings" icon={<Settings />} label={t("settings")} collapsed={collapsed} />
        </nav>

        <div className="px-2">
          <Button 
            variant="default" 
            className={cn(
              "w-full justify-start gap-2 bg-accent hover:bg-accent-hover", 
              collapsed && "justify-center"
            )}
          >
            <Plus size={18} />
            {!collapsed && <span>{t("addChannel")}</span>}
          </Button>
        </div>
      </div>

      <div className={cn(
        "p-4 border-t", 
        collapsed && "flex flex-col items-center gap-2"
      )}>
        {collapsed ? (
          <div className="mb-2">
            <LanguageSelector minimal />
          </div>
        ) : (
          <LanguageSelector />
        )}
        
        <div className={cn(
          "flex items-center", 
          collapsed ? "justify-center" : "justify-between mt-3"
        )}>
          <ThemeToggle />
          {!collapsed && (
            <Button variant="ghost" size="icon" className="text-muted-foreground">
              <LogOut size={18} />
              <span className="sr-only">{t("logout")}</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  collapsed?: boolean;
}

function NavItem({ href, icon, label, collapsed }: NavItemProps) {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground", 
        "transition-colors"
      )}
    >
      <span className="flex items-center justify-center w-6 h-6">
        {icon}
      </span>
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

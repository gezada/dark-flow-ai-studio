import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Calendar, 
  ChevronDown,
  ChevronRight, 
  Home, 
  Image, 
  Inbox, 
  LayoutDashboard, 
  LogOut, 
  Plus, 
  Settings,
  Upload, 
  Users 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useState } from "react";

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
  const location = useLocation();
  const [creativeWorkflowOpen, setCreativeWorkflowOpen] = useState(true);

  const isActive = (path: string) => location.pathname === path;

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
          <NavItem href="/" icon={<Home />} label="Dashboard" collapsed={collapsed} isActive={isActive("/")} />
          <NavItem href="/channels" icon={<Users />} label="Channels" collapsed={collapsed} isActive={isActive("/channels")} />
          <NavItem href="/analytics" icon={<BarChart />} label="Analytics" collapsed={collapsed} isActive={isActive("/analytics")} />
          
          {/* Creative Workflow Collapsible */}
          <div className="px-3 py-2">
            {collapsed ? (
              <NavItem href="/ideas" icon={<LayoutDashboard />} label="Ideas" collapsed={collapsed} isActive={isActive("/ideas") || isActive("/headlines") || isActive("/thumbnails") || isActive("/scripts")} />
            ) : (
              <Collapsible
                open={creativeWorkflowOpen}
                onOpenChange={setCreativeWorkflowOpen}
                className="w-full"
              >
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">
                    <div className="flex items-center gap-3 py-1">
                      <span className="flex items-center justify-center w-6 h-6">
                        <LayoutDashboard />
                      </span>
                      <span>Creative Workflow</span>
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${creativeWorkflowOpen ? 'rotate-180' : ''}`} />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-9 pt-1 space-y-1">
                  <NavItem href="/ideas" icon={null} label="Ideas" collapsed={false} isActive={isActive("/ideas")} />
                  <NavItem href="/headlines" icon={null} label="Headlines" collapsed={false} isActive={isActive("/headlines")} />
                  <NavItem href="/thumbnails" icon={null} label="Thumbnails" collapsed={false} isActive={isActive("/thumbnails")} />
                  <NavItem href="/scripts" icon={null} label="Scripts" collapsed={false} isActive={isActive("/scripts")} />
                </CollapsibleContent>
              </Collapsible>
            )}
          </div>

          <NavItem href="/comments" icon={<Inbox />} label="Comments" collapsed={collapsed} isActive={isActive("/comments")} />
          <NavItem href="/upload" icon={<Upload />} label="Upload" collapsed={collapsed} isActive={isActive("/upload")} />
          <NavItem href="/scheduler" icon={<Calendar />} label="Scheduler" collapsed={collapsed} isActive={isActive("/scheduler")} />
          <NavItem href="/settings" icon={<Settings />} label="Settings" collapsed={collapsed} isActive={isActive("/settings")} />
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
            {!collapsed && <span>Add Channel</span>}
          </Button>
        </div>
      </div>

      <div className={cn(
        "p-4 border-t", 
        collapsed && "flex flex-col items-center gap-2"
      )}>
        <Button variant="ghost" size="icon" className="text-muted-foreground ml-auto">
          <LogOut size={18} />
          <span className="sr-only">Logout</span>
        </Button>
      </div>
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactNode | null;
  label: string;
  collapsed?: boolean;
  isActive?: boolean;
}

function NavItem({ href, icon, label, collapsed, isActive }: NavItemProps) {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors", 
        isActive && "bg-red-600 text-white hover:bg-red-700 hover:text-white"
      )}
    >
      {icon && (
        <span className="flex items-center justify-center w-6 h-6">
          {icon}
        </span>
      )}
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  BarChart3,
  MessageSquare,
  AlertTriangle,
  Eye,
  Settings,
  Users,
  Home,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Overview", href: "/", icon: Home },
  { name: "Operations Center", href: "/operations", icon: Eye },
  { name: "AI Assistant", href: "/ai-chat", icon: MessageSquare },
  { name: "Portfolio", href: "/portfolio", icon: BarChart3 },
  { name: "Incidents", href: "/incidents", icon: AlertTriangle },
  { name: "Analytics", href: "/analytics", icon: Activity },
  { name: "Team", href: "/team", icon: Users },
  { name: "Settings", href: "/settings", icon: Settings },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-card/50 backdrop-blur-md border-r border-primary/20 z-50">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <Shield className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Dark Gemini</h1>
            <p className="text-xs text-muted-foreground">Intelligence Portal</p>
          </div>
        </div>

        <div className="space-y-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <Link key={item.name} to={item.href}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-3 h-11",
                    isActive
                      ? "bg-primary/10 text-primary border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10",
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                  {item.name === "Incidents" && (
                    <Badge
                      variant="destructive"
                      className="ml-auto text-xs px-1.5 py-0.5"
                    >
                      3
                    </Badge>
                  )}
                  {item.name === "AI Assistant" && (
                    <div className="ml-auto w-2 h-2 bg-accent rounded-full animate-pulse" />
                  )}
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Status Indicator */}
        <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              System Status
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            All systems operational
          </p>
          <p className="text-xs text-accent">99.97% uptime</p>
        </div>
      </div>
    </nav>
  );
}

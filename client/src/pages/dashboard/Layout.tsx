import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  GitGraph, 
  Puzzle, 
  FileBarChart, 
  Settings, 
  Search,
  Bell,
  LogOut,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Patients", href: "/dashboard/patients", icon: Users },
    { name: "Files", href: "/dashboard/files", icon: FileText },
    { name: "Automations", href: "/dashboard/automations", icon: GitGraph },
    { name: "Integrations", href: "/dashboard/integrations", icon: Puzzle },
    { name: "Reports", href: "/dashboard/reports", icon: FileBarChart },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border text-sidebar-foreground">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 font-heading font-bold text-xl text-primary cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
             <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          Cleo.ai
        </Link>
      </div>

      <div className="flex-1 px-4 py-4 space-y-1">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer",
            location === item.href 
              ? "bg-sidebar-accent text-sidebar-primary" 
              : "text-muted-foreground hover:bg-sidebar-accent/50 hover:text-foreground"
          )}>
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-sidebar-accent/50 cursor-pointer">
          <Avatar className="w-8 h-8">
            <AvatarFallback className="bg-primary/10 text-primary">DR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium truncate">Dr. Richards</div>
            <div className="text-xs text-muted-foreground truncate">Westside Dental</div>
          </div>
          <LogOut className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 h-full">
        <SidebarContent />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Header */}
        <header className="h-16 border-b border-border flex items-center justify-between px-6 bg-background/50 backdrop-blur-sm z-10">
          <div className="flex items-center gap-4 md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon"><Menu className="w-5 h-5" /></Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <SidebarContent />
              </SheetContent>
            </Sheet>
            <span className="font-heading font-bold">Cleo.ai</span>
          </div>

          <div className="flex-1 max-w-md hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search patients, files, workflows..." 
                className="pl-9 bg-muted/30 border-none focus-visible:ring-1 focus-visible:ring-primary rounded-xl" 
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
             <Button variant="ghost" size="icon" className="relative">
               <Bell className="w-5 h-5 text-muted-foreground" />
               <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background"></span>
             </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
             {children}
          </div>
        </main>
      </div>
    </div>
  );
}

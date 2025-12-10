import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ExternalLink,
  Mail,
  Calendar,
  FileText,
  Database,
  Share2,
  Briefcase
} from "lucide-react";

export default function Integrations() {
  const integrations = [
    { name: "Google Drive", icon: Share2, status: "Connected", desc: "Sync patient files and reports automatically." },
    { name: "Gmail", icon: Mail, status: "Connected", desc: "Draft emails and parse incoming referrals." },
    { name: "Google Calendar", icon: Calendar, status: "Connected", desc: "Manage appointments and schedule follow-ups." },
    { name: "Notion", icon: FileText, status: "Disconnected", desc: "Export daily summaries to your workspace." },
    { name: "Dropbox", icon: Database, status: "Disconnected", desc: "Backup archival storage for HIPAA compliance." },
    { name: "Microsoft 365", icon: Briefcase, status: "Disconnected", desc: "Integration for Outlook and OneDrive." },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
         <h1 className="text-3xl font-heading font-medium tracking-tight">Integrations</h1>
         <p className="text-muted-foreground mt-1">Connect your tools to power Cleo's automation engine.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((app, i) => (
          <div key={i} className="group bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 flex flex-col justify-between h-56">
             <div>
               <div className="flex justify-between items-start mb-4">
                 <div className="w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center text-foreground group-hover:scale-110 transition-transform duration-300">
                   <app.icon className="w-6 h-6" />
                 </div>
                 {app.status === 'Connected' ? (
                   <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                     <CheckCircle2 className="w-3 h-3" /> Connected
                   </span>
                 ) : (
                   <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border">
                     Not Connected
                   </span>
                 )}
               </div>
               
               <h3 className="font-medium text-lg mb-2">{app.name}</h3>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 {app.desc}
               </p>
             </div>

             <div className="flex items-center gap-3 pt-4">
               {app.status === 'Connected' ? (
                 <Button variant="outline" className="flex-1 border-destructive/20 text-destructive hover:bg-destructive/5 hover:text-destructive hover:border-destructive/30">Disconnect</Button>
               ) : (
                 <Button className="flex-1 bg-primary text-white hover:bg-primary/90">Connect</Button>
               )}
               <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                 <ExternalLink className="w-4 h-4" />
               </Button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Share2, Mail, Calendar, FileText, Database, Briefcase, MessageSquare, Video, Shield } from "lucide-react";

export default function IntegrationsPublic() {
  const categories = [
    {
      title: "Storage & Documents",
      apps: [
        { name: "Google Drive", icon: Share2, desc: "Sync and organize patient files." },
        { name: "Dropbox", icon: Database, desc: "Secure cloud storage integration." },
        { name: "Box", icon: Database, desc: "HIPAA-compliant file management." }
      ]
    },
    {
      title: "Communication",
      apps: [
        { name: "Gmail", icon: Mail, desc: "Email drafting and parsing." },
        { name: "Outlook", icon: Mail, desc: "Microsoft Exchange integration." },
        { name: "Slack", icon: MessageSquare, desc: "Team notifications and alerts." }
      ]
    },
    {
      title: "Productivity",
      apps: [
        { name: "Google Calendar", icon: Calendar, desc: "Appointment scheduling." },
        { name: "Notion", icon: FileText, desc: "Knowledge base sync." },
        { name: "Microsoft 365", icon: Briefcase, desc: "Full suite integration." }
      ]
    },
    {
      title: "Clinical Tools",
      apps: [
        { name: "Zoom", icon: Video, desc: "Telehealth sessions." },
        { name: "DrChrono", icon: ActivityIcon, desc: "EHR synchronization." },
        { name: "Doxy.me", icon: Video, desc: "Secure telemedicine." }
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      <PageHeader 
        title="Connect Your Stack" 
        description="Cleo.ai integrates seamlessly with the tools you already rely on, creating a unified operating system."
        badge="Integrations"
      />

      <section className="py-20">
        <div className="container mx-auto px-6 space-y-24">
           {categories.map((category, i) => (
             <div key={i}>
               <h2 className="text-2xl font-heading font-medium mb-8 pb-4 border-b border-border/40">{category.title}</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {category.apps.map((app, j) => (
                   <div key={j} className="flex items-start gap-4 p-6 rounded-2xl border border-border/60 hover:border-primary/30 hover:shadow-lg transition-all duration-300 bg-card group">
                     <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                       <app.icon className="w-6 h-6 text-foreground" />
                     </div>
                     <div>
                       <h3 className="font-medium text-lg mb-1">{app.name}</h3>
                       <p className="text-sm text-muted-foreground mb-4">{app.desc}</p>
                       <Button variant="link" className="p-0 h-auto text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                         View Integration <ArrowRight className="w-3 h-3 ml-1" />
                       </Button>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           ))}
        </div>
      </section>

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-heading font-medium mb-6">Missing a key integration?</h2>
          <p className="text-blue-100 text-lg mb-10">
            Our team builds custom connectors for enterprise clients. Let us know what you need.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" variant="secondary" className="rounded-full px-8 bg-white text-primary hover:bg-blue-50">Request Integration</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ActivityIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

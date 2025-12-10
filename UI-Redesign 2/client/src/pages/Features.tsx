import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Mail, Phone, Activity, GitBranch, Puzzle } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: "files-ai",
      title: "Files AI",
      icon: FileText,
      desc: "Intelligent OCR and data extraction for PDFs, images, and scanned documents. Cleo understands medical terminology.",
      details: ["Automated sorting", "Handwriting recognition", "Metadata tagging"]
    },
    {
      id: "emails-ai",
      title: "Emails AI",
      icon: Mail,
      desc: "Draft responses, categorize priority, and extract patient requests directly from your inbox stream.",
      details: ["Smart drafting", "Priority inbox", "Attachment parsing"]
    },
    {
      id: "calls-ai",
      title: "Meetings & Calls AI",
      icon: Phone,
      desc: "Transcribe patient consultations and generate SOAP notes automatically. Secure and private.",
      details: ["Real-time transcription", "SOAP note generation", "Action item detection"]
    },
    {
      id: "realtime-data",
      title: "Real-time Patient Data",
      icon: Activity,
      desc: "A live dashboard of patient status, waiting room times, and critical alerts needing attention.",
      details: ["Live status board", "Wait time tracking", "Critical alerts"]
    },
    {
      id: "automation",
      title: "Automation Builder",
      icon: GitBranch,
      desc: "Drag-and-drop workflow editor. Create complex logic flows without writing a single line of code.",
      details: ["Visual editor", "Conditional logic", "Multi-step actions"]
    },
    {
      id: "integrations",
      title: "Integrations",
      icon: Puzzle,
      desc: "Connects with the tools you already use. Two-way sync ensures your data is always up to date.",
      details: ["EMR/EHR sync", "Calendar sync", "Storage provider sync"]
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      <PageHeader 
        title="Powerful Features" 
        description="A complete suite of tools designed to automate the administrative burden of healthcare."
        badge="Platform Features"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-20">
            {features.map((feature, i) => (
              <div key={feature.id} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-heading font-medium">{feature.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
                  <ul className="space-y-3 pt-2">
                    {feature.details.map((detail, d) => (
                      <li key={d} className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button variant="outline" className="rounded-full">
                      Learn more about {feature.title}
                    </Button>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="aspect-video bg-muted/20 border border-border/50 rounded-3xl overflow-hidden relative shadow-lg group">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent z-10" />
                    {/* Placeholder for feature UI screenshot */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20 font-heading text-4xl font-bold uppercase tracking-widest select-none">
                      {feature.title}
                    </div>
                    
                    {/* Decorative UI elements */}
                    <div className="absolute bottom-6 right-6 left-6 h-24 bg-white rounded-xl shadow-lg transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-4 border border-border/20 z-20">
                       <div className="flex items-center gap-3 mb-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                         <span className="text-xs font-medium text-muted-foreground">System Active</span>
                       </div>
                       <div className="h-2 bg-muted rounded-full w-2/3" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

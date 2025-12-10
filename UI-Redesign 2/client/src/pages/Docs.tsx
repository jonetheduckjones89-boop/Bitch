import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { Search, Book, Code, FileText, Zap } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Docs() {
  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      <PageHeader 
        title="Documentation" 
        description="Everything you need to integrate and customize Cleo.ai for your clinic."
        badge="Developers & Admins"
      />

      <section className="py-12 border-b border-border/40">
         <div className="container mx-auto px-6">
            <div className="max-w-2xl relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search guides, API references, and tutorials..." 
                className="pl-12 h-14 text-lg rounded-2xl bg-muted/30 border-transparent focus:bg-white transition-all shadow-sm"
              />
            </div>
         </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-4 gap-12">
           {/* Sidebar */}
           <div className="hidden lg:block space-y-8">
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Getting Started</h4>
                <ul className="space-y-3 text-sm font-medium">
                   <li className="text-primary cursor-pointer">Introduction</li>
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Quick Start Guide</li>
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Authentication</li>
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Workspace Setup</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">Core Concepts</h4>
                <ul className="space-y-3 text-sm font-medium">
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Workflows</li>
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Data Extraction</li>
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Patient Records</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">API Reference</h4>
                <ul className="space-y-3 text-sm font-medium">
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">REST API</li>
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Webhooks</li>
                   <li className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">SDKs</li>
                </ul>
              </div>
           </div>

           {/* Content */}
           <div className="lg:col-span-3 space-y-12">
              <div className="prose prose-slate max-w-none">
                 <h2 className="text-3xl font-heading font-medium">Introduction to Cleo.ai</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Cleo.ai is an intelligent automation platform designed specifically for clinical operations. 
                   We provide a unified workspace to manage patient data, documents, and communication flows.
                 </p>
                 
                 <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
                    <div className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-shadow cursor-pointer">
                       <Book className="w-8 h-8 text-blue-500 mb-4" />
                       <h3 className="font-medium text-lg mb-2">Quick Start Guide</h3>
                       <p className="text-muted-foreground text-sm">Set up your first workspace and connect your apps in 5 minutes.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-border/50 bg-card hover:shadow-md transition-shadow cursor-pointer">
                       <Code className="w-8 h-8 text-purple-500 mb-4" />
                       <h3 className="font-medium text-lg mb-2">API Reference</h3>
                       <p className="text-muted-foreground text-sm">Detailed documentation for our REST API and Webhooks.</p>
                    </div>
                 </div>

                 <h3>Core Features</h3>
                 <p>Explore the capabilities of the Cleo platform:</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                 {[
                   { icon: FileText, title: "Document Processing", desc: "Learn how to configure OCR and extraction templates." },
                   { icon: Zap, title: "Workflow Automation", desc: "Build triggers and actions to automate your clinic." },
                   { icon: Code, title: "Custom Integrations", desc: "Connect Cleo to proprietary EMR systems." }
                 ].map((item, i) => (
                   <div key={i} className="group p-6 bg-muted/20 rounded-xl hover:bg-muted/40 transition-colors">
                      <item.icon className="w-6 h-6 text-foreground mb-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                   </div>
                 ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

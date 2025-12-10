import { Navbar } from "@/components/layout/Navbar";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Microscope, Receipt, Calendar, UserPlus, Pill } from "lucide-react";
import { Link } from "wouter";

export default function UseCases() {
  const cases = [
    {
      title: "Dental Practice",
      icon: Stethoscope,
      desc: "Automate intake forms, insurance verification, and post-op follow-ups.",
      tags: ["Intake", "Insurance", "Follow-up"]
    },
    {
      title: "Diagnostic Labs",
      icon: Microscope,
      desc: "Streamline result delivery, patient notification, and sample tracking.",
      tags: ["Results", "Notifications", "Tracking"]
    },
    {
      title: "Medical Billing",
      icon: Receipt,
      desc: "Reduce claim rejections with automated coding assistance and documentation checks.",
      tags: ["Billing", "Coding", "Audit"]
    },
    {
      title: "Telehealth",
      icon: Calendar,
      desc: "Seamless scheduling, link generation, and patient reminder workflows.",
      tags: ["Scheduling", "Reminders", "Video"]
    },
    {
      title: "Patient Referral",
      icon: UserPlus,
      desc: "Parse incoming referral letters and automatically create patient records.",
      tags: ["Referrals", "Parsing", "Onboarding"]
    },
    {
      title: "Pharmacy",
      icon: Pill,
      desc: "Manage refill requests and doctor authorizations with zero manual entry.",
      tags: ["Refills", "Auth", "Inventory"]
    }
  ];

  return (
    <div className="min-h-screen font-sans bg-background">
      <Navbar />
      
      <PageHeader 
        title="Built for Every Clinical Workflow" 
        description="Whether you run a solo dental practice or a multi-location clinic, Cleo adapts to your needs."
        badge="Use Cases"
      />

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((item, i) => (
              <div key={i} className="group relative bg-card border border-border/50 rounded-2xl p-8 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
                
                <div className="w-12 h-12 rounded-xl bg-white border shadow-sm flex items-center justify-center text-primary mb-6 relative z-10 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-medium mb-3 relative z-10">{item.title}</h3>
                <p className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 relative z-10">
                  {item.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground border border-border/50">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
           <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12 text-center border border-border/50">
             <h2 className="text-3xl font-heading font-medium mb-6">Don't see your use case?</h2>
             <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
               Cleo's automation builder is flexible enough to handle any logic. Build your own custom workflows in minutes.
             </p>
             <div className="flex justify-center gap-4">
               <Link href="/onboarding">
                 <Button className="rounded-full px-8 h-12">Start Building</Button>
               </Link>
               <Button variant="outline" className="rounded-full px-8 h-12">Contact Sales</Button>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}

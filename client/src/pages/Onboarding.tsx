import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronLeft, ChevronRight, Briefcase, Calendar, FileText, Database, Share2, Mail } from "lucide-react";

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [, setLocation] = useLocation();

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);
  const finish = () => setLocation("/dashboard");

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-4xl bg-card rounded-3xl shadow-xl border border-border/40 overflow-hidden flex flex-col md:flex-row h-[80vh]">
        
        {/* Left Side - Progress */}
        <div className="w-full md:w-1/3 bg-sidebar text-sidebar-foreground p-10 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
          
          <div className="relative z-10">
            <Link href="/" className="text-xl font-heading font-bold tracking-tight mb-12 block cursor-pointer hover:opacity-80 transition-opacity text-sidebar-primary">
              Cleo.ai
            </Link>
            <h2 className="text-3xl font-light mb-4 text-foreground">Let's set up your workspace.</h2>
            <p className="text-muted-foreground font-light">Follow these simple steps to automate your clinic.</p>
          </div>

          <div className="relative z-10 space-y-6">
             {[1, 2, 3].map(i => (
               <div key={i} className="flex items-center gap-4">
                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium border ${step === i ? 'bg-primary text-primary-foreground border-primary' : step > i ? 'bg-primary/50 text-white border-primary/50' : 'bg-transparent text-muted-foreground border-border'}`}>
                   {step > i ? <Check className="w-4 h-4" /> : i}
                 </div>
                 <span className={step === i ? 'text-foreground' : 'text-muted-foreground'}>
                   {i === 1 ? 'Clinic Info' : i === 2 ? 'Connect Apps' : 'Select Templates'}
                 </span>
               </div>
             ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-2/3 p-10 md:p-16 overflow-y-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-medium">Tell us about your clinic</h3>
                  <p className="text-muted-foreground">We'll customize your workspace based on your needs.</p>
                </div>

                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="clinic-name">Clinic Name</Label>
                    <Input id="clinic-name" placeholder="e.g. Westside Dental" className="h-12 text-lg" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="type">Clinic Type</Label>
                      <Input id="type" placeholder="e.g. Dental" className="h-12" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="patients">Avg Patients/Month</Label>
                      <Input id="patients" placeholder="e.g. 500" className="h-12" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" placeholder="https://" className="h-12" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="grid gap-2">
                        <Label htmlFor="contact">Contact Name</Label>
                        <Input id="contact" placeholder="Dr. Smith" className="h-12" />
                     </div>
                     <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="email@clinic.com" className="h-12" />
                     </div>
                  </div>
                </div>

                <div className="flex justify-between pt-8">
                  <Link href="/">
                    <Button variant="ghost">Cancel</Button>
                  </Link>
                  <Button onClick={nextStep} className="px-8 h-12 rounded-full">Continue <ChevronRight className="ml-2 w-4 h-4" /></Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-medium">Connect your apps</h3>
                  <p className="text-muted-foreground">Securely link your tools to enable automation.</p>
                </div>

                <div className="grid gap-4">
                  {[
                    { name: "Google Drive", icon: Share2 },
                    { name: "Gmail", icon: Mail },
                    { name: "Google Calendar", icon: Calendar },
                    { name: "Notion", icon: FileText },
                    { name: "Dropbox", icon: Database },
                    { name: "Microsoft 365", icon: Briefcase },
                  ].map((app, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-border rounded-xl hover:bg-muted/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                          <app.icon className="w-5 h-5" />
                        </div>
                        <span className="font-medium">{app.name}</span>
                      </div>
                      <Button variant="outline" size="sm" className="rounded-full">Connect</Button>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between pt-8">
                  <Button variant="ghost" onClick={prevStep}><ChevronLeft className="mr-2 w-4 h-4" /> Back</Button>
                  <div className="space-x-4">
                    <Button variant="ghost" onClick={nextStep}>Skip for Now</Button>
                    <Button onClick={nextStep} className="px-8 h-12 rounded-full">Continue <ChevronRight className="ml-2 w-4 h-4" /></Button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2 mb-8">
                  <h3 className="text-2xl font-medium">Select Templates</h3>
                  <p className="text-muted-foreground">Jumpstart your workspace with pre-built flows.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Dental Intake",
                    "Lab Results Pipeline",
                    "Billing Follow-up",
                    "Telehealth Scheduling",
                    "Referral Management",
                    "Prescription Refill"
                  ].map((tpl, i) => (
                     <Card key={i} className="p-4 cursor-pointer hover:border-primary transition-all border-border relative overflow-hidden group">
                       <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center text-white">
                           <Check className="w-3 h-3" />
                         </div>
                       </div>
                       <div className="font-medium mb-1">{tpl}</div>
                       <div className="text-xs text-muted-foreground">Includes 3 workflows</div>
                     </Card>
                  ))}
                </div>

                <div className="flex justify-between pt-8">
                  <Button variant="ghost" onClick={prevStep}><ChevronLeft className="mr-2 w-4 h-4" /> Back</Button>
                  <Button onClick={finish} className="px-8 h-12 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                    Create Workspace
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

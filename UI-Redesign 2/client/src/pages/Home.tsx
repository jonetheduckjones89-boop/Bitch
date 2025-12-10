import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Database, 
  FileText, 
  Mail, 
  Calendar, 
  Activity, 
  Settings, 
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-background text-foreground selection:bg-primary/10">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 opacity-30 pointer-events-none">
           <div className="w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={stagger}
              className="space-y-8"
            >
              <motion.h1 
                variants={fadeInUp} 
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-medium tracking-tight leading-[1.1]"
              >
                Your Clinical Operations. <br />
                <span className="text-primary">Fully Automated.</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp} 
                className="text-xl text-muted-foreground max-w-lg leading-relaxed font-light"
              >
                Cleo.ai organizes patient data, documents, communication, and workflow automation into one intelligent workspace.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp} 
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/onboarding">
                  <Button size="lg" className="rounded-full px-8 h-14 text-base shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300">
                    Create Workspace
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/product">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-base bg-card/50 backdrop-blur-sm hover:bg-card border-border/60">
                    View Example Workspace
                  </Button>
                </Link>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                 <Link href="/product" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">
                   Learn How Cleo Works 
                   <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                 </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-card/80 backdrop-blur-xl border border-border/20 rounded-2xl shadow-2xl p-6 overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-700 ease-out-expo">
                 {/* Abstract Dashboard UI */}
                 <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-4">
                      <div className="w-32 h-8 bg-muted/50 rounded-lg animate-pulse" />
                      <div className="w-20 h-8 bg-muted/30 rounded-lg" />
                    </div>
                    <div className="flex gap-2">
                       <div className="w-8 h-8 rounded-full bg-primary/10" />
                       <div className="w-8 h-8 rounded-full bg-muted/50" />
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-4 mb-8">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="bg-card border border-border/40 rounded-xl p-4 shadow-sm">
                        <div className="w-8 h-8 rounded-lg bg-primary/5 mb-3" />
                        <div className="w-16 h-4 bg-muted/50 rounded mb-2" />
                        <div className="w-10 h-6 bg-muted/30 rounded" />
                      </div>
                    ))}
                 </div>
                 
                 <div className="space-y-3">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors cursor-default">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-muted/50" />
                           <div>
                             <div className="w-24 h-4 bg-muted/60 rounded mb-1" />
                             <div className="w-16 h-3 bg-muted/30 rounded" />
                           </div>
                         </div>
                         <div className="w-12 h-6 bg-green-500/10 rounded-full" />
                      </div>
                    ))}
                 </div>
              </div>
              
              {/* Decorative elements behind */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-blue-200/20 rounded-3xl -z-10 blur-xl opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 bg-muted/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-medium mb-4">Automated Intelligence</h2>
            <p className="text-muted-foreground text-lg font-light">
              From connection to insight in four automated steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Connect", desc: "Link your existing clinic apps and storage securely.", link: "/integrations" },
              { step: "02", title: "Extract", desc: "Cleo.ai identifies and structures patient data automatically.", link: "/features" },
              { step: "03", title: "Automate", desc: "Workflows trigger based on incoming documents or events.", link: "/features" },
              { step: "04", title: "Insight", desc: "Receive structured reports and actionable summaries.", link: "/product" },
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="text-6xl font-light text-muted-foreground/10 absolute -top-8 -left-4 select-none group-hover:text-primary/10 transition-colors duration-500">
                  {item.step}
                </div>
                <div className="relative z-10 bg-card border border-border/40 rounded-2xl p-6 h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground font-light mb-6">{item.desc}</p>
                  </div>
                  <Link href={item.link}>
                    <Button variant="ghost" className="p-0 h-auto hover:bg-transparent hover:text-primary group-hover:translate-x-1 transition-all w-fit">
                      Learn More <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-heading font-medium mb-2">Powerful Features</h2>
              <p className="text-muted-foreground">Everything you need to run a modern clinic.</p>
            </div>
            <Link href="/features">
              <Button variant="outline" className="hidden md:flex rounded-full">View All Features</Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: FileText, title: "Files AI", desc: "Smart document processing and categorization." },
              { icon: Mail, title: "Emails AI", desc: "Draft responses and sort priority inbox items." },
              { icon: Activity, title: "Real-time Data", desc: "Live patient monitoring and status updates." },
              { icon: Zap, title: "Automation Builder", desc: "Drag-and-drop workflow creation tool." },
              { icon: Database, title: "Patient Records", desc: "Centralized, secure patient history." },
              { icon: CheckCircle2, title: "Compliance", desc: "HIPAA-ready security and audit logs." },
            ].map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl border border-border/40 hover:border-primary/20 hover:bg-muted/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-light mb-6">{feature.desc}</p>
                <Link href="/features">
                  <Button variant="link" className="p-0 h-auto text-muted-foreground group-hover:text-primary transition-colors">
                    Open Feature Page
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-black/40 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-medium">Trusted by Modern Clinics</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { quote: "Cleo.ai reduced 80% of our clerical work in the first week.", author: "Dr. Yasmin K.", role: "Chief of Medicine" },
              { quote: "Our patient documents finally make sense. Brilliant extraction.", author: "Westline Clinic", role: "Operations Team" },
              { quote: "The automation builder is a complete game changer for our intake flow.", author: "Mediva Group", role: "Admin Staff" },
              { quote: "Cleo.ai feels like having a full-time operations assistant.", author: "Dr. Miguel Lopez", role: "Private Practice" },
              { quote: "We replaced five tools with one. Clean, fast, and reliable.", author: "Harmony Care", role: "Clinical Director" },
              { quote: "Finally, software that doesn't look like it was built in 1990.", author: "Apex Dental", role: "Practice Manager" },
            ].map((t, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                <p className="text-lg font-light leading-relaxed opacity-90 mb-6">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-xs font-bold">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{t.author}</div>
                    <div className="text-xs text-white/50">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/use-cases">
              <Button variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 hover:text-white transition-all">
                Read More Stories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-medium mb-12">Works with your stack</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Placeholders for Brands to avoid complex SVGs for now, or use Lucide if appropriate */}
            {["Google Drive", "Gmail", "Notion", "Dropbox", "Microsoft 365", "Outlook"].map((brand) => (
              <div key={brand} className="text-2xl font-bold font-heading">{brand}</div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/integrations">
              <Button variant="outline" className="rounded-full">View All Integrations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-primary rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] [background-size:64px_64px] opacity-10"></div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-medium mb-6 relative z-10">
              Start automating your clinic with Cleo.ai today.
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of healthcare providers who have reclaimed their time.
            </p>
            <Link href="/onboarding">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50 hover:text-primary border-none rounded-full px-10 h-16 text-lg font-medium relative z-10 shadow-xl">
                Start Free Workspace
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="font-heading font-bold text-xl mb-4">Cleo.ai</div>
            <p className="text-sm text-muted-foreground">
              Intelligent clinical operations for the modern era.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/features" className="hover:text-primary">Features</Link></li>
              <li><Link href="/integrations" className="hover:text-primary">Integrations</Link></li>
              <li><Link href="/docs" className="hover:text-primary">Security</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/product" className="hover:text-primary">About</Link></li>
              <li><Link href="/use-cases" className="hover:text-primary">Customers</Link></li>
              <li><Link href="/docs" className="hover:text-primary">Careers</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="font-medium mb-4">Legal</h4>
             <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/docs" className="hover:text-primary">Privacy</Link></li>
              <li><Link href="/docs" className="hover:text-primary">Terms</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

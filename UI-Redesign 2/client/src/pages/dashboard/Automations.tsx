import { Button } from "@/components/ui/button";
import { 
  Plus, 
  Play, 
  Save, 
  MoreHorizontal, 
  FileText, 
  Mail, 
  Database,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Automations() {
  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-6">
        <div>
           <h1 className="text-2xl font-heading font-medium">New Automation</h1>
           <p className="text-muted-foreground text-sm">Design your workflow visually.</p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" className="gap-2"><Save className="w-4 h-4" /> Save Workflow</Button>
           <Button className="gap-2 bg-green-600 hover:bg-green-700 text-white"><Play className="w-4 h-4" /> Enable Workflow</Button>
        </div>
      </div>

      <div className="flex-1 bg-muted/20 border border-border/60 rounded-2xl relative overflow-hidden shadow-inner">
         {/* Grid Background */}
         <div className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{ backgroundImage: 'radial-gradient(circle, #94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
         </div>

         {/* Mock Workflow Nodes */}
         <div className="absolute inset-0 flex items-center justify-center">
            
            {/* Trigger Node */}
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.1 }}
               className="absolute left-20 top-1/2 -translate-y-1/2"
            >
               <div className="w-64 bg-white rounded-xl border border-border shadow-lg p-0 overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="bg-slate-50 p-3 border-b border-border flex items-center justify-between">
                     <div className="flex items-center gap-2 font-medium text-sm">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center"><Mail className="w-3 h-3" /></div>
                        Trigger: New Email
                     </div>
                     <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="p-4 space-y-2">
                     <div className="text-xs text-muted-foreground">When email subject contains:</div>
                     <div className="bg-muted/30 px-2 py-1 rounded text-sm font-mono border border-border">"Patient Referral"</div>
                  </div>
                  
                  {/* Connector Point */}
                  <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white border border-border rounded-full flex items-center justify-center z-10 shadow-sm cursor-pointer hover:scale-110 transition-transform">
                     <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
               </div>
            </motion.div>

            {/* Connection Line 1 */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
               <motion.path 
                 d="M 336,350 C 450,350 450,350 550,350" 
                 fill="none" 
                 stroke="hsl(var(--border))" 
                 strokeWidth="2" 
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 1, delay: 0.5 }}
               />
            </svg>

            {/* Action Node 1 */}
            <motion.div 
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.3 }}
               className="absolute left-[550px] top-1/2 -translate-y-1/2"
            >
               <div className="w-64 bg-white rounded-xl border border-border shadow-lg p-0 overflow-hidden hover:border-primary/50 transition-colors">
                  <div className="bg-slate-50 p-3 border-b border-border flex items-center justify-between">
                     <div className="flex items-center gap-2 font-medium text-sm">
                        <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded flex items-center justify-center"><FileText className="w-3 h-3" /></div>
                        Action: Extract Data
                     </div>
                     <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="p-4 space-y-2">
                     <div className="text-xs text-muted-foreground">Extract fields:</div>
                     <div className="flex flex-wrap gap-1">
                        <span className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded text-xs border border-purple-100">Patient Name</span>
                        <span className="bg-purple-50 text-purple-700 px-1.5 py-0.5 rounded text-xs border border-purple-100">DOB</span>
                     </div>
                  </div>

                  {/* Connector Point Left */}
                  <div className="absolute top-1/2 -left-3 w-6 h-6 bg-white border border-border rounded-full flex items-center justify-center z-10 shadow-sm">
                     <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                   {/* Connector Point Right */}
                   <div className="absolute top-1/2 -right-3 w-6 h-6 bg-white border border-border rounded-full flex items-center justify-center z-10 shadow-sm cursor-pointer hover:scale-110 transition-transform">
                     <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
               </div>
            </motion.div>

             {/* Connection Line 2 */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible">
               <motion.path 
                 d="M 806,350 C 920,350 920,350 1020,350" 
                 fill="none" 
                 stroke="hsl(var(--border))" 
                 strokeWidth="2"
                 strokeDasharray="4 4"
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 1, delay: 0.8 }}
               />
            </svg>

             {/* Action Node 2 (Ghost/Add) */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 1 }}
               className="absolute left-[1020px] top-1/2 -translate-y-1/2"
            >
               <Button variant="outline" className="w-64 h-32 border-dashed border-2 flex flex-col gap-2 hover:border-primary hover:text-primary transition-all bg-white/50">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                     <Plus className="w-5 h-5" />
                  </div>
                  Add Step
               </Button>
            </motion.div>

         </div>

         {/* Floating Toolbar */}
         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white border border-border shadow-lg rounded-full px-6 py-3 flex gap-4 items-center">
             <Button variant="ghost" size="sm" className="gap-2"><Plus className="w-4 h-4" /> Trigger</Button>
             <div className="w-px h-4 bg-border" />
             <Button variant="ghost" size="sm" className="gap-2"><Plus className="w-4 h-4" /> Action</Button>
             <div className="w-px h-4 bg-border" />
             <Button variant="ghost" size="sm" className="gap-2"><Plus className="w-4 h-4" /> Condition</Button>
         </div>
      </div>
    </div>
  );
}

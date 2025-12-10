import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  FileText, 
  Search, 
  Filter, 
  Download, 
  Trash2, 
  Eye, 
  MoreVertical, 
  Wand2,
  UserPlus
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

export default function Files() {
  const [selectedFile, setSelectedFile] = useState<number | null>(null);

  const files = [
    { id: 1, name: "Lab_Results_John_Doe_2023.pdf", type: "PDF", size: "2.4 MB", date: "Today, 10:23 AM", patient: "John Doe", summary: "Blood work analysis shows normal range for all key indicators. Vitamin D slightly low." },
    { id: 2, name: "Referral_Letter_Smith.docx", type: "DOCX", size: "1.1 MB", date: "Yesterday, 4:15 PM", patient: "Jane Smith", summary: "Referral for orthopedic consultation regarding chronic knee pain." },
    { id: 3, name: "Insurance_Claim_X99.pdf", type: "PDF", size: "856 KB", date: "Oct 24, 2023", patient: "Mike Ross", summary: "Claim processed for dental cleaning. Pending approval for cavity filling." },
    { id: 4, name: "XRay_Scan_v2.png", type: "IMG", size: "14.2 MB", date: "Oct 22, 2023", patient: "Sarah Lee", summary: "Chest X-Ray scan image. No fractures detected." },
    { id: 5, name: "Patient_Intake_Form.pdf", type: "PDF", size: "1.8 MB", date: "Oct 20, 2023", patient: "New Patient", summary: "Completed intake form including medical history and consent." },
    { id: 6, name: "Prescription_Refill_Req.pdf", type: "PDF", size: "400 KB", date: "Oct 19, 2023", patient: "Tom Hanks", summary: "Request for Lisinopril refill. 10mg daily." },
  ];

  return (
    <div className="flex h-[calc(100vh-8rem)] gap-6 animate-in fade-in duration-500">
      
      {/* Left Side: File List */}
      <div className={`flex-1 flex flex-col bg-card rounded-2xl border border-border shadow-sm overflow-hidden transition-all duration-300 ${selectedFile ? 'lg:w-2/3' : 'w-full'}`}>
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search files..." className="pl-9 h-10 bg-muted/30 border-none" />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-10 gap-2"><Filter className="w-4 h-4" /> Filter</Button>
            <Button size="sm" className="h-10 gap-2">Upload</Button>
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-muted/30 text-xs font-medium text-muted-foreground border-b border-border">
          <div className="col-span-5">Name</div>
          <div className="col-span-3">Date</div>
          <div className="col-span-2">Size</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* File List */}
        <ScrollArea className="flex-1">
          <div className="divide-y divide-border/50">
            {files.map((file) => (
              <div 
                key={file.id} 
                onClick={() => setSelectedFile(file.id)}
                className={`grid grid-cols-12 gap-4 px-6 py-4 items-center cursor-pointer transition-colors hover:bg-muted/40 ${selectedFile === file.id ? 'bg-primary/5 border-l-2 border-l-primary' : 'border-l-2 border-l-transparent'}`}
              >
                <div className="col-span-5 flex items-center gap-3 overflow-hidden">
                  <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="truncate font-medium text-sm text-foreground">{file.name}</div>
                </div>
                <div className="col-span-3 text-sm text-muted-foreground">{file.date}</div>
                <div className="col-span-2 text-sm text-muted-foreground">{file.size}</div>
                <div className="col-span-2 flex justify-end">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="w-4 h-4" /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Download</DropdownMenuItem>
                      <DropdownMenuItem>Rename</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Right Side: Detail Panel */}
      <AnimatePresence>
        {selectedFile && (
          <motion.div 
            initial={{ opacity: 0, x: 20, width: 0 }}
            animate={{ opacity: 1, x: 0, width: "380px" }}
            exit={{ opacity: 0, x: 20, width: 0 }}
            className="hidden lg:flex flex-col bg-card rounded-2xl border border-border shadow-lg overflow-hidden"
          >
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-border bg-muted/10 flex justify-between items-start">
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-lg bg-white border shadow-sm flex items-center justify-center text-primary">
                     <FileText className="w-6 h-6" />
                   </div>
                   <div>
                     <h3 className="font-medium text-lg leading-tight mb-1">{files.find(f => f.id === selectedFile)?.name}</h3>
                     <p className="text-sm text-muted-foreground">{files.find(f => f.id === selectedFile)?.type} • {files.find(f => f.id === selectedFile)?.size}</p>
                   </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedFile(null)} className="h-6 w-6 rounded-full hover:bg-muted/50">
                  <Trash2 className="w-4 h-4 text-muted-foreground" />
                </Button>
              </div>

              <ScrollArea className="flex-1 p-6">
                 <div className="space-y-6">
                    {/* Actions */}
                    <div className="grid grid-cols-2 gap-3">
                       <Button variant="outline" className="w-full justify-start gap-2 h-10"><Download className="w-4 h-4" /> Download</Button>
                       <Button variant="outline" className="w-full justify-start gap-2 h-10"><Eye className="w-4 h-4" /> Preview</Button>
                    </div>

                    <div className="space-y-3">
                       <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">AI Analysis</h4>
                       <Card className="bg-primary/5 border-primary/20 shadow-none">
                         <CardContent className="p-4 space-y-3">
                            <div className="flex items-center gap-2 text-primary font-medium text-sm">
                              <Wand2 className="w-4 h-4" /> Summary
                            </div>
                            <p className="text-sm leading-relaxed text-foreground/80">
                              {files.find(f => f.id === selectedFile)?.summary}
                            </p>
                            <Button size="sm" variant="secondary" className="w-full mt-2 bg-white hover:bg-white/80">Regenerate Summary</Button>
                         </CardContent>
                       </Card>
                    </div>

                    <div className="space-y-3">
                       <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Associated Patient</h4>
                       <div className="flex items-center justify-between p-3 border border-border rounded-lg bg-card">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                              {files.find(f => f.id === selectedFile)?.patient.split(' ').map(n => n[0]).join('')}
                            </div>
                            <span className="font-medium text-sm">{files.find(f => f.id === selectedFile)?.patient}</span>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8"><MoreVertical className="w-4 h-4" /></Button>
                       </div>
                       <Button variant="outline" className="w-full border-dashed border-border text-muted-foreground hover:text-primary hover:border-primary/50">
                         <UserPlus className="w-4 h-4 mr-2" /> Link to different patient
                       </Button>
                    </div>

                    <div className="space-y-3">
                       <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Extracted Data</h4>
                       <div className="space-y-2">
                          {[
                            { label: "Date of Service", value: "Oct 24, 2023" },
                            { label: "Provider", value: "Dr. A. Smith" },
                            { label: "Document Type", value: "Clinical Report" }
                          ].map((item, i) => (
                            <div key={i} className="flex justify-between text-sm py-2 border-b border-border/50 last:border-0">
                               <span className="text-muted-foreground">{item.label}</span>
                               <span className="font-medium">{item.value}</span>
                            </div>
                          ))}
                       </div>
                       <Button className="w-full mt-2">Extract More Data</Button>
                    </div>
                 </div>
              </ScrollArea>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

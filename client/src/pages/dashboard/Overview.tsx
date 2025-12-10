import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  Users, 
  FileText, 
  Zap, 
  Clock, 
  MoreHorizontal,
  FileCheck,
  AlertCircle
} from "lucide-react";

export default function Overview() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-heading font-medium tracking-tight">Overview</h1>
           <p className="text-muted-foreground mt-1">Welcome back, Dr. Richards. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
           <Button variant="outline" className="hidden sm:flex">Export Report</Button>
           <Button>New Patient</Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Total Patients", value: "1,284", icon: Users, change: "+12% from last month", trend: "up" },
          { title: "Docs Processed", value: "8,432", icon: FileText, change: "+5% from last month", trend: "up" },
          { title: "Active Workflows", value: "24", icon: Zap, change: "All systems operational", trend: "neutral" },
          { title: "Pending Items", value: "12", icon: Clock, change: "Requires attention", trend: "down" },
        ].map((kpi, i) => (
          <Card key={i} className="shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
              <kpi.icon className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold font-heading">{kpi.value}</div>
              <p className={`text-xs mt-1 ${kpi.trend === 'down' ? 'text-amber-600' : 'text-muted-foreground'}`}>
                {kpi.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity Table */}
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
            <Button variant="ghost" size="sm" className="text-muted-foreground">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {[
                { type: "file", title: "Lab Results - J. Doe", time: "2 mins ago", status: "Processed" },
                { type: "workflow", title: "Intake Automation", time: "15 mins ago", status: "Completed" },
                { type: "alert", title: "Missing Insurance Info", time: "1 hour ago", status: "Action Required" },
                { type: "file", title: "Referral Letter - Dr. Smith", time: "2 hours ago", status: "Processed" },
                { type: "workflow", title: "Billing Follow-up", time: "3 hours ago", status: "Sent" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/30 rounded-lg transition-colors group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.type === 'file' ? 'bg-blue-50 text-blue-600' : 
                      item.type === 'alert' ? 'bg-amber-50 text-amber-600' : 
                      'bg-green-50 text-green-600'
                    }`}>
                      {item.type === 'file' ? <FileText className="w-5 h-5" /> : 
                       item.type === 'alert' ? <AlertCircle className="w-5 h-5" /> : 
                       <Zap className="w-5 h-5" />}
                    </div>
                    <div>
                      <div className="font-medium text-sm group-hover:text-primary transition-colors">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                       item.status === 'Action Required' ? 'bg-amber-100 text-amber-700' : 
                       'bg-muted text-muted-foreground'
                    }`}>
                      {item.status}
                    </span>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Presentation / Report */}
        <div className="space-y-6">
           <Card className="shadow-sm bg-gradient-to-br from-primary to-blue-600 text-white border-none overflow-hidden relative">
             <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
             <CardHeader>
               <CardTitle className="text-white flex items-center gap-2">
                 <FileCheck className="w-5 h-5" />
                 Daily Summary
               </CardTitle>
             </CardHeader>
             <CardContent className="space-y-4">
               <p className="text-blue-50 text-sm leading-relaxed">
                 Cleo has processed <strong>14 new documents</strong> and updated <strong>8 patient records</strong> since your last login. No critical errors found.
               </p>
               <Button variant="secondary" className="w-full bg-white text-primary hover:bg-blue-50 border-none font-medium">
                 Open Presentation
               </Button>
             </CardContent>
           </Card>

           <Card className="shadow-sm">
             <CardHeader>
               <CardTitle className="text-sm font-medium text-muted-foreground">Storage Usage</CardTitle>
             </CardHeader>
             <CardContent>
               <div className="flex items-end justify-between mb-2">
                 <div className="text-2xl font-bold font-heading">45%</div>
                 <div className="text-xs text-muted-foreground">450GB / 1TB</div>
               </div>
               <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                 <div className="h-full bg-primary w-[45%] rounded-full" />
               </div>
             </CardContent>
           </Card>
        </div>
      </div>
    </div>
  );
}

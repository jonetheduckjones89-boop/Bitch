import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Onboarding from "@/pages/Onboarding";
import Product from "@/pages/Product";
import UseCases from "@/pages/UseCases";
import Features from "@/pages/Features";
import Docs from "@/pages/Docs";
import IntegrationsPublic from "@/pages/IntegrationsPublic";
import DashboardLayout from "@/pages/dashboard/Layout";
import Overview from "@/pages/dashboard/Overview";
import Files from "@/pages/dashboard/Files";
import Automations from "@/pages/dashboard/Automations";
import Integrations from "@/pages/dashboard/Integrations";

function Router() {
  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/use-cases" component={UseCases} />
      <Route path="/features" component={Features} />
      <Route path="/docs" component={Docs} />
      <Route path="/integrations" component={IntegrationsPublic} />
      <Route path="/onboarding" component={Onboarding} />
      
      {/* Dashboard Routes - Nested under /dashboard */}
      <Route path="/dashboard" nest>
        <DashboardLayout>
          <Switch>
            <Route path="/" component={Overview} />
            <Route path="/files" component={Files} />
            <Route path="/automations" component={Automations} />
            <Route path="/integrations" component={Integrations} />
            {/* Fallback for dashboard 404s */}
            <Route component={NotFound} />
          </Switch>
        </DashboardLayout>
      </Route>

      {/* Global Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

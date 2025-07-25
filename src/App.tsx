import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Consultation from "@/pages/consultation";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import Login from "@/pages/loginSignupPage";
import ForgotPassword from '@/pages/forgotPassword';
import ResetPassword from '@/pages/resetPassword';

import Dashboard from "@/pages/Dashboard";
import AdminDashboard from "@/pages/AdminDashboard";
import DashboardHistory from "@/pages/dashboard/history";
import ConsultationDetail from "@/pages/dashboard/consultation/[id]";
import ContactDetail from "@/pages/dashboard/contact/[id]";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/consultation" component={Consultation} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/history" component={DashboardHistory} />
      <Route path="/dashboard/consultation/:id" component={ConsultationDetail} />
      <Route path="/dashboard/contact/:id" component={ContactDetail} />
      <Route path="/admin" component={AdminDashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

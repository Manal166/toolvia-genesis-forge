
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Tool from "./pages/Tool";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import FeedbackButton from "./components/FeedbackButton";

const queryClient = new QueryClient();

const AppContent = () => {
  useAnalytics(); // This will track page views automatically
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/:toolId" element={<Tool />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Global Feedback Button */}
      <FeedbackButton variant="floating" />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

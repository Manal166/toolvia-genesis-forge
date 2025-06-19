
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useAnalytics } from "@/hooks/useAnalytics";
import Index from "./pages/Index";
import Tools from "./pages/Tools";
import Tool from "./pages/Tool";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import FeedbackButton from "./components/FeedbackButton";

// Tool detail pages
import CodeExplainerDetails from "./pages/tools/CodeExplainerDetails";
import AICodeGeneratorDetails from "./pages/tools/AICodeGeneratorDetails";
import BugFixerDetails from "./pages/tools/BugFixerDetails";
import RegexGeneratorDetails from "./pages/tools/RegexGeneratorDetails";
import CodeTranslatorDetails from "./pages/tools/CodeTranslatorDetails";
import PseudocodeGeneratorDetails from "./pages/tools/PseudocodeGeneratorDetails";

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
        
        {/* Tool detail pages for SEO */}
        <Route path="/tools/code-explainer/details" element={<CodeExplainerDetails />} />
        <Route path="/tools/ai-code-generator/details" element={<AICodeGeneratorDetails />} />
        <Route path="/tools/bug-fixer/details" element={<BugFixerDetails />} />
        <Route path="/tools/regex-generator/details" element={<RegexGeneratorDetails />} />
        <Route path="/tools/code-translator/details" element={<CodeTranslatorDetails />} />
        <Route path="/tools/pseudocode-generator/details" element={<PseudocodeGeneratorDetails />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
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
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

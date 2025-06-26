
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
import Community from "./pages/Community";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import FeedbackButton from "./components/FeedbackButton";

// Tool detail pages - only for non-AI tools
import CaseConverterDetails from "./pages/tools/CaseConverterDetails";
import PasswordGeneratorDetails from "./pages/tools/PasswordGeneratorDetails";
import URLEncoderDecoderDetails from "./pages/tools/URLEncoderDecoderDetails";
import UnitConverterDetails from "./pages/tools/UnitConverterDetails";
import TextCompareDetails from "./pages/tools/TextCompareDetails";
import RemoveDuplicateLinesDetails from "./pages/tools/RemoveDuplicateLinesDetails";

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
        <Route path="/settings" element={<Settings />} />
        
        {/* Tool detail pages for SEO - only non-AI tools */}
        <Route path="/tools/case-converter/details" element={<CaseConverterDetails />} />
        <Route path="/tools/password-generator/details" element={<PasswordGeneratorDetails />} />
        <Route path="/tools/url-encoder-decoder/details" element={<URLEncoderDecoderDetails />} />
        <Route path="/tools/unit-converter/details" element={<UnitConverterDetails />} />
        <Route path="/tools/text-compare/details" element={<TextCompareDetails />} />
        <Route path="/tools/remove-duplicate-lines/details" element={<RemoveDuplicateLinesDetails />} />
        
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/community" element={<Community />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      {/* Global Feedback Button */}
      <FeedbackButton variant="floating" />
    </>
  );
};

const App = () => {
  console.log("App component rendering...");
  
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen w-full">
              <Toaster />
              <Sonner />
              <AppContent />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;

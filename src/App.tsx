import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Home from "./pages/Index";
import Tools from "./pages/Tools";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";
import Tool from "./pages/Tool";

// Blog posts
import CleanTextGuide from "./pages/blog/CleanTextGuide";

// Tool detail pages
import RemoveDuplicateLinesDetails from "./pages/tools/RemoveDuplicateLinesDetails";
import TextCompareDetails from "./pages/tools/TextCompareDetails";
import CaseConverterDetails from "./pages/tools/CaseConverterDetails";
import UnitConverterDetails from "./pages/tools/UnitConverterDetails";
import PasswordGeneratorDetails from "./pages/tools/PasswordGeneratorDetails";
import URLEncoderDecoderDetails from "./pages/tools/URLEncoderDecoderDetails";
import AICodeGeneratorDetails from "./pages/tools/AICodeGeneratorDetails";
import BugFixerDetails from "./pages/tools/BugFixerDetails";
import CodeExplainerDetails from "./pages/tools/CodeExplainerDetails";
import CodeTranslatorDetails from "./pages/tools/CodeTranslatorDetails";
import FlowchartGeneratorDetails from "./pages/tools/FlowchartGeneratorDetails";
import PseudocodeGeneratorDetails from "./pages/tools/PseudocodeGeneratorDetails";
import RegexGeneratorDetails from "./pages/tools/RegexGeneratorDetails";
import UnitTestGeneratorDetails from "./pages/tools/UnitTestGeneratorDetails";
import AIInterviewGeneratorDetails from "./pages/tools/AIInterviewGeneratorDetails";
import CodeMinifierDetails from "./pages/tools/CodeMinifierDetails";
import ImageAltTextGeneratorDetails from "./pages/tools/ImageAltTextGeneratorDetails";
import JsonYamlCsvConverterDetails from "./pages/tools/JsonYamlCsvConverterDetails";
import ColorPaletteExtractorDetails from "./pages/tools/ColorPaletteExtractorDetails";
import LivePlaygroundDetails from "./pages/tools/LivePlaygroundDetails";
import TextSummarizerDetails from "./pages/tools/TextSummarizerDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            
            {/* Blog posts */}
            <Route path="/blog/clean-text-guide" element={<CleanTextGuide />} />
            
            {/* Tool pages */}
            <Route path="/tools/:toolId" element={<Tool />} />
            
            {/* Tool detail pages */}
            <Route path="/tools/remove-duplicate-lines/details" element={<RemoveDuplicateLinesDetails />} />
            <Route path="/tools/text-compare/details" element={<TextCompareDetails />} />
            <Route path="/tools/case-converter/details" element={<CaseConverterDetails />} />
            <Route path="/tools/unit-converter/details" element={<UnitConverterDetails />} />
            <Route path="/tools/password-generator/details" element={<PasswordGeneratorDetails />} />
            <Route path="/tools/url-encoder-decoder/details" element={<URLEncoderDecoderDetails />} />
            <Route path="/tools/ai-code-generator/details" element={<AICodeGeneratorDetails />} />
            <Route path="/tools/bug-fixer/details" element={<BugFixerDetails />} />
            <Route path="/tools/code-explainer/details" element={<CodeExplainerDetails />} />
            <Route path="/tools/code-translator/details" element={<CodeTranslatorDetails />} />
            <Route path="/tools/flowchart-generator/details" element={<FlowchartGeneratorDetails />} />
            <Route path="/tools/pseudocode-generator/details" element={<PseudocodeGeneratorDetails />} />
            <Route path="/tools/regex-generator/details" element={<RegexGeneratorDetails />} />
            <Route path="/tools/unit-test-generator/details" element={<UnitTestGeneratorDetails />} />
            <Route path="/tools/ai-interview-generator/details" element={<AIInterviewGeneratorDetails />} />
            <Route path="/tools/code-minifier/details" element={<CodeMinifierDetails />} />
            <Route path="/tools/image-alt-text-generator/details" element={<ImageAltTextGeneratorDetails />} />
            <Route path="/tools/json-yaml-csv-converter/details" element={<JsonYamlCsvConverterDetails />} />
            <Route path="/tools/color-palette-extractor/details" element={<ColorPaletteExtractorDetails />} />
            <Route path="/tools/live-playground/details" element={<LivePlaygroundDetails />} />
            <Route path="/tools/text-summarizer/details" element={<TextSummarizerDetails />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;


import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getToolById } from '@/config/tools.config';
import { isToolSupported } from '@/config/toolRoutes.config';
import ToolLoader from '@/components/ToolLoader';
import NotFound from './NotFound';

export default function Tool() {
  const { toolId } = useParams();
  const [isDark, setIsDark] = useState(true); // Default to dark mode

  // Check if toolId exists and is supported
  if (!toolId || !isToolSupported(toolId)) {
    return <NotFound />;
  }

  // Get tool configuration
  const tool = getToolById(toolId);
  if (!tool) {
    return <NotFound />;
  }

  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      <Helmet>
        <title>{tool.name} - Free Online Tool | Toolvia</title>
        <meta name="description" content={`${tool.description} Free, fast, and reliable ${tool.name.toLowerCase()} tool by Toolvia.`} />
        <meta name="keywords" content={`${tool.name}, ${tool.category}, online tool, free tool, toolvia`} />
        <meta name="author" content="Toolvia" />
        <meta property="og:title" content={`${tool.name} - Free Online Tool | Toolvia`} />
        <meta property="og:description" content={`${tool.description} Free, fast, and reliable ${tool.name.toLowerCase()} tool by Toolvia.`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={`${tool.name} - Free Online Tool | Toolvia`} />
        <meta name="twitter:description" content={`${tool.description} Free, fast, and reliable ${tool.name.toLowerCase()} tool by Toolvia.`} />
        
        {/* AdSense and SEO meta tags */}
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href={`https://toolvia.com/tools/${toolId}`} />
      </Helmet>
      
      <ToolLoader 
        tool={tool} 
        isDark={isDark} 
        onToggleTheme={handleToggleTheme}
      />
    </>
  );
}


import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getToolById } from '@/config/tools.config';
import { isToolSupported } from '@/config/toolRoutes.config';
import ToolLoader from '@/components/ToolLoader';
import NotFound from './NotFound';

export default function Tool() {
  const { toolId } = useParams();
  const [isDark, setIsDark] = useState(false);

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
        <title>{tool.name} | Toolvia</title>
        <meta name="description" content={tool.description} />
        <meta name="keywords" content={`${tool.name}, ${tool.category}, online tool, free tool`} />
      </Helmet>
      
      <ToolLoader 
        tool={tool} 
        isDark={isDark} 
        onToggleTheme={handleToggleTheme}
      />
    </>
  );
}

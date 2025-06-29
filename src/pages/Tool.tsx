
import { Helmet } from 'react-helmet-async';
import ToolCard from '@/components/ToolCard';
import { toolsConfig } from '@/config/tools.config';

export default function Tools() {
  return (
    <>
      <Helmet>
        <title>All Tools | Toolvia</title>
        <meta
          name="description"
          content="Explore all the free online tools available on Toolvia, including word counter, unit converter, password generator, and more."
        />
      </Helmet>
      <div className="max-w-5xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Free Online Tools for Students</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {toolsConfig.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </>
  );
}

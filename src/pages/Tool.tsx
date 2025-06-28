import { Helmet } from 'react-helmet-async';
import ToolCard from '@/components/ToolCard';

const tools = [
  {
    name: 'Word Counter',
    path: '/tools/word-counter',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    category: 'Text Tools',
  },
  {
    name: 'Case Converter',
    path: '/tools/case-converter',
    description: 'Convert text to UPPERCASE, lowercase, Title Case, and more.',
    category: 'Text Tools',
  },
  {
    name: 'Unit Converter',
    path: '/tools/unit-converter',
    description: 'Convert between units of length, weight, temperature, and more.',
    category: 'Utilities',
  },
  {
    name: 'Text Compare Tool',
    path: '/tools/text-compare',
    description: 'Compare two blocks of text and highlight the differences.',
    category: 'Text Tools',
  },
  {
    name: 'Remove Duplicate Lines',
    path: '/tools/remove-duplicate-lines',
    description: 'Remove duplicate lines from any text quickly.',
    category: 'Text Tools',
  },
  {
    name: 'Password Generator',
    path: '/tools/password-generator',
    description: 'Generate secure and random passwords with one click.',
    category: 'Security Tools',
  },
  {
    name: 'URL Encoder/Decoder',
    path: '/tools/url-encoder-decoder',
    description: 'Encode or decode URLs easily with this simple tool.',
    category: 'Web Tools',
  },
];

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
          {tools.map((tool) => (
            <ToolCard key={tool.path} {...tool} />
          ))}
        </div>
      </div>
    </>
  );
}

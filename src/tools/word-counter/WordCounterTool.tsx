import React, { useState } from 'react';
import { ToolComponentProps } from '@/config/toolRoutes.config';
import { CopyIcon, RefreshCcwIcon } from 'lucide-react';

const WordCounterTool: React.FC<ToolComponentProps> = ({ isDark }) => {
  const [text, setText] = useState('');

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphCount = text.split(/\n{2,}/).filter(p => p.trim().length > 0).length;

  const handleClear = () => setText('');
  const handleCopy = () => navigator.clipboard.writeText(text);

  return (
    <div className="max-w-4xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Word Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={10}
        placeholder="Type or paste your text here..."
        className="w-full p-4 rounded-md border border-gray-700 bg-gray-900 text-white resize-none"
      />
      <div className="flex flex-wrap justify-between items-center mt-4 gap-2">
        <div className="flex gap-4 text-sm sm:text-base">
          <p><strong>Words:</strong> {wordCount}</p>
          <p><strong>Characters:</strong> {charCount}</p>
          <p><strong>Sentences:</strong> {sentenceCount}</p>
          <p><strong>Paragraphs:</strong> {paragraphCount}</p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <CopyIcon className="w-4 h-4" /> Copy
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-1 px-4 py-2 text-sm font-medium bg-red-600 text-white rounded hover:bg-red-700"
          >
            <RefreshCcwIcon className="w-4 h-4" /> Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default WordCounterTool;

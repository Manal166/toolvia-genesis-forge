import React, { useState } from 'react';

const WordCounterTool: React.FC = () => {
  const [text, setText] = useState('');

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter(Boolean).length;
  const paragraphCount = text.split(/\n{2,}/).filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4 text-center">Word Counter</h1>
      <textarea
        className="w-full h-48 p-4 bg-gray-800 text-white border border-gray-600 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="bg-gray-700 p-4 rounded">
          <h2 className="text-lg font-semibold">Words</h2>
          <p className="text-xl">{wordCount}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <h2 className="text-lg font-semibold">Characters</h2>
          <p className="text-xl">{charCount}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <h2 className="text-lg font-semibold">Sentences</h2>
          <p className="text-xl">{sentenceCount}</p>
        </div>
        <div className="bg-gray-700 p-4 rounded">
          <h2 className="text-lg font-semibold">Paragraphs</h2>
          <p className="text-xl">{paragraphCount}</p>
        </div>
      </div>
    </div>
  );
};

export default WordCounterTool;

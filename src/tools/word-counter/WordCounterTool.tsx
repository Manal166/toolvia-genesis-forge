import React, { useState } from 'react';

const WordCounterTool = () => {
  const [text, setText] = useState('');

  const countWords = (text: string) =>
    text.trim().split(/\s+/).filter(word => word).length;

  const countCharacters = (text: string) =>
    text.length;

  const countCharactersNoSpaces = (text: string) =>
    text.replace(/\s+/g, '').length;

  const countSentences = (text: string) =>
    (text.match(/[\w|\)][.?!](\s|$)/g) || []).length;

  const countParagraphs = (text: string) =>
    text.trim().split(/\n{2,}/).filter(p => p).length;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Word Counter Tool</h1>

      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Enter your text here..."
        rows={10}
        className="w-full p-4 rounded-md bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-blue-500"
      />

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-white">
        <div>Words: <strong>{countWords(text)}</strong></div>
        <div>Characters: <strong>{countCharacters(text)}</strong></div>
        <div>No-Spaces: <strong>{countCharactersNoSpaces(text)}</strong></div>
        <div>Sentences: <strong>{countSentences(text)}</strong></div>
        <div>Paragraphs: <strong>{countParagraphs(text)}</strong></div>
      </div>

      <button
        onClick={() => setText('')}
        className="mt-4 px-4 py-2 bg-white text-gray-900 rounded hover:bg-gray-200"
      >
        Clear
      </button>
    </div>
  );
};

export default WordCounterTool;

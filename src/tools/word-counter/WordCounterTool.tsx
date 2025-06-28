import React, { useState, useEffect } from 'react';
import { ToolComponentProps } from '@/config/toolRoutes.config';

const WordCounterTool: React.FC<ToolComponentProps> = ({ isDark }) => {
  const [text, setText] = useState('');
  const [stats, setStats] = useState({
    words: 0,
    characters: 0,
    sentences: 0,
    paragraphs: 0,
    readingTime: '0 sec',
  });

  useEffect(() => {
    const words = text.trim().split(/\s+/).filter(word => word !== '').length;
    const characters = text.length;
    const sentences = (text.match(/[\w|\)][.?!](\s|$)/g) || []).length;
    const paragraphs = text.split(/\n{2,}/).filter(p => p.trim() !== '').length;
    const readingTimeSec = Math.ceil(words / 3); // 180 wpm -> approx 3 words/sec
    const readingTime = readingTimeSec > 60
      ? `${Math.floor(readingTimeSec / 60)} min ${readingTimeSec % 60} sec`
      : `${readingTimeSec} sec`;

    setStats({ words, characters, sentences, paragraphs, readingTime });
  }, [text]);

  return (
    <div className="p-4 max-w-4xl mx-auto text-white">
      <h1 className="text-2xl font-bold mb-4 text-center">Word Counter Tool</h1>
      <textarea
        rows={10}
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full p-4 bg-gray-800 text-white border border-gray-600 rounded resize-none"
        placeholder="Type or paste your text here..."
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 bg-gray-900 p-4 rounded">
        <StatItem label="Words" value={stats.words} />
        <StatItem label="Characters" value={stats.characters} />
        <StatItem label="Sentences" value={stats.sentences} />
        <StatItem label="Paragraphs" value={stats.paragraphs} />
        <StatItem label="Reading Time" value={stats.readingTime} />
      </div>
    </div>
  );
};

const StatItem = ({ label, value }: { label: string; value: string | number }) => (
  <div className="bg-gray-800 p-4 rounded text-center">
    <div className="text-lg font-semibold">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

export default WordCounterTool;

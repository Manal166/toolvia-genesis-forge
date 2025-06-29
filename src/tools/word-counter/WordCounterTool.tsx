
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ToolComponentProps } from '@/config/toolRoutes.config';
import ToolWrapper from '@/components/ToolWrapper';

const WordCounterTool: React.FC<ToolComponentProps> = ({ tool, isDark, onToggleTheme }) => {
  const [text, setText] = useState('');

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const charCountNoSpaces = text.replace(/\s/g, '').length;
  const sentenceCount = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphCount = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;

  return (
    <>
      <Helmet>
        <title>Word Counter Tool - Count Words, Characters & More | Toolvia</title>
        <meta
          name="description"
          content="Free online word counter tool. Instantly count words, characters, sentences, and paragraphs. Perfect for essays, articles, social media posts, and SEO content optimization."
        />
        <meta name="keywords" content="word counter, character counter, text analysis, writing tools, SEO tools" />
      </Helmet>

      <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className={`block text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Enter Your Text
            </label>
            <textarea
              className={`w-full h-64 p-4 rounded-lg border-2 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                isDark 
                  ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-400' 
                  : 'bg-white text-gray-900 border-gray-300 placeholder-gray-500'
              }`}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste or type your text here to get an instant word count analysis..."
            />
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Text Statistics
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-6 rounded-lg text-center transition-colors ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <div className="text-3xl font-bold text-blue-600 mb-2">{wordCount}</div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Words</div>
            </div>
            
            <div className={`p-6 rounded-lg text-center transition-colors ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <div className="text-3xl font-bold text-green-600 mb-2">{charCount}</div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Characters</div>
            </div>
            
            <div className={`p-6 rounded-lg text-center transition-colors ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <div className="text-3xl font-bold text-purple-600 mb-2">{charCountNoSpaces}</div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Characters (no spaces)</div>
            </div>
            
            <div className={`p-6 rounded-lg text-center transition-colors ${
              isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
            }`}>
              <div className="text-3xl font-bold text-orange-600 mb-2">{sentenceCount}</div>
              <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Sentences</div>
            </div>
          </div>
          
          <div className={`p-6 rounded-lg text-center transition-colors ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            <div className="text-3xl font-bold text-red-600 mb-2">{paragraphCount}</div>
            <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Paragraphs</div>
          </div>

          {/* Additional Info */}
          {text.length > 0 && (
            <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-900/20 border border-blue-800' : 'bg-blue-50 border border-blue-200'}`}>
              <h3 className={`font-semibold mb-2 ${isDark ? 'text-blue-300' : 'text-blue-800'}`}>
                Reading Time Estimate
              </h3>
              <p className={`text-sm ${isDark ? 'text-blue-200' : 'text-blue-700'}`}>
                Approximately {Math.ceil(wordCount / 200)} minute{Math.ceil(wordCount / 200) !== 1 ? 's' : ''} to read
                (based on 200 words per minute)
              </p>
            </div>
          )}
        </div>
      </ToolWrapper>
    </>
  );
};

export default WordCounterTool;

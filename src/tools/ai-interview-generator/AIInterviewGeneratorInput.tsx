
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Sparkles, RefreshCw, HelpCircle } from 'lucide-react';
import { aiInterviewService, InterviewGenerationRequest } from '@/services/aiInterviewService';

interface AIInterviewGeneratorInputProps {
  onGenerate: (request: InterviewGenerationRequest) => void;
  isLoading: boolean;
  isDark: boolean;
}

const AIInterviewGeneratorInput = ({ onGenerate, isLoading, isDark }: AIInterviewGeneratorInputProps) => {
  const [prompt, setPrompt] = useState('');
  const [technology, setTechnology] = useState('JavaScript');
  const [difficulty, setDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced'>('Intermediate');
  const [questionCount, setQuestionCount] = useState(5);

  const handleGenerate = () => {
    if (!prompt.trim()) return;

    onGenerate({
      prompt: prompt.trim(),
      technology,
      difficulty,
      questionCount
    });
  };

  const handleExampleClick = (example: string) => {
    setPrompt(example);
  };

  const handleClear = () => {
    setPrompt('');
    setTechnology('JavaScript');
    setDifficulty('Intermediate');
    setQuestionCount(5);
  };

  const technologies = aiInterviewService.getTechnologyOptions();
  const difficultyLevels = aiInterviewService.getDifficultyLevels();
  const examples = aiInterviewService.getExamplePrompts();

  return (
    <Card className={`w-full ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <CardHeader>
        <CardTitle className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
          <Sparkles className="h-5 w-5 text-blue-500" />
          Generate Interview Questions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Configuration Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className={isDark ? 'text-gray-300' : 'text-gray-700'}>Technology</Label>
            <Select value={technology} onValueChange={setTechnology}>
              <SelectTrigger className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {technologies.map((tech) => (
                  <SelectItem key={tech} value={tech}>
                    {tech}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className={isDark ? 'text-gray-300' : 'text-gray-700'}>Difficulty Level</Label>
            <Select value={difficulty} onValueChange={(value: 'Beginner' | 'Intermediate' | 'Advanced') => setDifficulty(value)}>
              <SelectTrigger className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {difficultyLevels.map((level) => (
                  <SelectItem key={level.value} value={level.value}>
                    <div>
                      <div className="font-medium">{level.label}</div>
                      <div className="text-sm text-gray-500">{level.description}</div>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className={isDark ? 'text-gray-300' : 'text-gray-700'}>Question Count</Label>
            <Select value={questionCount.toString()} onValueChange={(value) => setQuestionCount(parseInt(value))}>
              <SelectTrigger className={isDark ? 'bg-gray-700 border-gray-600 text-white' : ''}>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[3, 5, 7, 10].map((count) => (
                  <SelectItem key={count} value={count.toString()}>
                    {count} questions
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Prompt Input */}
        <div className="space-y-2">
          <Label className={isDark ? 'text-gray-300' : 'text-gray-700'}>
            Describe the focus area or specific topics
          </Label>
          <Textarea
            placeholder="e.g., React hooks and state management, Python data structures, or system design concepts..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className={`min-h-[100px] resize-none ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300'
            }`}
          />
        </div>

        {/* Example Prompts */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-blue-500" />
            <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Example Prompts
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {examples.slice(0, 6).map((example, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleExampleClick(example)}
                className={`text-xs ${
                  isDark 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {example}
              </Button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isLoading}
            className="flex-1"
          >
            {isLoading ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Generate Questions
              </>
            )}
          </Button>
          
          <Button
            variant="outline"
            onClick={handleClear}
            disabled={isLoading}
            className={isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
          >
            Clear
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInterviewGeneratorInput;


import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Copy, Download, RefreshCw, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react';
import { InterviewQuestion } from '@/services/aiInterviewService';
import { toast } from '@/hooks/use-toast';
import { aiInterviewService } from '@/services/aiInterviewService';

interface AIInterviewGeneratorOutputProps {
  questions: InterviewQuestion[];
  isLoading: boolean;
  error?: string;
  onRegenerate: () => void;
  isDark: boolean;
}

const AIInterviewGeneratorOutput = ({ 
  questions, 
  isLoading, 
  error, 
  onRegenerate, 
  isDark 
}: AIInterviewGeneratorOutputProps) => {
  const [copiedQuestions, setCopiedQuestions] = useState<Set<string>>(new Set());

  const handleCopyQuestion = async (question: InterviewQuestion) => {
    const text = `Q: ${question.question}\n\nA: ${question.answer || 'Think about this...'}\n\nHints: ${question.hints?.join(', ') || 'None'}`;
    
    try {
      await navigator.clipboard.writeText(text);
      setCopiedQuestions(prev => new Set([...prev, question.id]));
      
      toast({
        title: "Question copied!",
        description: "Interview question copied to clipboard",
      });

      // Reset copied state after 2 seconds
      setTimeout(() => {
        setCopiedQuestions(prev => {
          const newSet = new Set(prev);
          newSet.delete(question.id);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleCopyAll = async () => {
    const allText = questions.map((q, index) => 
      `${index + 1}. ${q.question}\n   Answer: ${q.answer || 'Think about this...'}\n   Hints: ${q.hints?.join(', ') || 'None'}\n`
    ).join('\n');

    try {
      await navigator.clipboard.writeText(allText);
      toast({
        title: "All questions copied!",
        description: `${questions.length} questions copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Unable to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  const handleDownload = () => {
    const content = aiInterviewService.exportToText(questions);
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'interview-questions.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Download started",
      description: "Interview questions downloaded as text file",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <Card className={`w-full ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className={`flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <CheckCircle className="h-5 w-5 text-green-500" />
            Interview Questions
            {questions.length > 0 && (
              <Badge variant="secondary" className="ml-2">
                {questions.length} questions
              </Badge>
            )}
          </CardTitle>
          
          {questions.length > 0 && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyAll}
                className={isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
              >
                <Copy className="h-4 w-4 mr-1" />
                Copy All
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                className={isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
              >
                <Download className="h-4 w-4 mr-1" />
                Download
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onRegenerate}
                className={isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Regenerate
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent>
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <RefreshCw className="h-8 w-8 animate-spin text-blue-500 mx-auto mb-4" />
              <p className={`text-lg font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Generating Interview Questions...
              </p>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                This may take a few moments
              </p>
            </div>
          </div>
        )}

        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
            <div>
              <p className="text-red-800 dark:text-red-200 font-medium">Generation Failed</p>
              <p className="text-red-600 dark:text-red-300 text-sm">{error}</p>
            </div>
          </div>
        )}

        {!isLoading && !error && questions.length === 0 && (
          <div className="text-center py-12">
            <div className={`text-6xl mb-4`}>🤔</div>
            <p className={`text-lg font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Ready to Generate Questions
            </p>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Configure your preferences and click "Generate Questions" to get started
            </p>
          </div>
        )}

        {questions.length > 0 && (
          <Accordion type="single" collapsible className="space-y-2">
            {questions.map((question, index) => (
              <AccordionItem 
                key={question.id} 
                value={question.id}
                className={`border rounded-lg ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <AccordionTrigger className={`px-4 py-3 hover:no-underline ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                  <div className="flex items-start gap-3 w-full text-left">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center`}>
                      {index + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className={`font-medium mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {question.question}
                      </p>
                      <div className="flex items-center gap-2">
                        <Badge className={getDifficultyColor(question.difficulty)}>
                          {question.difficulty}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300 text-gray-600'}
                        >
                          {question.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4 ml-11">
                    {question.answer && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className={`font-medium text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Answer/Key Points:
                          </span>
                        </div>
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} pl-6`}>
                          {question.answer}
                        </p>
                      </div>
                    )}
                    
                    {question.hints && question.hints.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Lightbulb className="h-4 w-4 text-yellow-500" />
                          <span className={`font-medium text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                            Hints:
                          </span>
                        </div>
                        <ul className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} pl-6 space-y-1`}>
                          {question.hints.map((hint, hintIndex) => (
                            <li key={hintIndex} className="flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              <span>{hint}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyQuestion(question)}
                      className={`${isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}`}
                    >
                      {copiedQuestions.has(question.id) ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy Question
                        </>
                      )}
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};

export default AIInterviewGeneratorOutput;

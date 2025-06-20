
import { useState } from 'react';
import { ToolConfig } from '@/config/tools.config';
import ToolWrapper from '@/components/ToolWrapper';
import AIInterviewGeneratorInput from './AIInterviewGeneratorInput';
import AIInterviewGeneratorOutput from './AIInterviewGeneratorOutput';
import { InterviewQuestion, InterviewGenerationRequest, aiInterviewService } from '@/services/aiInterviewService';
import { toast } from '@/hooks/use-toast';

interface AIInterviewGeneratorToolProps {
  tool: ToolConfig;
  isDark: boolean;
  onToggleTheme: () => void;
}

const AIInterviewGeneratorTool = ({ tool, isDark, onToggleTheme }: AIInterviewGeneratorToolProps) => {
  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [lastRequest, setLastRequest] = useState<InterviewGenerationRequest | null>(null);

  const handleGenerate = async (request: InterviewGenerationRequest) => {
    setIsLoading(true);
    setError(undefined);
    setLastRequest(request);
    
    try {
      const result = await aiInterviewService.generateInterviewQuestions(request);
      
      if (result.success) {
        setQuestions(result.questions);
        toast({
          title: "Questions generated successfully!",
          description: `Generated ${result.questions.length} interview questions`,
        });
      } else {
        setError(result.error);
        setQuestions([]);
        toast({
          title: "Generation failed",
          description: result.error || "Failed to generate interview questions",
          variant: "destructive",
        });
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      setQuestions([]);
      toast({
        title: "Generation failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegenerate = () => {
    if (lastRequest) {
      handleGenerate(lastRequest);
    }
  };

  return (
    <ToolWrapper tool={tool} isDark={isDark} onToggleTheme={onToggleTheme}>
      <div className="space-y-6">
        <AIInterviewGeneratorInput
          onGenerate={handleGenerate}
          isLoading={isLoading}
          isDark={isDark}
        />
      </div>
      
      <div className="space-y-6">
        <AIInterviewGeneratorOutput
          questions={questions}
          isLoading={isLoading}
          error={error}
          onRegenerate={handleRegenerate}
          isDark={isDark}
        />
      </div>
    </ToolWrapper>
  );
};

export default AIInterviewGeneratorTool;

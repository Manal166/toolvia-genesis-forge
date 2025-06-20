
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlignJustify, Loader2 } from "lucide-react";
import { SummaryLength } from "@/services/textSummarizerService";

interface TextSummarizerInputProps {
  onSummarize: (text: string, length: SummaryLength) => void;
  isLoading: boolean;
}

const TextSummarizerInput = ({ onSummarize, isLoading }: TextSummarizerInputProps) => {
  const [text, setText] = useState("");
  const [length, setLength] = useState<SummaryLength>("medium");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSummarize(text.trim(), length);
    }
  };

  const loadExample = () => {
    const exampleText = `Artificial Intelligence (AI) has revolutionized numerous industries and continues to shape our daily lives in unprecedented ways. From healthcare and finance to transportation and entertainment, AI technologies are being integrated into systems that were once purely human-operated. Machine learning algorithms can now analyze vast amounts of data to identify patterns, make predictions, and automate complex decision-making processes.

In healthcare, AI-powered diagnostic tools can detect diseases earlier and more accurately than traditional methods. Radiologists use AI to analyze medical images, identifying tumors and abnormalities with remarkable precision. Similarly, AI algorithms help pharmaceutical companies accelerate drug discovery by predicting how different compounds will interact with biological systems.

The financial sector has embraced AI for fraud detection, algorithmic trading, and personalized customer service. Banks use machine learning to monitor transactions in real-time, flagging suspicious activities and preventing financial crimes. Robo-advisors provide automated investment advice based on individual risk profiles and market conditions.

However, the rapid advancement of AI also raises important ethical and societal questions. Concerns about job displacement, privacy, algorithmic bias, and the concentration of AI power in the hands of a few large corporations are becoming increasingly prominent in public discourse. As AI continues to evolve, society must grapple with these challenges while harnessing the technology's potential benefits.

The future of AI promises even more transformative applications, from autonomous vehicles and smart cities to personalized education and climate change solutions. As we stand at this technological crossroads, it's crucial to develop AI systems that are not only powerful and efficient but also transparent, fair, and aligned with human values.`;
    
    setText(exampleText);
  };

  const characterCount = text.length;
  const maxCharacters = 5000;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlignJustify className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          Text Input
        </CardTitle>
        <CardDescription>
          Enter the text you want to summarize (up to 5,000 characters)
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="text">Text to Summarize</Label>
            <Textarea
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste your article, essay, or any long text here..."
              className="min-h-[200px] text-sm"
              maxLength={maxCharacters}
            />
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{characterCount} / {maxCharacters} characters</span>
              {characterCount > maxCharacters * 0.9 && (
                <span className="text-orange-600 dark:text-orange-400">
                  Approaching character limit
                </span>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="length">Summary Length</Label>
            <Select value={length} onValueChange={(value: SummaryLength) => setLength(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select summary length" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="short">Short (2-3 sentences)</SelectItem>
                <SelectItem value="medium">Medium (1 paragraph)</SelectItem>
                <SelectItem value="detailed">Detailed (2-3 paragraphs)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex gap-2">
            <Button 
              type="submit" 
              disabled={!text.trim() || isLoading || characterCount > maxCharacters}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Summarizing...
                </>
              ) : (
                "Generate Summary"
              )}
            </Button>
            
            <Button
              type="button"
              variant="outline"
              onClick={loadExample}
              disabled={isLoading}
            >
              Load Example
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default TextSummarizerInput;

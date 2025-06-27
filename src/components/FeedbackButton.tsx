
import { useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface FeedbackButtonProps {
  toolName?: string;
  variant?: "floating" | "inline";
}

const FeedbackButton = ({ toolName = "CodeBoost", variant = "floating" }: FeedbackButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [feedbackType, setFeedbackType] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!feedback.trim() || !feedbackType) {
      toast({
        title: "Missing Information",
        description: "Please select a feedback type and write your message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Store feedback in localStorage for now (in production, send to backend)
      const feedbackData = {
        id: Date.now().toString(),
        toolName,
        type: feedbackType,
        message: feedback,
        timestamp: new Date().toISOString(),
        url: window.location.href,
      };

      const existingFeedback = JSON.parse(localStorage.getItem('codeboost_feedback') || '[]');
      existingFeedback.push(feedbackData);
      localStorage.setItem('codeboost_feedback', JSON.stringify(existingFeedback));

      console.log('Feedback submitted:', feedbackData);

      toast({
        title: "Feedback Submitted!",
        description: "Thank you for your feedback. We'll review it and make improvements.",
      });

      setFeedback("");
      setFeedbackType("");
      setIsOpen(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonClasses = variant === "floating" 
    ? "fixed bottom-6 right-6 z-50 rounded-full shadow-lg h-12 w-12 p-0 bg-white text-black hover:bg-gray-100"
    : "";

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          className={buttonClasses}
          variant={variant === "floating" ? "default" : "ghost"}
          size={variant === "floating" ? "default" : "sm"}
        >
          <MessageSquare className="h-5 w-5" />
          {variant === "inline" && <span className="ml-2">Feedback</span>}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Share Your Feedback
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="feedback-type">Feedback Type</Label>
            <Select value={feedbackType} onValueChange={setFeedbackType}>
              <SelectTrigger>
                <SelectValue placeholder="Select feedback type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bug">🐛 Bug Report</SelectItem>
                <SelectItem value="feature">💡 Feature Request</SelectItem>
                <SelectItem value="improvement">⚡ Improvement</SelectItem>
                <SelectItem value="praise">👏 Praise</SelectItem>
                <SelectItem value="other">💬 Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="feedback-message">Your Feedback</Label>
            <Textarea
              id="feedback-message"
              placeholder={`Tell us about your experience with ${toolName}...`}
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={4}
              className="resize-none"
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button 
              type="button" 
              variant="ghost" 
              onClick={() => setIsOpen(false)}
              disabled={isSubmitting}
            >
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FeedbackButton;

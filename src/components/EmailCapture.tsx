
import { useState } from "react";
import { Mail, Send, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { analyticsService } from "@/services/analyticsService";

interface EmailCaptureProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: "button" | "banner" | "modal";
  context?: string;
}

const EmailCapture = ({ 
  title = "Stay Updated with CodeBoost",
  description = "Get notified about new tools and features",
  buttonText = "Join Waitlist",
  variant = "button",
  context = "general"
}: EmailCaptureProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email Required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Store email in localStorage (in production, send to backend/email service)
      const emailData = {
        email,
        context,
        timestamp: new Date().toISOString(),
        source: window.location.href,
      };

      const existingEmails = JSON.parse(localStorage.getItem('codeboost_emails') || '[]');
      
      // Check if email already exists
      const emailExists = existingEmails.some((item: any) => item.email === email);
      if (emailExists) {
        toast({
          title: "Already Subscribed",
          description: "This email is already on our list!",
        });
        setIsSubmitted(true);
        return;
      }

      existingEmails.push(emailData);
      localStorage.setItem('codeboost_emails', JSON.stringify(existingEmails));

      // Track analytics event
      analyticsService.trackClick('email_capture', {
        context,
        email_domain: email.split('@')[1],
      });

      console.log('Email captured:', emailData);

      toast({
        title: "Thanks for Joining!",
        description: "We'll keep you updated on new features and improvements.",
      });

      setIsSubmitted(true);
      setEmail("");
      
      // Auto-close modal after success if variant is modal
      if (variant === "button") {
        setTimeout(() => setIsOpen(false), 2000);
      }
    } catch (error) {
      console.error('Error capturing email:', error);
      toast({
        title: "Error",
        description: "Failed to save your email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting || isSubmitted}
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting || isSubmitted}
      >
        {isSubmitted ? (
          <>
            <CheckCircle className="h-4 w-4 mr-2" />
            Subscribed!
          </>
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            {isSubmitting ? "Subscribing..." : buttonText}
          </>
        )}
      </Button>
    </form>
  );

  if (variant === "banner") {
    return (
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-blue-100">{description}</p>
          </div>
          <Mail className="h-8 w-8 text-blue-200" />
        </div>
        {renderForm()}
      </div>
    );
  }

  if (variant === "modal") {
    // This would be triggered programmatically or on page exit
    return null;
  }

  // Default button variant
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <Mail className="h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          {renderForm()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmailCapture;

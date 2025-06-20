import { useState, useEffect } from "react";
import { Search, Plus, MessageSquare, Clock, Tag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

interface Question {
  id: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  timestamp: Date;
  comments: Comment[];
}

interface Comment {
  id: string;
  author: string;
  content: string;
  timestamp: Date;
  parentId?: string;
}

const predefinedTags = [
  "AI Tools", "Code Generation", "Bug Fixing", "Regex", "SQL", 
  "Text Processing", "Image Tools", "PDF Tools", "General", "Feature Request"
];

const Community = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortBy, setSortBy] = useState("latest");
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [showQuestionForm, setShowQuestionForm] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    description: "",
    tags: [] as string[],
    author: ""
  });
  const [newComment, setNewComment] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  useEffect(() => {
    // Load mock data
    const mockQuestions: Question[] = [
      {
        id: "1",
        title: "How to generate better SQL queries with AI?",
        description: "I'm trying to create complex JOIN queries but the AI sometimes generates suboptimal results. Any tips for better prompts?",
        tags: ["SQL", "AI Tools"],
        author: "DevMaster",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
        comments: [
          {
            id: "c1",
            author: "SQLPro",
            content: "Try being more specific about your table relationships and expected output format.",
            timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000)
          }
        ]
      },
      {
        id: "2",
        title: "Bug in regex generator for email validation",
        description: "The regex generator creates patterns that don't properly validate international domain names. Is this a known issue?",
        tags: ["Regex", "Bug Fixing"],
        author: "EmailValidator",
        timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000),
        comments: []
      }
    ];
    setQuestions(mockQuestions);
  }, []);

  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         question.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || question.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  }).sort((a, b) => {
    if (sortBy === "latest") {
      return b.timestamp.getTime() - a.timestamp.getTime();
    } else {
      return b.comments.length - a.comments.length;
    }
  });

  const handleSubmitQuestion = () => {
    if (!newQuestion.title.trim() || !newQuestion.description.trim()) {
      toast({
        title: "Error",
        description: "Please fill in both title and description",
        variant: "destructive"
      });
      return;
    }

    const question: Question = {
      id: Date.now().toString(),
      title: newQuestion.title,
      description: newQuestion.description,
      tags: newQuestion.tags,
      author: newQuestion.author || "Anonymous",
      timestamp: new Date(),
      comments: []
    };

    setQuestions(prev => [question, ...prev]);
    setNewQuestion({ title: "", description: "", tags: [], author: "" });
    setShowQuestionForm(false);
    
    toast({
      title: "Success",
      description: "Your question has been posted!",
    });
  };

  const handleSubmitComment = () => {
    if (!newComment.trim() || !selectedQuestion) return;

    const comment: Comment = {
      id: Date.now().toString(),
      author: commentAuthor || "Anonymous",
      content: newComment,
      timestamp: new Date(),
      parentId: replyingTo || undefined
    };

    setQuestions(prev => prev.map(q => 
      q.id === selectedQuestion.id 
        ? { ...q, comments: [...q.comments, comment] }
        : q
    ));

    setSelectedQuestion(prev => prev ? { ...prev, comments: [...prev.comments, comment] } : null);
    setNewComment("");
    setCommentAuthor("");
    setReplyingTo(null);

    toast({
      title: "Success",
      description: "Your comment has been added!",
    });
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    return `${diffDays}d ago`;
  };

  if (selectedQuestion) {
    return (
      <div className="min-h-screen bg-black text-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5 text-gray-400" />
                <span className="text-xl font-bold font-mono text-white">CodeBoost Community</span>
              </Link>
            </div>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <Button 
            variant="ghost" 
            onClick={() => setSelectedQuestion(null)}
            className="mb-6 text-white hover:bg-gray-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Questions
          </Button>

          {/* Question Detail */}
          <Card className="bg-gray-800 border-gray-700 mb-8">
            <CardHeader>
              <div className="flex flex-wrap gap-2 mb-2">
                {selectedQuestion.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="bg-blue-600 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              <CardTitle className="text-white text-2xl">{selectedQuestion.title}</CardTitle>
              <div className="flex items-center text-gray-400 text-sm">
                <span>by {selectedQuestion.author}</span>
                <Separator orientation="vertical" className="mx-2 h-4" />
                <Clock className="h-4 w-4 mr-1" />
                <span>{formatTimeAgo(selectedQuestion.timestamp)}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-white leading-relaxed">{selectedQuestion.description}</p>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Comments ({selectedQuestion.comments.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Existing Comments */}
              {selectedQuestion.comments.map(comment => (
                <div key={comment.id} className="border-l-2 border-gray-600 pl-4">
                  <div className="flex items-center text-sm text-gray-400 mb-2">
                    <span className="font-medium text-white">{comment.author}</span>
                    <Separator orientation="vertical" className="mx-2 h-4" />
                    <span>{formatTimeAgo(comment.timestamp)}</span>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="ml-2 text-blue-400 hover:text-blue-300"
                      onClick={() => setReplyingTo(comment.id)}
                    >
                      Reply
                    </Button>
                  </div>
                  <p className="text-white">{comment.content}</p>
                </div>
              ))}

              {/* Add Comment Form */}
              <div className="border-t border-gray-700 pt-6">
                <h4 className="text-white font-medium mb-4">
                  {replyingTo ? "Reply to comment" : "Add a comment"}
                </h4>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="comment-author" className="text-white">Your Name (optional)</Label>
                    <Input
                      id="comment-author"
                      value={commentAuthor}
                      onChange={(e) => setCommentAuthor(e.target.value)}
                      placeholder="Anonymous"
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="comment-content" className="text-white">Comment</Label>
                    <Textarea
                      id="comment-content"
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={handleSubmitComment} className="bg-blue-600 hover:bg-blue-700">
                      Post Comment
                    </Button>
                    {replyingTo && (
                      <Button variant="outline" onClick={() => setReplyingTo(null)}>
                        Cancel Reply
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-400" />
              <span className="text-xl font-bold font-mono text-white">CodeBoost Community</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Community Q&A</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ask questions, share knowledge, and connect with other developers using our AI-powered tools.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-600 text-white"
            />
          </div>
          
          <Select value={selectedTag} onValueChange={setSelectedTag}>
            <SelectTrigger className="w-full sm:w-48 bg-gray-800 border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Tags</SelectItem>
              {predefinedTags.map(tag => (
                <SelectItem key={tag} value={tag}>{tag}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48 bg-gray-800 border-gray-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="comments">Most Commented</SelectItem>
            </SelectContent>
          </Select>

          <Dialog open={showQuestionForm} onOpenChange={setShowQuestionForm}>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Ask Question
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 border-gray-700 text-white">
              <DialogHeader>
                <DialogTitle>Ask a New Question</DialogTitle>
                <DialogDescription className="text-gray-400">
                  Share your question with the community and get help from fellow developers.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">Title *</Label>
                  <Input
                    id="title"
                    value={newQuestion.title}
                    onChange={(e) => setNewQuestion(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="What's your question?"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-white">Description *</Label>
                  <Textarea
                    id="description"
                    value={newQuestion.description}
                    onChange={(e) => setNewQuestion(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Provide more details about your question..."
                    className="bg-gray-700 border-gray-600 text-white min-h-[120px]"
                  />
                </div>
                <div>
                  <Label htmlFor="author" className="text-white">Your Name (optional)</Label>
                  <Input
                    id="author"
                    value={newQuestion.author}
                    onChange={(e) => setNewQuestion(prev => ({ ...prev, author: e.target.value }))}
                    placeholder="Anonymous"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label className="text-white">Tags (select relevant categories)</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {predefinedTags.map(tag => (
                      <Badge
                        key={tag}
                        variant={newQuestion.tags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer ${
                          newQuestion.tags.includes(tag) 
                            ? "bg-blue-600 text-white" 
                            : "border-gray-600 text-gray-300 hover:bg-gray-700"
                        }`}
                        onClick={() => {
                          setNewQuestion(prev => ({
                            ...prev,
                            tags: prev.tags.includes(tag)
                              ? prev.tags.filter(t => t !== tag)
                              : [...prev.tags, tag]
                          }));
                        }}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button onClick={handleSubmitQuestion} className="bg-blue-600 hover:bg-blue-700">
                    Post Question
                  </Button>
                  <Button variant="outline" onClick={() => setShowQuestionForm(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Questions List */}
        <div className="space-y-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map(question => (
              <Card 
                key={question.id} 
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
                onClick={() => setSelectedQuestion(question)}
              >
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {question.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-blue-600 text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-white hover:text-blue-400 transition-colors">
                    {question.title}
                  </CardTitle>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span>by {question.author}</span>
                    <Separator orientation="vertical" className="mx-2 h-4" />
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{formatTimeAgo(question.timestamp)}</span>
                    <Separator orientation="vertical" className="mx-2 h-4" />
                    <MessageSquare className="h-4 w-4 mr-1" />
                    <span>{question.comments.length} comments</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 line-clamp-3">{question.description}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="h-12 w-12 mx-auto mb-4 text-gray-600" />
              <p className="text-gray-400 text-lg">No questions found matching your criteria.</p>
              <p className="text-gray-500 text-sm mt-2">Be the first to ask a question!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;

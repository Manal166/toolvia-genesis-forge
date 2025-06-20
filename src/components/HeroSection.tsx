
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="container mx-auto px-4 py-24 text-center">
      <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
        Boost Your Code with AI
      </h1>
      <p className="text-xl text-white max-w-3xl mx-auto mb-12">
        Supercharge your development workflow with our suite of AI-powered tools. Generate, explain, and debug code faster than ever before.
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/tools">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">
            Explore Tools
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
        <Link to="/about">
          <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-800 hover:border-gray-500">
            Learn More
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

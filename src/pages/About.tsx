
import { Link } from "react-router-dom";
import { Code, Users, Target, Lightbulb, ArrowLeft, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const About = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark bg-gray-900' : 'bg-white'}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold font-mono text-gray-900 dark:text-white">CodeBoost</span>
            </Link>
            
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-blue-600 dark:text-blue-400 font-mono">CodeBoost</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            CodeBoost is a free online tool designed to help developers instantly generate clean and ready-to-use code snippets from simple text descriptions.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* What We Do */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">What We Do</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Whether you're building a login form, a calculator, or a mini app, CodeBoost lets you turn ideas into code in seconds. 
              Simply describe what you want to build in plain English, select your programming language, and watch as our AI generates 
              clean, well-structured code that follows best practices and is ready to use in your projects.
            </p>
          </section>

          {/* Our Mission */}
          <section className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <Lightbulb className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Our mission is to simplify coding for beginners and speed up development for professionals by using AI-assisted suggestions 
              and smart templates. We believe that great ideas shouldn't be held back by the complexity of implementation, and that every 
              developer should have access to tools that amplify their creativity and productivity.
            </p>
          </section>

          {/* Who We're For */}
          <section className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-600 dark:text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Built by Developers, for Developers</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">For Beginners</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learning to code can be overwhelming. CodeBoost helps newcomers see how their ideas translate into actual code, 
                  providing a bridge between concept and implementation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">For Professionals</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Experienced developers can use CodeBoost to quickly prototype ideas, generate boilerplate code, and 
                  focus on the creative aspects of problem-solving rather than repetitive typing.
                </p>
              </div>
            </div>
          </section>

          {/* Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Why Choose CodeBoost?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Multi-Language Support</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Generate code in HTML, CSS, JavaScript, Python, Java, C++, and more.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Best Practices</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  All generated code follows industry best practices and coding standards.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Instant Results</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Get working code in seconds, not hours. Perfect for rapid prototyping.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Boost Your Coding?</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who are already using CodeBoost to turn their ideas into code faster than ever before.
            </p>
            <Link to="/tool">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Try CodeBoost Now
              </Button>
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

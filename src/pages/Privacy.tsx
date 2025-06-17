
import { useState } from "react";
import { Link } from "react-router-dom";
import { Code, Shield, ArrowLeft, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Privacy = () => {
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: June 17, 2024
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none dark:prose-invert">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Privacy Matters</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We value your privacy. CodeBoost does not collect any personal information unless you choose to contact us directly. 
                We do not require account creation, and we do not store the code you generate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We Don't Collect</h2>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Personal information (name, email, phone number) unless voluntarily provided</li>
                <li>Generated code snippets or descriptions</li>
                <li>Account credentials or login information</li>
                <li>Payment information (our service is free)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Information We May Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Analytics Data</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We may use anonymous analytics to understand how our service is used, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 ml-4">
                    <li>Page views and session duration</li>
                    <li>Browser type and operating system</li>
                    <li>General geographic location (country/region)</li>
                    <li>Referral sources</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Information</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    If you contact us through our contact form or email, we collect only the information you provide 
                    to respond to your inquiry.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Third-Party Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Google Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We may use Google Analytics to understand website usage. You can opt out of Google Analytics 
                    by installing the Google Analytics Opt-out Browser Add-on.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Advertising</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Third-party services like Google AdSense may use cookies to serve personalized ads based on your 
                    visit to this and other websites. You can manage your ad preferences through Google settings.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookies</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We use minimal cookies for:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mt-2 space-y-1">
                <li>Remembering your theme preference (light/dark mode)</li>
                <li>Analytics and performance monitoring</li>
                <li>Essential site functionality</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                You can control cookies through your browser settings, though some functionality may be limited if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Data Security</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Since we don't store personal data or generated code, there's minimal risk to your privacy. 
                Our website uses HTTPS encryption to protect data transmission between your browser and our servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Since we don't collect personal data, there's typically nothing to delete or modify. However, if you've 
                contacted us and want your contact information removed, please email us and we'll comply promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                CodeBoost is suitable for users of all ages. We do not knowingly collect personal information from 
                anyone, including children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We may update this privacy policy occasionally. Any changes will be posted on this page with an 
                updated "Last modified" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                If you have any questions about this privacy policy or our practices, please contact us:
              </p>
              <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <p className="text-gray-600 dark:text-gray-300">
                  <strong>Email:</strong> privacy@codeboost.dev<br />
                  <strong>Contact Form:</strong> <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">Contact Us</Link>
                </p>
              </div>
            </section>

            <section className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                By using CodeBoost, you agree to this privacy policy. Thank you for trusting us with your development needs.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

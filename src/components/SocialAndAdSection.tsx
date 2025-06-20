
import EmailCapture from "@/components/EmailCapture";
import SocialShareButtons from "@/components/SocialShareButtons";
import AdZone from "@/components/AdZone";

const SocialAndAdSection = () => {
  return (
    <>
      {/* Email Capture Section */}
      <section className="container mx-auto px-4 py-16">
        <EmailCapture />
      </section>

      {/* Social Sharing and Ad Zone */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Share this page</h3>
            <SocialShareButtons 
              url={window.location.href} 
              title="CodeBoost - AI-Powered Developer Tools"
              description="Boost your coding productivity with our comprehensive suite of AI-powered development tools. Code explanation, generation, debugging, and optimization made simple."
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Advertisements</h3>
            <AdZone id="homepage-ad" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SocialAndAdSection;

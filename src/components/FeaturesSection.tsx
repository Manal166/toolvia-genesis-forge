
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Tools",
    description: "Leverage the power of AI to boost your coding efficiency and accuracy.",
  },
  {
    title: "Comprehensive Solutions",
    description: "From code generation to debugging, find all the tools you need in one place.",
  },
  {
    title: "User-Friendly Interface",
    description: "Enjoy a seamless experience with our intuitive and easy-to-navigate platform.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        Key Features
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-400">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;


import { Helmet } from "react-helmet-async";
import { Key } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const PasswordGeneratorDetails = () => {
  const toolInfo = {
    name: "Password Generator",
    description: "Generate strong, secure, and random passwords for your online accounts",
    category: "Security Tools",
    icon: Key,
    features: [
      "Adjustable password length (6-32 characters)",
      "Include/exclude uppercase letters",
      "Include/exclude numbers",
      "Include/exclude special symbols",
      "One-click copy to clipboard",
      "Instant password generation",
      "No data stored or transmitted",
      "Fully secure and private"
    ],
    useCases: [
      "Creating strong passwords for new accounts",
      "Updating weak existing passwords",
      "Generating unique passwords for each service",
      "Meeting specific password requirements",
      "Enhancing account security"
    ],
    benefits: [
      "Prevents password reuse across accounts",
      "Creates cryptographically strong passwords",
      "Saves time with instant generation",
      "Reduces risk of data breaches",
      "Improves overall digital security"
    ]
  };

  return (
    <>
      <Helmet>
        <title>Free Strong Password Generator – Secure & Fast | CodeBoost</title>
        <meta
          name="description"
          content="Generate strong, secure, and random passwords for your online accounts. Free password generator tool for students, developers & everyone. No registration required."
        />
        <meta name="keywords" content="password generator, strong password, secure password, random password, online security, free tool" />
        <link rel="canonical" href="/tools/password-generator/details" />
      </Helmet>

      <ToolDetailsLayout 
        tool={toolInfo}
        toolPath="/tools/password-generator"
      />
    </>
  );
};

export default PasswordGeneratorDetails;

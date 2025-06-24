
import { Helmet } from "react-helmet-async";
import { Key } from "lucide-react";
import ToolDetailsLayout from "@/components/ToolDetailsLayout";

const PasswordGeneratorDetails = () => {
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
        title="Password Generator"
        description="Generate strong, secure, and random passwords for your online accounts"
        metaDescription="Generate strong, secure, and random passwords for your online accounts. Free password generator tool for students, developers & everyone. No registration required."
        toolId="password-generator"
        icon={<Key className="h-8 w-8 text-blue-600" />}
        useCases={[
          "Creating strong passwords for new accounts",
          "Updating weak existing passwords",
          "Generating unique passwords for each service",
          "Meeting specific password requirements",
          "Enhancing account security"
        ]}
      />
    </>
  );
};

export default PasswordGeneratorDetails;

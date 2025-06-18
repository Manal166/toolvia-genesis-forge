
import { ReactNode } from "react";

interface ToolSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

const ToolSection = ({ title, description, children, className = "" }: ToolSectionProps) => {
  return (
    <section className={`space-y-6 ${className}`}>
      {(title || description) && (
        <div className="text-center">
          {title && (
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h2>
          )}
          {description && (
            <p className="text-gray-600 dark:text-gray-300">
              {description}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default ToolSection;

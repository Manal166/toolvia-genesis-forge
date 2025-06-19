
import { ReactNode } from "react";

interface AdZoneProps {
  id: string;
  className?: string;
  placeholder?: boolean;
  children?: ReactNode;
}

const AdZone = ({ id, className = "", placeholder = false, children }: AdZoneProps) => {
  if (placeholder) {
    return (
      <div 
        id={id}
        className={`ad-zone border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center ${className}`}
        data-ad-zone={id}
      >
        <span className="text-gray-400 dark:text-gray-500 text-sm">Ad Placement Zone</span>
      </div>
    );
  }

  return (
    <div 
      id={id}
      className={`ad-zone ${className}`}
      data-ad-zone={id}
    >
      {children}
    </div>
  );
};

export default AdZone;

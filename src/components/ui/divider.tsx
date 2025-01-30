// src/components/ui/Divider.tsx
import React from "react";

const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <hr className={`border-t border-gray-300 my-4 ${className}`} />
  );
};

export default Divider;
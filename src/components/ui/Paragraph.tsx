import React from "react";

interface ParagraphPropTypes {
  children: React.ReactNode;
  className?: string;
  ["x"]?: unknown;
}

const Paragraph = ({ className, children }: ParagraphPropTypes) => {
  return <div className={`text-lg ${className}`}>{children}</div>;
};

export default Paragraph;

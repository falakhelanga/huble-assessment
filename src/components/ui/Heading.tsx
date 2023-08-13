import React from "react";

interface HeadingPropTypes {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  ["x"]?: unknown;
}

const Heading = ({
  children,
  className,
  size = "lg",
  ...rest
}: HeadingPropTypes) => {
  return (
    <div
      {...rest}
      className={`${size === "sm" && "text-2xl"} ${
        size === "md" && "text-4xl"
      } ${size === "lg" && "text-5xl "} ${className}`}
    >
      {children}
    </div>
  );
};

export default Heading;

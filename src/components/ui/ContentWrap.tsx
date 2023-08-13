import { ReactNode } from "react";

const ContentWrap = ({
  children,
  className = "",
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      {...rest}
      className={`mx-auto w-full max-w-7xl md:px-8 px-14 ${className}`}
    >
      {children}
    </div>
  );
};

export default ContentWrap;

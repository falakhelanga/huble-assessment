import React from "react";

interface ButtonPropType {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant?: "outline" | "pink";
  fullWidth?: boolean;
  [x: string]: any;
}

const Button = ({
  children,
  className,
  type = "button",
  onClick,
  variant = "pink",
  fullWidth = false,
  link,
  ...rest
}: ButtonPropType) => {
  return (
    <>
      {!link && (
        <button
          {...rest}
          onClick={onClick}
          type={type}
          className={` rounded-full transition-all ease-in-out  duration-500 ${
            fullWidth && "w-full"
          } text-pink    px-10 py-4 ${
            variant === "outline" &&
            `bg-transparent  border-peach border-2 text-pink hover:bg-peach hover:text-black hover:border-peach ${className}`
          } 
      ${
        variant === "pink" &&
        `text-white bg-peach hover:opacity-[0.7] ${className}`
      }
     
      font-bold  ${className} md:cursor-pointer cursor-none`}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;

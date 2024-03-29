import React from "react";

interface ButtonProps {
    children: React.ReactNode;
  }

const Button:React.FC<ButtonProps> = ({children}) => {
  return (
    <p className="bg-slate-50 rounded-full p-3 m-1 shadow-md">{children}</p>
  );
};

export default Button;

import React, { FC } from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return <button onClick={props.onClick}>{props.label}</button>;
};

export default Button;

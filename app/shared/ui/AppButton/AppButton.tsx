import { ButtonHTMLAttributes } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const AppButton = ({
  text,
  children,
  type = "button",
  onClick,
  className,
}: AppButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children || text}
    </button>
  );
};

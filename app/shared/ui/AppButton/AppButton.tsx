import { ButtonHTMLAttributes } from "react";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    onClick?: () => void;
    children?: React.ReactNode;
}

export const AppButton = ({
    text,
    children,
    type = "button",
    onClick,
}: AppButtonProps) => {
    return (
        <button type={type} onClick={onClick}>
            {text || children}
        </button>
    );
};

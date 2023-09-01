import { AppButton } from "../AppButton/AppButton";
import "./MenuButton.css";

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export const MenuButton = ({ onClick, isOpen }: MenuButtonProps) => {
  return (
    <div
      className="rounded-full bg-slate-50 bg-opacity-50 h-12 w-12 top-8 right-8 fixed  z-50"
      onClick={onClick}
    >
      <AppButton className={`menu_btn ${isOpen ? "active" : ""}`} text={""}>
        <span></span>
        <span></span>
        <span></span>
      </AppButton>
    </div>
  );
};

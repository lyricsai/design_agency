import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";

interface AppPortalProps {
  children?: ReactNode;
  element?: HTMLElement;
}

export const AppPortal: FC<AppPortalProps> = ({
  element = document.body,
  children,
}: AppPortalProps) => createPortal(children, element);

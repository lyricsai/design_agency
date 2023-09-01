"use client";

import { memo, useCallback, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MenuButton } from "../shared/ui/MenuButton/MenuButton";
import { Menu } from "./Menu/Menu";

export const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const openMenu = useCallback(() => {
    setTimeout(() => {
      setIsOpen(!isOpen);
      document.body.classList.toggle("locked");
    }, 500);
  }, [isOpen]);

  const onMenuClick = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove("locked");
  }, []);

  return (
    <header className="flex justify-between items-center">
      <a href="#" className="header__logo m-8">
        <span>
          D<em>A</em>
        </span>
      </a>
      <Menu isOpen={isOpen} onClick={onMenuClick} />
      <MenuButton onClick={openMenu} isOpen={isOpen} />
    </header>
  );
});

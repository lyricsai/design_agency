"use client";

import { memo } from "react";

import { Navbar } from "../Navbar";
import { Socials } from "../Socials";

interface MenuProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Menu = memo(({ isOpen, onClick }: MenuProps) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={onClick}
          className={
            "menu bg-cyan-500 z-10 transition-all fixed top-0 bottom-0 left-0 right-0 flex flex-col justify-around h-full text-white p-4"
          }
        >
          <Navbar isOpen={isOpen} />
          <Socials />
        </div>
      )}
    </>
  );
});

"use client";

import { useState } from "react";
import { Navbar } from "./Navbar";
import { AppButton } from "../shared/ui/AppButton/AppButton";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="flex justify-between items-center">
            <a href="#" className="header__logo">
                <img src="img/logo.png" alt="logo" />
            </a>
            <Navbar isOpen={isOpen} bgColor="bg-cyan-500" />
            <AppButton
                className="menu_btn"
                text={"Menu"}
                onClick={() => setIsOpen(!isOpen)}
            ></AppButton>
        </header>
    );
};

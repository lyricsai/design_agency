"use client";
import Link from "@/node_modules/next/link";
import { useState } from "react";

export const SkipLink = () => {
  const [tabPressed, setTabPressed] = useState(false);

  const onTabPress = (e) => {
    if (e.key === "Tab") {
      setTabPressed(true);
    }
  };

  document.addEventListener("keydown", onTabPress);

  return (
    <Link className={`${tabPressed ? "visible" : "hidden"}`} href="#main">
      Skip to main content
    </Link>
  );
};

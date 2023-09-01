"use client";
import { useEffect, useState } from "react";
import './Intro.css'

export const Intro = () => {
  const [classes, setClasses] = useState("");
  const [circleClasses, setCircleClasses] = useState("");
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
      setClasses(`intro__stage_${index}`);
    }, 1000);
    if (index === 2) setCircleClasses("intro__central_circle_animation");
    if (index > 6) {
      clearInterval(interval);
      setCircleClasses("");
      setClasses("none");
    }
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className={`intro__container ${classes} z-20`}>
      <div className="intro__top">
        <a href="#" className="header__logo">
          <img src="img/logo.png" alt="" />
        </a>
      </div>

      <div className="intro">
        <div className="intro__background">
          <div className="intro__background_blue"></div>
          <div className="intro__background_red"></div>
          <div className="intro__background_yellow"></div>
        </div>
        <div className="intro__circle">
          <div className="intro__circle_blue"></div>
          <div className="intro__circle_red"></div>
          <div className="intro__circle_yellow"></div>
          <div className="intro__circle_inner"></div>
        </div>
      </div>
      {/* <div className={`intro__central_circle ${circleClasses}`}></div> */}
    </div>
  );
};

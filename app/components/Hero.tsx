"use client";

import { Montserrat } from "next/font/google";
import { memo, useEffect, useState } from "react";
import { AppButton } from "../shared/ui/AppButton/AppButton";

const optionsToCreate = ["Design", "Development", "Branding"];

const font = Montserrat({ subsets: ["latin"] });
const reviewsNumber = 35;

export const Hero = memo(() => {
  const [whatToCreate, setWhatToCreate] = useState(optionsToCreate[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      whatToCreate === optionsToCreate[0]
        ? setWhatToCreate(optionsToCreate[1])
        : setWhatToCreate(optionsToCreate[0]);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <section id="home" className="text-white uppercase relative">
      <h1 className="text-[32px] xl:text-[120px]">
        We create
        <strong className={`block ${font.className}`}>{whatToCreate}</strong>
        that
        <strong> you </strong> want
      </h1>
      <div className="">
        <AppButton text={""}>
          <svg
            className="scroll"
            viewBox="0 0 16 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.78261 0V26M7.78261 26L1 19.2174M7.78261 26L14.5652 19.2174"
              data-stroke="true"
              strokeWidth="1.5"
            ></path>
          </svg>
        </AppButton>
        <div className="hero__scroll_mobile"></div>
      </div>
      <div className="hero__raiting flex ">
        <div className="hero_stars">
          <svg className="hero_star">
            <use href="/img/sprite.svg#star"></use>
          </svg>
          <svg className="hero_star">
            <use href="/img/sprite.svg#star"></use>
          </svg>
          <svg className="hero_star">
            <use href="/img/sprite.svg#star"></use>
          </svg>
          <svg className="hero_star">
            <use href="/img/sprite.svg#star"></use>
          </svg>
          <svg className="hero_star">
            <use href="/img/sprite.svg#star"></use>
          </svg>
          <p className="hero-clutch_box_rating__1_liu">4.8</p>
        </div>
        <span>
          <em>by {reviewsNumber} Reviews</em>
        </span>
      </div>
      <video src="" className="absolute w-1/4 h-20 border-sky-800"></video>
    </section>
  );
});

"use client";

import { memo, useEffect, useState } from "react";
import { AppButton } from "../shared/ui/AppButton/AppButton";

const optionsToCreate = ["Design", "Development", "Branding"];

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
        <section id="home">
            <h1>
                We create <span className="block">{whatToCreate}</span> that you
                want
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
                            stroke-width="1.5"
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
                <span>Verified</span>
                <span>
                    <em> 35 Reviews</em>
                </span>
            </div>
            <video src=""></video>
        </section>
    );
});

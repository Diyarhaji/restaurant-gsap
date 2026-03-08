"use client";

import React, { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
// If you are not using SplitText yet, you can remove it to keep the bundle clean
import { SplitText } from "gsap/all";

// Import your images at the top
import Leaft from "/images/slider-left-leaf.png";
import RightLeaf from "/images/slider-right-leaf.png";
import RightArrow from "/images/right-arrow.png";
import LeftArrow from "/images/left-arrow.png";

import { allCocktails } from "../constants/index.js";
import { useMediaQuery } from "react-responsive";

const Menu = () => {
    const contentRef = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
        gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, { opacity: 1, xPercent: 0, duration: 1, ease: 'power1.inOut' });
        gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 100, ease: 'power1.inOut' });
        gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 100, duration: 0.6, ease: 'power1.inOut' });
    }, [currentIndex]);

    const totalCocktails = allCocktails.length;
    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    };

    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    };

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    return (
        <section id="menu" aria-labelledby="menu-heading">
            {/* Using imported variables */}
            <img src={Leaft} alt="left-leaf" id="m-left-leaf" />
            <img src={RightLeaf} alt="right-leaf" id="m-right-leaf" />

            <h2 id="menu-heading" className="sr-only">Cocktails Menu</h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {allCocktails.map((cocktail, index) => {
                    const isActive = index === currentIndex;
                    return (
                        <button key={cocktail.id} className={`${isActive ? 'text-white border-white' : 'text-white/50 border-white/50'}`} onClick={() => goToSlide(index)}>
                            {cocktail.name}
                        </button>
                    )
                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex - 1)}>
                        <span>{prevCocktail.name}</span>
                        <img src={RightArrow} alt="right-arrow" aria-haspopup="true" />
                    </button>
                    <button className="text-left" onClick={() => goToSlide(currentIndex + 1)}>
                        <span>{nextCocktail.name}</span>
                        <img src={LeftArrow} alt="left-arrow" aria-haspopup="true" />
                    </button>
                </div>

                <div className="cocktail">
                    {/* Note: If currentCocktail.image is a path string from your constants file, keep it as is */}
                    <img src={currentCocktail.image} className="object-contain" />
                </div>
                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for:</p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;
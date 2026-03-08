"use client";

import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { cocktailLists, mockTailLists } from "../constants/index.js";

// Import decorative assets
import LeftLeaf from "/images/cocktail-left-leaf.png";
import RightLeaf from "/images/cocktail-right-leaf.png";
import Contact from "./Contact.jsx";

gsap.registerPlugin(ScrollTrigger);

export const Cocktails = () => {

    useGSAP(() => {
        const parallexTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            }
        });

        parallexTimeLine
            .from("#c-left-leaf", { x: -100, y: 100 })
            .from("#c-right-leaf", { x: -100, y: 100 }, "<"); // "<" syncs this with the previous start
    }, []);

    return (
        <section className="noisy" id="cocktails">
            {/* Using imported image variables */}
            <img src={LeftLeaf} alt="left leaf" id="c-left-leaf" />
            <img src={RightLeaf} alt="right leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2 className="">Most Popular Cocktails:</h2>
                    <ul className="">
                        {cocktailLists.map((item) => (
                            <li key={item.name}>
                                <div className="md:me-28">
                                    <h3>{item.name}</h3>
                                    <p>{item.country} | {item.detail}</p>
                                </div>
                                <span>- {item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="loved">
                    <h2 className="">Most Loved Mocktails:</h2>
                    <ul className="">
                        {mockTailLists.map((item) => (
                            <li key={item.name}>
                                <div className="me-28">
                                    <h3>{item.name}</h3>
                                    <p>{item.country} | {item.detail}</p>
                                </div>
                                <span>- {item.price}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};


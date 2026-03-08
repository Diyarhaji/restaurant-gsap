"use client";

import React from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";

// Import your grid images
import Abt1 from "/images/abt1.png";
import Abt2 from "/images/abt2.png";
import Abt3 from "/images/abt3.png";
import Abt4 from "/images/abt4.png";
import Abt5 from "/images/abt5.png";

gsap.registerPlugin(ScrollTrigger, SplitText);

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create("#about h2", { type: "words" });
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                start: "top center",
            }
        });

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.03
            })
            .from(".top-grid div, .bottom-grid div", {
                opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04
            }, "-=0.5");

        return () => titleSplit.revert();
    }, []);

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>Where every detail matters <span className="text-white">-</span> from muddle to garnish</h2>
                    </div>
                    <div className="sub-content">
                        <p>Every cocktail we serve is a reflection of our obsession with detail from their first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</p>
                        <div className="md:text-3xl text-xl font-bold">
                            <span>4.5</span>/5
                        </div>
                        <p className="text-sm text-white-100">More than +12000 customers</p>
                    </div>
                </div>

                {/* Using imported image variables */}
                <div className="top-grid">
                    <div className="md:col-span-3">
                        <div className="noisy" />
                        <img className="" src={Abt1} alt="grid-img-1" />
                    </div>
                    <div className="md:col-span-6">
                        <div className="noisy" />
                        <img className="" src={Abt2} alt="grid-img-2" />
                    </div>
                    <div className="md:col-span-3">
                        <div className="noisy" />
                        <img className="" src={Abt5} alt="grid-img-3" />
                    </div>
                </div>

                <div className="bottom-grid">
                    <div className="md:col-span-8">
                        <div className="noisy" />
                        <img className="" src={Abt3} alt="grid-img-4" />
                    </div>
                    <div className="md:col-span-4">
                        <div className="noisy" />
                        <img className="" src={Abt4} alt="grid-img-5" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
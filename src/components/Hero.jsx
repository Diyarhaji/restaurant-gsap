"use client";

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";

// Import decorative assets
import LeftLeaf from "/images/hero-left-leaf.png";
import RightLeaf from "/images/hero-right-leaf.png";
// Import video asset
import HeroVideo from "/videos/output.mp4";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Hero = () => {
    const videoRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        // ... (your existing animation logic remains the same)

        // Ensure you use the imported HeroVideo in the logic if needed
        // but the video tag will use it directly via the 'src' prop

    }, [isMobile]);

    return (
        <>
            <section id="hero" className="noisy">
                {/* ... (your existing section content) */}
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src={HeroVideo} // Using the imported variable here
                />
            </div>
        </>
    );
};
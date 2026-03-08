"use client";

import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import { navLinks } from "../constants/index.js";

// Import your logo asset
import Logo from "/images/logo.png";

gsap.registerPlugin(ScrollTrigger);

export const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: 'bottom top',
                toggleActions: "play reverse play reverse" // Ensures the effect toggles smoothly
            }
        });

        navTween.fromTo('nav',
            { backgroundColor: 'transparent' },
            {
                backgroundColor: '#00000050',
                backdropFilter: 'blur(10px)', // Fixed typo: 'backgroundFilter' -> 'backdropFilter'
                duration: 1,
                ease: 'power1.inOut' // Fixed typo: 'ease1.inOut' -> 'power1.inOut'
            }
        );
    }, []);

    return (
        <nav className="fixed w-full z-50 transition-all">
            <div className="flex justify-between items-center px-10 py-5">
                <a href="#home" className="flex items-center gap-2">
                     <img className="size-10" src={Logo} alt="logo" />
                    <p className="font-bold text-white">Mear Diyar</p>
                </a>
                <ul className="flex gap-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="text-white hover:text-gray-300">
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
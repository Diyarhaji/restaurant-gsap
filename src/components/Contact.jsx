"use client";

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

import { openingHours, socials } from '../constants/index.js';

// Import decorative assets
import RightLeaf from '/images/footer-right-leaf.png';
import LeftLeaf from '/images/footer-left-leaf.png';

gsap.registerPlugin(ScrollTrigger, SplitText);

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'words' });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        });

        timeline
            .from(titleSplit.words, {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .from('#contact h3, #contact p', {
                opacity: 0, yPercent: 100, stagger: 0.02
            })
            .to('#f-right-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            })
            .to('#f-left-leaf', {
                y: '-50', duration: 1, ease: 'power1.inOut'
            }, '<'); // '<' syncs these movements

        return () => titleSplit.revert();
    }, []);

    return (
        <footer id="contact">
            {/* Using imported image variables */}
            <img src={RightLeaf} alt="leaf-right" id="f-right-leaf" />
            <img src={LeftLeaf} alt="leaf-left" id="f-left-leaf" />

            <div className="content">
                <h2>Where to Find Us</h2>

                <div>
                    <h3>Visit Our Place</h3>
                    <p>Duhok, Kurdistan, Iraq</p>
                </div>

                <div>
                    <h3>Contact Us</h3>
                    <p>+9647511978863</p>
                    <p>diyargohdarhaji@gmail.com</p>
                </div>

                <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time) => (
                        <p key={time.day}>
                            {time.day} : {time.time}
                        </p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className="flex-center gap-5">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
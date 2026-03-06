import React from 'react'
import gsap from 'gsap'
import {navLinks} from "../constants/index.js";
import {useGSAP} from "@gsap/react";

export const Navbar = () => {
    useGSAP(()=>{
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: 'bottom top'
            }
        });
        navTween.fromTo('nav', {backgroundColor: 'transparent'},{ backgroundColor: '#00000050',
                        backgroundFilter: 'blur(10px)',
                        duration:1,
                        ease: 'ease1.inOut'


        });
    })
    return (
        <nav className="">
            <div className="">
                <a href="#home" className="flex items-center gap-2">
                     <img className="" src="/images/logo.png" alt="logo" />
                    <p> Mear Diyar</p>
                </a>
                <ul className=" ">
                    {navLinks.map((link)=>(
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="">{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}


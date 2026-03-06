import React from 'react'
import {cocktailLists, mockTailLists} from "../constants/index.js";
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { SplitText } from "gsap/all"
import { useMediaQuery } from "react-responsive"
export const Cocktails = () => {


    useGSAP(()=>{
            const parallexTimeLine = gsap.timeline({
                scrollTrigger:"#cocktails",
                start: "top 30%",
                end: "bottom 80%",
                scrub: true,
            })
        parallexTimeLine
            .from("#c-left-leaf",{x:-100, y:100})
            .from("#c-right-leaf",{x:-100, y:100})


        })




    return (
        <section className="noisy" id="cocktails" >
            <img src="/images/cocktail-left-leaf.png" alt="left leaf" id="c-left-leaf"/>
            <img src="/images/cocktail-right-leaf.png" alt="right leaf" id="c-right-leaf"/>
            <div className="list">
                <div className="popular">
                    <h2 className="">Most Popular Cocktails:</h2>

                    <ul className="">
                        {cocktailLists.map((item)=>(
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
                        {mockTailLists.map((item)=>(
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
        </section  >
    )
}

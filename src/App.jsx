import React, { useLayoutEffect, useRef } from 'react'; // <--- ADD THIS LINE
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import {Navbar} from "./components/Navbar.jsx";
import {Hero } from "./components/Hero.jsx";
import "./index.css"
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {


  return (
      <main className="">
            <Navbar />
            <Hero />
          <div className="h-dvh bg-black"></div>
      </main>
  );
}

export default App;
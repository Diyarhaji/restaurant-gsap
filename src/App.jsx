import React, { useLayoutEffect, useRef } from 'react'; // <--- ADD THIS LINE
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import "./index.css"
import {Cocktails} from "./components/Cocktails.jsx";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {


  return (
      <main className="">
            <Navbar />
            <Hero />
            <Cocktails />

      </main>
  );
}

export default App;
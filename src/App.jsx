import React, { useLayoutEffect, useRef } from 'react'; // <--- ADD THIS LINE
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {


  return (
      <div className="text-2xl text-red-500 flex-center h-[100vh]">
        app
      </div>
  );
}

export default App;
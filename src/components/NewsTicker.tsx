import { RefObject, useEffect, useRef, useState } from "react";

import { programmingJokes } from "../data/jokes";

export const NewsTicker = () => {
  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);
  const [position, setPosition] = useState(window.innerWidth);
  const tickerRef: RefObject<HTMLDivElement> = useRef(null);

  const currentJoke = programmingJokes[currentJokeIndex];

  useEffect(() => {
    const tickerWidth = tickerRef.current ? tickerRef.current.offsetWidth : 0;
    let animationId: number;

    const animate = () => {
      setPosition((prevPosition) => {
        // When text has completely moved off screen to the left
        if (prevPosition < -tickerWidth) {
          // Reset position and change to next joke
          setCurrentJokeIndex((prev) => (prev + 1) % programmingJokes.length);
          return window.innerWidth;
        }
        return prevPosition - 2; // Speed of movement
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [currentJokeIndex]);

  return (
    <div className="fixed top-0 left-0 w-full bg-black h-8 flex items-center overflow-hidden z-50">
      <div
        ref={tickerRef}
        className="text-white font-mono text-sm whitespace-nowrap absolute"
        style={{ left: `${position}px` }}
      >
        {currentJoke}
      </div>
    </div>
  );
};

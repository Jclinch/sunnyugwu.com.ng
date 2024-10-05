// path: components/PreloaderWrapper.tsx
"use client";
import { useEffect, useState } from "react";
import "./styles/PreloaderWrapper.scss";

export default function PreloaderWrapper() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Function to hide preloader
    const hidePreloader = () => {
      console.log("Page has finished loading");
      setIsLoaded(true);
    };

    // Event listener for the window 'load' event
    window.addEventListener("load", hidePreloader);

    // Fallback: in case 'load' event is not detected, hide the preloader after 5 seconds
    const timer = setTimeout(() => {
      console.log("Fallback: Hiding preloader after timeout");
      hidePreloader();
    }, 500); // 0.5 seconds fallback

    // Cleanup the event listener and the timer
    return () => {
      window.removeEventListener("load", hidePreloader);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="preloader" className={isLoaded ? "hidden" : ""}>
      <div className="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export function useScreenHeight() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    handleResize(); // Set initial height

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenHeight;
}

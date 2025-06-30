import React, { useEffect, Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import router from "./router/index";
import Loading from "./components/Loading";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Suspense fallback={<> </>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;

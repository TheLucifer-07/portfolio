import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -10% 0px" }
    );

    const revealed = document.querySelectorAll("[data-reveal]");
    revealed.forEach((element) => observer.observe(element));

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  return (
    <div className="bg-background min-h-screen text-primary">
      <div
        className="pointer-events-none fixed left-0 top-0 z-[80] h-[2px] w-full origin-left bg-gradient-to-r from-accent via-accentLight to-accent shadow-[0_0_24px_rgba(139,94,60,0.35)]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <CustomCursor />

      <Navbar />

      <main>
        <Home />
      </main>

      <Footer />
    </div>
  );
}

export default App;

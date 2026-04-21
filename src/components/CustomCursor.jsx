import { useEffect, useRef, useState } from "react";

const DESKTOP_POINTER_QUERY = "(hover: hover) and (pointer: fine)";
const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  '[role="button"]',
  '[role="link"]',
  '[tabindex]:not([tabindex="-1"])',
  "[data-cursor-interactive]",
].join(",");

const lerp = (start, end, amount) => start + (end - start) * amount;

function CustomCursor() {
  const cursorRef = useRef(null);
  const frameRef = useRef(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef({ current: 1, target: 1 });
  const hasPointerRef = useRef(false);
  const [isDesktopPointer, setIsDesktopPointer] = useState(() =>
    window.matchMedia(DESKTOP_POINTER_QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(DESKTOP_POINTER_QUERY);
    const updatePointerMode = () => setIsDesktopPointer(mediaQuery.matches);

    updatePointerMode();
    mediaQuery.addEventListener("change", updatePointerMode);

    return () => {
      mediaQuery.removeEventListener("change", updatePointerMode);
    };
  }, []);

  useEffect(() => {
    if (!isDesktopPointer) {
      return undefined;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return undefined;
    }

    const setPosition = (x, y) => {
      cursor.style.setProperty("--cursor-x", `${x}px`);
      cursor.style.setProperty("--cursor-y", `${y}px`);
    };

    const animate = () => {
      const current = currentRef.current;
      const target = targetRef.current;

      current.x = lerp(current.x, target.x, 0.16);
      current.y = lerp(current.y, target.y, 0.16);
      scaleRef.current.current = lerp(
        scaleRef.current.current,
        scaleRef.current.target,
        0.12
      );

      setPosition(current.x, current.y);
      cursor.style.setProperty("--cursor-scale", scaleRef.current.current.toFixed(3));
      frameRef.current = window.requestAnimationFrame(animate);
    };

    const handlePointerMove = (event) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;

      if (!hasPointerRef.current) {
        hasPointerRef.current = true;
        currentRef.current.x = event.clientX;
        currentRef.current.y = event.clientY;
        setPosition(event.clientX, event.clientY);
      }

      cursor.classList.add("is-visible");

      const interactiveTarget = event.target.closest?.(INTERACTIVE_SELECTOR);
      const isHoveringInteractive = Boolean(interactiveTarget);
      scaleRef.current.target = isHoveringInteractive ? 1.55 : 1;
      cursor.classList.toggle("is-hovering", isHoveringInteractive);
    };

    const handlePointerLeave = () => {
      cursor.classList.remove("is-visible", "is-hovering");
      scaleRef.current.target = 1;
    };

    const handlePointerEnter = () => {
      if (hasPointerRef.current) {
        cursor.classList.add("is-visible");
      }
    };

    frameRef.current = window.requestAnimationFrame(animate);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handlePointerLeave);
    document.documentElement.addEventListener("pointerenter", handlePointerEnter);

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener("pointerleave", handlePointerLeave);
      document.documentElement.removeEventListener("pointerenter", handlePointerEnter);
      hasPointerRef.current = false;
    };
  }, [isDesktopPointer]);

  if (!isDesktopPointer) {
    return null;
  }

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}

export default CustomCursor;

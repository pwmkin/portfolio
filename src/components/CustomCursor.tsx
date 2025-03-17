import { useEffect, useRef } from "react";

export const CustomCursor = () => {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorOutlineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;

      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.transform = `translate(${x}px, ${y}px)`;
        cursorOutlineRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    document.addEventListener("mousemove", updatePosition);
    return () => document.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="custom-cursor fixed z-50 pointer-events-none"
        style={{
          width: "8px",
          height: "8px",
          backgroundColor: "white",
          borderRadius: "50%",
          position: "fixed",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        ref={cursorOutlineRef}
        className="custom-cursor-outline fixed z-50 pointer-events-none"
        style={{
          width: "30px",
          height: "30px",
          border: "2px solid white",
          borderRadius: "50%",
          position: "fixed",
          transform: "translate(-50%, -50%)",
          transition: "transform 0.15s ease-out",
        }}
      />
    </>
  );
};

import React, { useRef, useState } from "react";

interface SwipeToDeleteProps {
  children: React.ReactNode;
  onDelete: () => void;
}

// Simple fade-in animation and swipe-to-delete for mobile
export const SwipeToDelete: React.FC<SwipeToDeleteProps> = ({ children, onDelete }) => {
  const [translateX, setTranslateX] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const startX = useRef<number | null>(null);
  const threshold = 80; // px to trigger delete

  const handleTouchStart = (e: React.TouchEvent) => {
    if (deleting) return;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (deleting || startX.current === null) return;
    const deltaX = e.touches[0].clientX - startX.current;
    if (deltaX < 0) setTranslateX(Math.max(deltaX, -120)); // Only allow left swipe
  };

  const handleTouchEnd = () => {
    if (deleting) return;
    if (translateX < -threshold) {
      setTranslateX(-120);
      setDeleting(true);
      setTimeout(() => {
        onDelete();
        setDeleting(false);
        setTranslateX(0);
      }, 300);
    } else {
      setTranslateX(0);
    }
    startX.current = null;
  };

  return (
    <div className="relative w-full">
      {/* Delete background */}
      <div
        className="absolute inset-0 flex items-center justify-end pr-6 bg-red-100 rounded-xl transition-opacity duration-300"
        style={{ opacity: translateX < -10 ? 1 : 0, pointerEvents: "none" }}
        aria-hidden="true"
      >
        <span className="bg-red-500 text-white px-4 py-2 rounded font-semibold shadow">Delete</span>
      </div>
      {/* Swipeable foreground */}
      <div
        className={`transition-transform duration-300 will-change-transform ${deleting ? "opacity-0" : "opacity-100"} animate-fade-in`}
        style={{ transform: `translateX(${translateX}px)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
    </div>
  );
};

export default SwipeToDelete; 
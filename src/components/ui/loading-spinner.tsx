"use client";

import { useEffect, useState } from "react";

interface LoadingSpinnerProps {
  fullScreen?: boolean;
}

export function LoadingSpinner({ fullScreen = false }: LoadingSpinnerProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);
    return () => clearInterval(interval);
  }, []);

  const content = (
    <div className="flex flex-col items-center space-y-4">
      {/* Animated Logo */}
      <div className="relative">
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center animate-pulse">
          <svg viewBox="0 0 100 100" className="w-10 h-10" fill="none">
            <circle cx="50" cy="6" r="4" fill="white" />
            <line x1="50" y1="10" x2="50" y2="18" stroke="white" strokeWidth="3" strokeLinecap="round" />
            <ellipse cx="50" cy="48" rx="25" ry="10" stroke="white" strokeWidth="3" fill="none" />
            <circle cx="38" cy="48" r="3" fill="white" />
            <circle cx="50" cy="48" r="3" fill="white" />
            <circle cx="62" cy="48" r="3" fill="white" />
            <path d="M40 68 Q50 76, 60 68" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        {/* Rotating ring */}
        <div className="absolute inset-0 rounded-xl border-2 border-blue-500/30 animate-spin" style={{ animationDuration: "3s" }} />
      </div>

      {/* Loading text */}
      <div className="flex items-center space-x-1">
        <span className="text-sm text-zinc-400">加载中</span>
        <span className="text-sm text-zinc-400 w-6">{dots}</span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 bg-zinc-950 flex items-center justify-center">
        {content}
      </div>
    );
  }

  return content;
}

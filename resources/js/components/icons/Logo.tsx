import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 35 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="11.5" cy="12" rx="11.5" ry="12" fill="#94A3B8" />
      <ellipse cx="23.5" cy="12" rx="11.5" ry="12" fill="#334155" />
    </svg>
  );
}

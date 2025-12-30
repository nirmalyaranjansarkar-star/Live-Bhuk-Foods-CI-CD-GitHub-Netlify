import React from 'react';

interface BhukLogoProps {
  className?: string;
}

const BhukLogo: React.FC<BhukLogoProps> = ({ className }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`${className || 'w-10 h-10'}`}
    aria-label="Bhuk Foods Logo"
    role="img"
  >
    {/* Spoon Head */}
    <ellipse cx="25" cy="15" rx="10" ry="12" fill="#D32F2F" transform="rotate(-30 25 15)" />
    
    {/* The 'B' Body and Spoon Handle */}
    <path 
      d="M32 25 
         C 32 25, 30 35, 35 35
         H 55 
         C 75 35, 75 55, 60 60
         C 75 60, 80 80, 55 90
         H 30 
         L 20 85
         L 35 25 
         Z" 
      fill="#D32F2F" 
    />

    {/* The Bowl (White Negative Space inside B) */}
    <path 
      d="M35 65 
         H 65 
         C 65 80, 55 85, 50 85 
         C 45 85, 35 80, 35 65 
         Z" 
      fill="white" 
    />
    
    {/* Steam Lines */}
    <path 
      d="M42 50 Q 45 45, 42 40" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
    <path 
      d="M50 55 Q 53 45, 50 40" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
    <path 
      d="M58 50 Q 61 45, 58 40" 
      stroke="white" 
      strokeWidth="3" 
      strokeLinecap="round" 
    />
    
    {/* Top Loop Hole (White Negative Space) */}
    <path
      d="M42 40 H 50 C 55 40, 55 50, 50 50 H 42 Z"
      fill="white"
    />
  </svg>
);

export default BhukLogo;
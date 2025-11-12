import React from 'react';

const Logo: React.FC<{ className?: string; color?: string }> = ({ className, color }) => {
  const primaryColor = color || '#C88A6B';
  const scriptColor = color || '#EAE2D6';
  
  return (
    <svg 
        className={className} 
        viewBox="0 0 280 80" 
        xmlns="http://www.w3.org/2000/svg" 
        preserveAspectRatio="xMidYMid meet"
        aria-labelledby="logo-title"
    >
        <title id="logo-title">Fernanda Oliveira Psicoterapia</title>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lato:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
            .font-great-vibes-logo { font-family: 'Great Vibes', cursive; }
            .font-playfair-logo { font-family: 'Playfair Display', serif; }
            .font-lato-logo { font-family: 'Lato', sans-serif; }
          `}
        </style>
        <text 
            x="50%" 
            y="42" 
            className="font-playfair-logo"
            fontSize="32" 
            fontWeight="600"
            fill={primaryColor}
            textAnchor="middle"
        >
            OLIVEIRA
        </text>
        <text 
            x="50%" 
            y="40" 
            className="font-great-vibes-logo"
            fontSize="40"
            fill={scriptColor}
            textAnchor="middle"
            stroke={color ? 'none' : '#C88A6B'}
            strokeWidth="0.3"
        >
            Fernanda
        </text>
        <text 
            x="50%" 
            y="60" 
            className="font-lato-logo"
            fontSize="9" 
            fontWeight="300"
            letterSpacing="3"
            fill={primaryColor}
            textAnchor="middle"
        >
            PSICOTERAPIA
        </text>
    </svg>
  );
};

export default Logo;

import React from 'react';

interface AgenciaLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export function AgenciaLogo({ className = '', variant = 'compact', size = 'md' }: AgenciaLogoProps) {
  // Geodesic sphere nodes and lines
  const sphereNodes = [
    { x: 50, y: 15, r: 2.2, o: 0.9 },
    { x: 30, y: 22, r: 2.0, o: 0.8 },
    { x: 70, y: 22, r: 2.0, o: 0.8 },
    { x: 18, y: 38, r: 2.2, o: 0.85 },
    { x: 42, y: 35, r: 2.5, o: 1.0 },
    { x: 58, y: 35, r: 2.5, o: 1.0 },
    { x: 82, y: 38, r: 2.2, o: 0.85 },
    { x: 12, y: 56, r: 2.3, o: 0.9 },
    { x: 32, y: 52, r: 2.4, o: 0.95 },
    { x: 50, y: 50, r: 2.8, o: 1.0 },
    { x: 68, y: 52, r: 2.4, o: 0.95 },
    { x: 88, y: 56, r: 2.3, o: 0.9 },
    { x: 20, y: 72, r: 2.2, o: 0.85 },
    { x: 40, y: 68, r: 2.5, o: 0.95 },
    { x: 60, y: 68, r: 2.5, o: 0.95 },
    { x: 80, y: 72, r: 2.2, o: 0.85 },
    { x: 32, y: 84, r: 2.0, o: 0.8 },
    { x: 50, y: 88, r: 2.2, o: 0.9 },
    { x: 68, y: 84, r: 2.0, o: 0.8 },
  ];

  const sphereLinks = [
    [0, 1], [0, 2], [1, 3], [1, 4], [2, 5], [2, 6],
    [3, 7], [3, 4], [4, 5], [5, 6], [6, 11],
    [7, 8], [7, 12], [8, 9], [8, 4], [9, 4], [9, 5], [9, 10],
    [10, 5], [10, 6], [10, 11], [11, 15],
    [12, 13], [12, 16], [13, 9], [13, 14], [14, 9], [14, 15], [15, 18],
    [16, 17], [16, 13], [17, 13], [17, 14], [17, 18], [18, 14]
  ];

  const heightClasses = {
    sm: 'h-8',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16'
  };

  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center justify-center ${heightClasses[size]} aspect-square ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
          <g stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.65">
            {sphereLinks.map(([i, j], idx) => (
              <line 
                key={idx} 
                x1={sphereNodes[i].x} 
                y1={sphereNodes[i].y} 
                x2={sphereNodes[j].x} 
                y2={sphereNodes[j].y} 
              />
            ))}
          </g>
          <g fill="#FFFFFF">
            {sphereNodes.map((n, idx) => (
              <circle key={idx} cx={n.x} cy={n.y} r={n.r} opacity={n.o} />
            ))}
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
        <div className="w-20 h-20 relative">
          <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
            <g stroke="#FFFFFF" strokeWidth="0.8" strokeLinecap="round" opacity="0.7">
              {sphereLinks.map(([i, j], idx) => (
                <line 
                  key={idx} 
                  x1={sphereNodes[i].x} 
                  y1={sphereNodes[i].y} 
                  x2={sphereNodes[j].x} 
                  y2={sphereNodes[j].y} 
                />
              ))}
            </g>
            <g fill="#FFFFFF">
              {sphereNodes.map((n, idx) => (
                <circle key={idx} cx={n.x} cy={n.y} r={n.r} opacity={n.o} />
              ))}
            </g>
          </svg>
        </div>
        <div className="text-center">
          <div className="font-black text-white text-base tracking-[0.25em] uppercase leading-tight font-sans">
            AGÊNC.IA
          </div>
          <div className="font-black text-white text-xs tracking-[0.18em] uppercase leading-tight font-sans mt-0.5">
            VIRTUAL PLACE
          </div>
        </div>
      </div>
    );
  }

  // compact (for navbar and headers)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Geodesic network sphere */}
      <div className={`relative ${heightClasses[size]} aspect-square flex items-center justify-center shrink-0`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.35)]">
          <g stroke="#FFFFFF" strokeWidth="0.85" strokeLinecap="round" opacity="0.75">
            {sphereLinks.map(([i, j], idx) => (
              <line 
                key={idx} 
                x1={sphereNodes[i].x} 
                y1={sphereNodes[i].y} 
                x2={sphereNodes[j].x} 
                y2={sphereNodes[j].y} 
              />
            ))}
          </g>
          <g fill="#FFFFFF">
            {sphereNodes.map((n, idx) => (
              <circle key={idx} cx={n.x} cy={n.y} r={n.r} opacity={n.o} />
            ))}
          </g>
        </svg>
      </div>

      {/* Typography from logo: AGÊNC.IA / VIRTUAL PLACE */}
      <div className="flex flex-col text-left justify-center select-none">
        <div className="flex items-center gap-1">
          <span className="font-black text-white text-xs sm:text-sm tracking-[0.22em] uppercase leading-none font-sans">
            AGÊNC.IA
          </span>
          <span className="text-[9px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-1 py-0.5 rounded border border-cyan-500/20">
            4K
          </span>
        </div>
        <span className="font-black text-neutral-200 text-[11px] sm:text-[13px] tracking-[0.14em] uppercase leading-tight font-sans mt-1">
          VIRTUAL PLACE
        </span>
      </div>
    </div>
  );
}

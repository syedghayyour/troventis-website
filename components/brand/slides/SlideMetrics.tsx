/** Brand artwork: quality metrics trending up, verified. */
export function SlideMetrics() {
  return (
    <svg viewBox="0 0 640 480" className="h-full w-full" aria-hidden="true">
      <rect width="640" height="480" fill="#12263F" />
      <g stroke="#E6EBF2" strokeOpacity="0.08" strokeWidth="1">
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`v${i}`} x1={40 + i * 40} y1="0" x2={40 + i * 40} y2="480" />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={40 + i * 40} x2="640" y2={40 + i * 40} />
        ))}
      </g>
      <g fill="#E6EBF2" fillOpacity="0.18">
        {[
          [120, 300, 60],
          [200, 260, 100],
          [280, 280, 80],
          [360, 220, 140],
          [440, 180, 180],
        ].map(([x, y, h]) => (
          <rect key={x} x={x} y={y} width="48" height={h} rx="4" />
        ))}
      </g>
      <path
        d="M 120 290 L 224 250 L 304 265 L 384 205 L 464 160"
        fill="none"
        stroke="#2DD48F"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {[
        [120, 290],
        [224, 250],
        [304, 265],
        [384, 205],
        [464, 160],
      ].map(([x, y]) => (
        <circle
          key={x}
          cx={x}
          cy={y}
          r="5"
          fill="#0B1420"
          stroke="#2DD48F"
          strokeWidth="2"
        />
      ))}
      <circle cx="524" cy="130" r="20" fill="none" stroke="#2DD48F" strokeWidth="2" />
      <path
        d="M 516 130 l 5 6 l 11 -12"
        fill="none"
        stroke="#2DD48F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="120"
        y="410"
        fill="#E6EBF2"
        fillOpacity="0.5"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="15"
        letterSpacing="2"
      >
        QUALITY · MEASURED
      </text>
    </svg>
  );
}

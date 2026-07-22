/** Brand artwork: a delivery pipeline, every stage verified. */
export function SlidePipeline() {
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
      <line
        x1="80"
        y1="240"
        x2="560"
        y2="240"
        stroke="#E6EBF2"
        strokeOpacity="0.25"
        strokeWidth="2"
      />
      {[120, 240, 360, 480].map((x) => (
        <g key={x}>
          <circle
            cx={x}
            cy="240"
            r="26"
            fill="#0B1420"
            stroke="#2DD48F"
            strokeWidth="2"
          />
          <path
            d={`M ${x - 9} 240 l 6 7 l 12 -14`}
            fill="none"
            stroke="#2DD48F"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ))}
      <circle cx="560" cy="240" r="8" fill="#2DD48F" />
      <text
        x="80"
        y="310"
        fill="#E6EBF2"
        fillOpacity="0.5"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="15"
        letterSpacing="2"
      >
        BUILD · TEST · REVIEW · DEPLOY
      </text>
    </svg>
  );
}

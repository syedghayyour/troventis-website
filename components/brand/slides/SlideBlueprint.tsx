/** Brand artwork: system architecture as a blueprint. */
export function SlideBlueprint() {
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
      <g fill="none" stroke="#E6EBF2" strokeOpacity="0.6" strokeWidth="1.5">
        <rect x="120" y="100" width="160" height="90" rx="8" />
        <rect x="360" y="100" width="160" height="90" rx="8" />
        <rect x="240" y="290" width="160" height="90" rx="8" />
      </g>
      <g fill="none" stroke="#2DD48F" strokeWidth="1.5">
        <path d="M 200 190 L 200 240 L 320 240 L 320 290" />
        <path d="M 440 190 L 440 240 L 320 240" />
      </g>
      <circle cx="320" cy="240" r="5" fill="#2DD48F" />
      <g fill="#E6EBF2" fillOpacity="0.35">
        <rect x="136" y="120" width="80" height="6" rx="3" />
        <rect x="136" y="136" width="120" height="6" rx="3" />
        <rect x="376" y="120" width="80" height="6" rx="3" />
        <rect x="376" y="136" width="120" height="6" rx="3" />
        <rect x="256" y="310" width="80" height="6" rx="3" />
        <rect x="256" y="326" width="120" height="6" rx="3" />
      </g>
      <text
        x="120"
        y="430"
        fill="#E6EBF2"
        fillOpacity="0.5"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="15"
        letterSpacing="2"
      >
        ARCHITECTURE · BY DESIGN
      </text>
    </svg>
  );
}

/** Brand artwork: AI systems, engineered with quality discipline. */
export function SlideAI() {
  const layers = [
    { x: 160, nodes: [140, 200, 260, 320] },
    { x: 320, nodes: [110, 170, 230, 290, 350] },
    { x: 480, nodes: [170, 230, 290] },
  ];
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
      <g stroke="#E6EBF2" strokeOpacity="0.15" strokeWidth="1">
        {layers[0]!.nodes.map((y1) =>
          layers[1]!.nodes.map((y2) => (
            <line
              key={`a${y1}-${y2}`}
              x1={layers[0]!.x}
              y1={y1}
              x2={layers[1]!.x}
              y2={y2}
            />
          )),
        )}
        {layers[1]!.nodes.map((y1) =>
          layers[2]!.nodes.map((y2) => (
            <line
              key={`b${y1}-${y2}`}
              x1={layers[1]!.x}
              y1={y1}
              x2={layers[2]!.x}
              y2={y2}
            />
          )),
        )}
      </g>
      <path
        d="M 160 260 L 320 230 L 480 230"
        fill="none"
        stroke="#2DD48F"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {layers.map((layer) =>
        layer.nodes.map((y) => (
          <circle
            key={`${layer.x}-${y}`}
            cx={layer.x}
            cy={y}
            r="9"
            fill="#0B1420"
            stroke={
              (layer.x === 160 && y === 260) ||
              (layer.x === 320 && y === 230) ||
              (layer.x === 480 && y === 230)
                ? "#2DD48F"
                : "#E6EBF2"
            }
            strokeOpacity={
              (layer.x === 160 && y === 260) ||
              (layer.x === 320 && y === 230) ||
              (layer.x === 480 && y === 230)
                ? 1
                : 0.45
            }
            strokeWidth="2"
          />
        )),
      )}
      <circle cx="540" cy="230" r="18" fill="none" stroke="#2DD48F" strokeWidth="2" />
      <path
        d="M 533 230 l 5 6 l 10 -11"
        fill="none"
        stroke="#2DD48F"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text
        x="120"
        y="430"
        fill="#E6EBF2"
        fillOpacity="0.5"
        fontFamily="IBM Plex Mono, monospace"
        fontSize="15"
        letterSpacing="2"
      >
        AI · EVALUATED
      </text>
    </svg>
  );
}

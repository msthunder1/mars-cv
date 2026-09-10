interface EndpointCardProps {
  x: number;
  y: number;
  color: string;
  label: string;
  preview: string;
}

export function EndpointCard({ x, y, color, label, preview }: EndpointCardProps) {
  const cardWidth = 288;
  const cardHeight = 50;
  const cardLeft = 15;

  return (
    <>
      <g stroke={color} color={color} className="wire-glow">
        <circle
          cx={x}
          cy={y}
          r={5}
          fill="var(--color-ink)"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <rect
        x={cardLeft}
        y={y - cardHeight / 2}
        width={cardWidth}
        height={cardHeight}
        rx={6}
        fill="var(--color-ink)"
        stroke={color}
        strokeWidth={1}
        opacity={0.9}
        vectorEffect="non-scaling-stroke"
        style={{ filter: `drop-shadow(0 0 4px ${color}33)` }}
      />
      <text
        x={cardLeft + 10}
        y={y - 4}
        fill={color}
        fontSize="11"
        fontWeight="600"
        className="uppercase"
        style={{ letterSpacing: 1 }}
      >
        {label}
      </text>
      <text x={cardLeft + 10} y={y + 8} fill="var(--color-muted)" fontSize="8">
        {preview}
      </text>
    </>
  );
}

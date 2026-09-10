interface EndpointProps {
  x: number;
  y: number;
  color: string;
  label: string;
}

export function Endpoint({ x, y, color, label }: EndpointProps) {
  const charWidth = 6;
  const labelPadX = 12;
  const labelHeight = 20;
  const labelWidth = label.length * charWidth + labelPadX * 2;

  return (
    <>
      <g stroke={color} color={color} className="wire-glow">
        <circle
          cx={x}
          cy={y}
          r={4}
          fill="var(--color-ink)"
          strokeWidth={3}
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <rect
        x={x - labelWidth / 2}
        y={y + 20 - labelHeight / 2}
        width={labelWidth}
        height={labelHeight}
        rx={6}
        fill="transparent"
        stroke={color}
        strokeWidth={0.5}
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={x}
        y={y + 20}
        fill={color}
        fontSize="7"
        textAnchor="middle"
        dominantBaseline="middle"
        className="uppercase"
      >
        {label}
      </text>
    </>
  );
}

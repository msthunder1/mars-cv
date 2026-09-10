interface EndpointProps {
  x: number;
  y: number;
  color: string;
  label: string;
  isMobile?: boolean;
}

export function Endpoint({ x, y, color, label, isMobile }: EndpointProps) {
  const labelY = isMobile ? y + 30 : y + 20;
  const charWidth = isMobile ? 10 : 4;
  const labelPadX = isMobile ? 12 : 12;
  const labelHeight = isMobile ? 30 : 16;
  const labelWidth = label.length * charWidth + labelPadX * 2;

  return (
    <>
      <g stroke={color} color={color} className="wire-glow">
        <circle
          cx={x}
          cy={y}
          r={7}
          fill="var(--color-ink)"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      </g>
      <rect
        x={x - labelWidth / 2}
        y={labelY - labelHeight / 2}
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
        y={labelY}
        fill={color}
        fontSize="7"
        textAnchor="middle"
        dominantBaseline="middle"
        className="sm:text-[8px] text-[16px]"
      >
        {label}
      </text>
    </>
  );
}

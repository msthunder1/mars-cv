interface EndpointProps {
  x: number;
  y: number;
  color: string;
  label: string;
  isMobile?: boolean;
}

export function Endpoint({ x, y, color, label, isMobile }: EndpointProps) {
  const charWidth = isMobile ? 10 : 4;
  const labelPadX = 12;
  const labelHeight = isMobile ? 30 : 16;
  const labelWidth = label.length * charWidth + labelPadX * 2;

  // Desktop: label below circle; Mobile: label left of circle
  const rectX = isMobile ? x - labelWidth - 12 : x - labelWidth / 2;
  const rectY = isMobile ? y - labelHeight / 2 : y + 20 - labelHeight / 2;
  const textX = isMobile ? x - labelWidth / 2 - 12 : x;
  const textY = isMobile ? y : y + 20;

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
        x={rectX}
        y={rectY}
        width={labelWidth}
        height={labelHeight}
        rx={6}
        fill="transparent"
        stroke={color}
        strokeWidth={0.5}
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={textX}
        y={textY}
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

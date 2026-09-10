interface WireProps {
  exitX: number;
  portraitBottomY: number;
  rowY: number;
  endX: number;
  endpointY: number;
  color: string;
}

export function Wire({ exitX, portraitBottomY, rowY, endX, endpointY, color }: WireProps) {
  return (
    <g stroke={color} color={color}>
      <line
        x1={exitX}
        y1={portraitBottomY}
        x2={exitX}
        y2={rowY}
        stroke={color}
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={exitX}
        y1={rowY}
        x2={endX}
        y2={rowY}
        stroke={color}
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1={endX}
        y1={rowY}
        x2={endX}
        y2={endpointY}
        stroke={color}
        strokeWidth={2}
        vectorEffect="non-scaling-stroke"
      />
    </g>
  );
}

interface WireProps {
  exitX: number;
  portraitBottomY: number;
  rowY: number;
  endX: number;
  endpointY: number;
  color: string;
  endShiftX?: number;
}

export function Wire({
  exitX,
  portraitBottomY,
  rowY,
  endX,
  endpointY,
  color,
  endShiftX = 0,
}: WireProps) {
  const finalX = endX - endShiftX;

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
      {endShiftX > 0 && (
        <line
          x1={endX}
          y1={endpointY}
          x2={finalX}
          y2={endpointY}
          stroke={color}
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
        />
      )}
    </g>
  );
}

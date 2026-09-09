interface EndpointProps {
  x: number;
  y: number;
  color: string;
  label: string;
}

export function Endpoint({ x, y, color, label }: EndpointProps) {
    return (
        <>
            <g stroke={color} color={color}>
                <circle cx={x} cy={y} r={3} fill="var{--color-ink}" stroke={color} strokeWidth={2} vectorEffect="non-scaling-stroke" />
            </g>
            <text x={x} y={y + 15} fill={color} fontSize="7" textAnchor="middle" >{label}</text>
        </>
    );
}
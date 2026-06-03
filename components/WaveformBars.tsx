'use client';

interface WaveformBarsProps {
  count?: number;
  animated?: boolean;
  color?: string;
  height?: number;
}

const HEIGHTS = [30, 60, 45, 80, 55, 90, 40, 70, 50, 85, 35, 65, 95, 50, 75, 40, 88, 60, 45, 70, 35, 80, 55, 65, 90, 42, 68, 52, 78, 38, 85, 48, 62, 92, 36, 72, 58, 82, 44, 66];

export default function WaveformBars({
  count = 40,
  animated = false,
  color = '#F5C800',
  height = 48,
}: WaveformBarsProps) {
  return (
    <div
      className="flex items-end gap-px"
      style={{ height: `${height}px` }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const barH = HEIGHTS[i % HEIGHTS.length];
        return (
          <div
            key={i}
            className={animated ? 'wave-bar' : ''}
            style={{
              width: '3px',
              height: `${(barH / 100) * height}px`,
              backgroundColor: color,
              borderRadius: '2px',
              animationDelay: animated ? `${(i * 0.05) % 0.8}s` : undefined,
              animationDuration: animated ? `${0.6 + (i % 5) * 0.12}s` : undefined,
            }}
          />
        );
      })}
    </div>
  );
}

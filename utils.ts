interface SkeletonLoaderProps {
  count?: number;
  height?: string;
  width?: string;
  circle?: boolean;
  className?: string;
}

export function SkeletonLoader({
  count = 1,
  height = "h-4",
  width = "w-full",
  circle = false,
  className = "",
}: SkeletonLoaderProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`
            ${circle ? "rounded-full" : "rounded-lg"}
            ${height}
            ${width}
            bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700
            animate-pulse
            ${className}
            ${i > 0 ? "mt-3" : ""}
          `}
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 2s infinite",
          }}
        />
      ))}
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </>
  );
}

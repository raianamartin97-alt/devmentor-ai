import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hoverEffect?: "scale" | "lift" | "glow" | "none";
}

export function AnimatedCard({
  children,
  className = "",
  delay = 0,
  hoverEffect = "scale",
}: AnimatedCardProps) {
  const hoverClasses = {
    scale: "hover:scale-105 hover:shadow-2xl",
    lift: "hover:-translate-y-2 hover:shadow-2xl",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    none: "",
  };

  return (
    <div
      className={`transition-all duration-300 ease-out ${hoverClasses[hoverEffect]} ${className}`}
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`,
      }}
    >
      {children}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

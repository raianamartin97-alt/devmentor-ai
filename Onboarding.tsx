import { Battery, Wifi, Signal } from "lucide-react";
import { useState, useEffect } from "react";

export function AndroidStatusBar() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-slate-900 text-white px-4 py-1.5 flex justify-between items-center text-xs h-7 border-b border-slate-800">
      {/* Left side - Time */}
      <div className="font-semibold">{time}</div>

      {/* Right side - Icons */}
      <div className="flex items-center gap-1">
        <Signal className="w-3.5 h-3.5" strokeWidth={2.5} />
        <Wifi className="w-3.5 h-3.5" strokeWidth={2.5} />
        <Battery className="w-3.5 h-3.5" strokeWidth={2.5} />
      </div>
    </div>
  );
}

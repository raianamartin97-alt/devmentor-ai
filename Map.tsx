import { Home, MessageCircle, BookOpen, User } from "lucide-react";
import { useLocation } from "wouter";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export function AndroidBottomNav() {
  const [location, navigate] = useLocation();

  const navItems: NavItem[] = [
    { icon: <Home className="w-6 h-6" />, label: "Home", path: "/" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "Chat", path: "/dashboard" },
    { icon: <BookOpen className="w-6 h-6" />, label: "Exemplos", path: "/examples" },
    { icon: <User className="w-6 h-6" />, label: "Perfil", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-slate-800 border-t border-slate-700 h-16 flex justify-around items-center">
      {navItems.map((item) => {
        const isActive = location === item.path;
        return (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center gap-1 py-2 px-3 transition-colors ${
              isActive ? "text-blue-500" : "text-slate-400 hover:text-white"
            }`}
          >
            {item.icon}
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

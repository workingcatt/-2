import { motion } from "motion/react";
import { Home, Globe, BookOpen, Users, Map } from "lucide-react";

const NAV_ITEMS = [
  { id: "main", label: "메인", icon: Home },
  { id: "worldview", label: "세계관", icon: Globe },
  { id: "webtoon", label: "웹툰", icon: BookOpen },
  { id: "character", label: "캐릭터", icon: Users },
  { id: "map", label: "마법지도", icon: Map },
];

export function Navigation() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40">
      {/* Magical glowing aura around the nav */}
      <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 via-purple-300 to-yellow-300 rounded-full blur-md opacity-40 z-[-1] animate-pulse"></div>
      
      {/* Decorative floating stars */}
      <div className="absolute -top-3 -left-4 text-yellow-300 text-lg opacity-80 animate-bounce delay-100">✧</div>
      <div className="absolute -bottom-2 -right-3 text-pink-400 text-sm opacity-80 animate-bounce delay-300">✦</div>

      <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-full font-sans shadow-[0_10px_40px_rgba(255,182,193,0.4)] p-1.5 md:p-2">
        <ul className="flex items-center justify-center space-x-1 md:space-x-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button 
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center space-x-1.5 md:space-x-2 px-4 md:px-5 py-2.5 rounded-full text-pink-500 hover:text-white hover:bg-gradient-to-r hover:from-pink-400 hover:to-rose-400 text-sm md:text-base transition-all duration-300 font-bold tracking-wide group"
                >
                  <Icon size={16} className="group-hover:scale-110 transition-transform duration-300 drop-shadow-sm" />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

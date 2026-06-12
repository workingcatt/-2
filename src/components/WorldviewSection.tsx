import { motion } from "motion/react";
import { FACTION_INFO, WORLDVIEW } from "../data";
import { Star, Sparkles, Info, Shield, Users, Globe, BookOpen } from "lucide-react";

export function WorldviewSection() {
  const WORLDVIEW_ICONS = [Globe, Sparkles, Shield, Info, Users, BookOpen, Star];

  return (
    <section id="worldview" className="min-h-screen py-32 bg-transparent relative z-10">
      {/* Decorative stars */}
      <div className="absolute top-20 right-20 text-yellow-300 text-4xl opacity-50 animate-pulse">✦</div>
      <div className="absolute bottom-20 left-20 text-pink-300 text-3xl opacity-50 animate-pulse">✦</div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 font-serif">세계관</h2>
          <div className="w-16 h-[3px] bg-pink-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            <h3 className="text-2xl text-pink-500 font-serif mb-10 flex items-center font-bold justify-center">
              <Sparkles className="w-6 h-6 mr-3 text-pink-400" />
              설정 개요
              <Sparkles className="w-6 h-6 ml-3 text-pink-400" />
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORLDVIEW.map((text, i) => {
                const Icon = WORLDVIEW_ICONS[i % WORLDVIEW_ICONS.length];
                return (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-pink-100 shadow-[0_8px_30px_rgba(255,182,193,0.3)] relative overflow-hidden group"
                  >
                    <div className="absolute -right-4 -top-4 bg-pink-50 w-24 h-24 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                    <div className="w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center mb-4 relative z-10 text-pink-500 shadow-inner">
                      <Icon size={24} />
                    </div>
                    <p className="text-gray-700 text-[0.95rem] font-sans font-medium leading-relaxed relative z-10">
                      {text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full relative"
          >
            <h3 className="text-2xl text-yellow-500 font-serif mb-10 flex items-center font-bold justify-center">
              <Shield className="w-6 h-6 mr-3 text-yellow-400" />
              주요 세력
              <Shield className="w-6 h-6 ml-3 text-yellow-400" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FACTION_INFO.map((faction, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-yellow-50/80 to-white/80 backdrop-blur-xl p-8 rounded-3xl border border-yellow-100 shadow-[0_10px_40px_rgba(253,224,71,0.2)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-200/20 rounded-bl-full -z-10"></div>
                  <h4 className="text-yellow-600 font-serif text-xl mb-3 font-bold border-b border-yellow-200/50 pb-3">{faction.name}</h4>
                  <p className="text-gray-700 text-sm font-sans font-medium leading-relaxed">{faction.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MAP_LOCATIONS } from "../data";
import { MapPin, Sparkles } from "lucide-react";

export function MapSection() {
  const [selectedMap, setSelectedMap] = useState<number | null>(null);

  // Generate pseudo-random coordinates for the 19 locations on a tech/magic grid
  const nodePositions = [
    { top: '30%', left: '40%' }, { top: '35%', left: '46%' }, { top: '25%', left: '35%' }, { top: '30%', left: '50%' }, // City
    { top: '50%', left: '25%' }, { top: '55%', left: '30%' }, { top: '45%', left: '20%' }, { top: '50%', left: '35%' }, // Lumiere
    { top: '70%', left: '70%' }, // Pandora
    { top: '80%', left: '40%' } // Maleas
  ];

  const handleSelect = (id: number) => {
    setSelectedMap(id);
  };

  return (
    <section id="map" className="py-32 bg-[#faf8f9] relative min-h-screen border-t border-pink-100/50">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>
      <div className="max-w-7xl mx-auto px-4 w-full h-full flex flex-col relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative z-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4 font-serif">마법 지도</h2>
          <div className="w-16 h-[3px] bg-pink-300 mx-auto rounded-full"></div>
          <p className="mt-4 text-pink-400 font-sans text-sm tracking-widest font-bold uppercase">Magical Sector Map</p>
        </motion.div>

        <div className="relative w-full flex-grow min-h-[600px] bg-pink-50/80 rounded-[3rem] border-4 border-pink-200 overflow-hidden shadow-[0_20px_60px_rgba(255,182,193,0.3)] flex items-center justify-center p-4">
          
          {/* Ornate Inner Border */}
          <div className="absolute inset-4 border-2 border-pink-300/50 rounded-[2.5rem] pointer-events-none z-10"></div>
          <div className="absolute inset-6 border border-dashed border-pink-300/50 rounded-[2rem] pointer-events-none z-10"></div>
          
          {/* Corner Decor */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-pink-400 rounded-tl-[2.2rem] opacity-50 z-10 pointer-events-none"></div>
          <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-pink-400 rounded-tr-[2.2rem] opacity-50 z-10 pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-pink-400 rounded-bl-[2.2rem] opacity-50 z-10 pointer-events-none"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-pink-400 rounded-br-[2.2rem] opacity-50 z-10 pointer-events-none"></div>

          {/* Magical Grid Background */}
          <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #f472b6 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

          {/* Magical Circle Background */}
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 160, repeat: Infinity, ease: 'linear' }} 
            className="absolute w-[800px] h-[800px] border-[10px] border-dotted border-pink-200 rounded-full opacity-60 pointer-events-none"
            style={{ transform: "perspective(1200px) rotateX(60deg)", transformOrigin: "center" }} 
          >
            <div className="absolute inset-8 border border-pink-300 rounded-full"></div>
            <div className="absolute inset-16 border-[4px] border-dashed border-rose-200 rounded-full"></div>
            <div className="absolute inset-24 border border-pink-200 rounded-full opacity-50"></div>
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-pink-100/90 via-transparent to-transparent pointer-events-none"></div>

          {/* Glowing Nodes representing map locations */}
          <div className="absolute inset-x-0 bottom-[10%] top-[10%] max-w-5xl mx-auto relative w-full h-[600px] my-10" style={{ transform: "perspective(1000px) rotateX(15deg) translateZ(40px)" }}>
             {MAP_LOCATIONS.map((loc, i) => {
                const isSelected = selectedMap === loc.id;
                return (
                <button
                  key={loc.id}
                  onClick={() => handleSelect(loc.id)}
                  className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center group transition-all z-20 ${isSelected ? 'z-40 scale-125' : ''}`}
                  style={{ top: nodePositions[i]?.top || '50%', left: nodePositions[i]?.left || '50%' }}
                >
                  {/* Floating star effect when hovered or selected */}
                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all shadow-md ${
                    isSelected 
                    ? "bg-pink-400 text-white scale-125 shadow-[0_0_20px_rgba(244,114,182,0.8)] border-2 border-pink-200" 
                    : "bg-white text-pink-400 border-[3px] border-pink-200 shadow-[0_6px_15px_rgba(255,182,193,0.4)] group-hover:bg-pink-50 group-hover:text-pink-500 group-hover:scale-110 group-hover:shadow-[0_8px_20px_rgba(255,182,193,0.6)]"
                  }`}>
                    <Sparkles size={isSelected ? 18 : 14} className="md:w-5 md:h-5" />
                  </div>

                  <span className={`text-[12px] whitespace-nowrap px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border transition-all absolute top-full mt-3 font-bold ${
                    isSelected ? "border-pink-400 text-pink-500 opacity-100 shadow-[0_5px_15px_rgba(255,182,193,0.5)]" : "border-pink-100 text-gray-500 opacity-0 group-hover:opacity-100 shadow-sm"
                  }`}>{loc.name}</span>
                </button>
             )})}
          </div>

          {/* Detail View Side Modal */}
          <AnimatePresence>
            {selectedMap && (
              <motion.div
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.95 }}
                className="absolute inset-x-4 md:inset-x-auto md:right-10 bottom-4 md:bottom-10 top-4 md:top-10 md:w-[420px] bg-white/95 backdrop-blur-2xl border border-pink-200 rounded-[2.5rem] p-6 md:p-8 z-[100] shadow-[0_30px_60px_rgba(255,182,193,0.4)] flex flex-col"
              >
                <button 
                  onClick={() => setSelectedMap(null)}
                  className="absolute top-4 right-4 z-[110] text-gray-400 hover:text-pink-500 bg-gray-100/80 hover:bg-pink-50 rounded-full p-2.5 transition-colors"
                >
                  ✕
                </button>

                <div className="flex items-center space-x-4 mb-6 border-b border-pink-100 pb-6 relative z-10 w-[90%]">
                  <div className="w-14 h-14 rounded-full border border-pink-200 flex items-center justify-center bg-pink-50 shadow-[0_5px_15px_rgba(255,182,193,0.3)] shrink-0">
                    <MapPin size={24} className="text-pink-500" />
                  </div>
                  <div>
                    <span className="text-xs text-pink-400 font-bold tracking-widest block mb-1">AREA. {selectedMap.toString().padStart(2, '0')}</span>
                    <h3 className="text-2xl text-gray-800 font-serif font-black tracking-tight">{MAP_LOCATIONS.find(m => m.id === selectedMap)?.name}</h3>
                  </div>
                </div>

                <div className="flex-grow overflow-y-auto custom-scrollbar text-sm text-gray-700 font-sans space-y-6 relative z-10 pr-2">
                  
                  <div className="bg-pink-50/50 border border-pink-100 p-5 rounded-2xl relative overflow-hidden shadow-inner">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-400"></div>
                    <p className="font-medium text-[0.95rem] leading-loose text-gray-700">
                      {MAP_LOCATIONS.find(m => m.id === selectedMap)?.desc || "해당 장소의 이야기가 아직 밝혀지지 않았습니다."}
                    </p>
                  </div>

                  <div className="rounded-2xl overflow-hidden border border-pink-100 bg-gray-50 shadow-sm flex justify-center items-center p-2 min-h-[150px]">
                   <img
                    key={selectedMap}
                     src={`https://working-cat.org/Magical/BACK/${selectedMap}.png`}
                     alt={MAP_LOCATIONS.find(m => m.id === selectedMap)?.name}
                     className="w-full h-auto max-h-[35vh] object-contain rounded-xl shadow-md"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSJyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNSkiPuaUrOqygSDsnbTrr7jsp4DqsIAg7JeG7Iq164uI64ukPC90ZXh0Pgo8L3N2Zz4=";
                     }}
                   />
                  </div>

                  {/* Magical status bars */}
                  <div className="pt-2 space-y-4 font-sans text-xs font-bold text-gray-500">
                    <div>
                      <div className="flex justify-between mb-2"><span className="text-pink-500">마력 결집도</span><span className="text-pink-600">{Math.floor(Math.random() * 80) + 10}%</span></div>
                      <div className="h-2 bg-pink-100 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-pink-400 rounded-full" style={{width: `${Math.floor(Math.random() * 80) + 10}%`}}></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-yellow-500 mb-2"><span className="text-yellow-600">탐색 중요도</span><span className="text-yellow-600">{Math.floor(Math.random() * 80) + 10}%</span></div>
                      <div className="h-2 bg-yellow-100 rounded-full overflow-hidden shadow-inner"><div className="h-full bg-yellow-400 rounded-full" style={{width: `${Math.floor(Math.random() * 80) + 10}%`}}></div></div>
                    </div>
                  </div>


                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

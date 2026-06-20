import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FACTIONS } from "../data";
import { Character } from "../types";
import { RefreshCw, X } from "lucide-react";

export function CharacterSection() {
  const [activeFaction, setActiveFaction] = useState(FACTIONS[0].id);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [imgRandNum, setImgRandNum] = useState(1);

  const handleSelectCharacter = useCallback((char: Character) => {
    setSelectedCharacter(char);
    setImgRandNum(1); // Reset to base state
  }, []);

  const generateNewRandomImage = (code: string) => {
    let max = 14;
    // 태초의 마녀들은 변신 없음 (1~6번까지만 사용)
    if (["FG", "GH", "HI", "EF"].includes(code)) {
      max = 6;
    }
    const rand = Math.floor(Math.random() * max) + 1;
    setImgRandNum(rand);
  };

  const currentFaction = FACTIONS.find(f => f.id === activeFaction);

  return (
    <section id="character" className="py-32 bg-transparent min-h-screen relative font-sans">
      <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-pink-100 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-50 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-2"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-pink-500 mb-4 font-serif break-keep flex items-center justify-center gap-2 sm:gap-4">
            <span className="shrink-0 text-3xl sm:text-4xl lg:text-5xl">✨</span>
            <span className="whitespace-nowrap">마법소녀 기록서</span>
            <span className="shrink-0 text-3xl sm:text-4xl lg:text-5xl">✨</span>
          </h2>
          <div className="w-20 h-[3px] bg-pink-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex overflow-x-auto custom-scrollbar snap-x pb-4 px-2 gap-3 md:gap-4 md:flex-wrap md:justify-center mb-16">
          {FACTIONS.map((faction) => (
            <button
              key={faction.id}
              onClick={() => {
                setActiveFaction(faction.id);
                setSelectedCharacter(null); 
              }}
              className={`relative shrink-0 snap-center px-6 md:px-8 py-3 md:py-4 rounded-[2rem] text-sm md:text-base font-bold transition-all overflow-hidden group border ${
                activeFaction === faction.id
                  ? "bg-gradient-to-r from-pink-400 to-rose-400 border-transparent text-white shadow-[0_10px_20px_rgba(244,114,182,0.4)]"
                  : "bg-white/80 backdrop-blur-md border-pink-200 text-pink-500 hover:bg-pink-50 hover:shadow-lg hover:-translate-y-1"
              }`}
            >
              {activeFaction === faction.id && (
                <span className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-full animate-[shimmer_2s_infinite]"></span>
              )}
              <span className="relative z-10 flex items-center justify-center">
                <span className={`w-2 h-2 rounded-full mr-3 ${activeFaction === faction.id ? "bg-white" : "bg-pink-300"}`}></span>
                {faction.name}
              </span>
            </button>
          ))}
        </div>

        {/* Character Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFaction}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {currentFaction?.characters.map((char) => (
              <button
                key={char.code}
                onClick={() => handleSelectCharacter(char)}
                className="group bg-white rounded-3xl border border-pink-100 overflow-hidden shadow-sm hover:shadow-[0_10px_30px_rgba(255,192,203,0.4)] transition-all duration-300 hover:-translate-y-2 flex flex-col items-center text-left"
              >
                <div className="relative w-full aspect-[3/4] bg-pink-50/50 flex items-center justify-center overflow-hidden">
                  <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute w-[120%] aspect-square border-4 border-dotted border-white group-hover:border-pink-200 rounded-full pointer-events-none transition-colors"
                  />
                  <img 
                    src={`https://working-cat.org/Magical/${char.code}/1.png`} 
                    alt={char.name}
                    className="w-[110%] h-[110%] object-contain relative z-10 drop-shadow-md group-hover:scale-105 transition-transform duration-500 max-w-none"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSJyZ2JhKDAsMCwwLDAuMykiPuiQkOyAseydtCDXhOyenOynnCDslYrAteuLiOuLpC48L3RleHQ+Cjwvc3ZnPg==";
                    }}
                  />
                </div>
                <div className="p-4 sm:p-5 w-full bg-white border-t border-pink-50 z-20">
                  <div className="text-gray-800 font-serif text-xl mb-1 font-black group-hover:text-pink-500 transition-colors">{char.name}</div>
                  <div className="text-xs text-pink-500 font-bold bg-pink-50 inline-block px-3 py-1 rounded-full">{char.ability}</div>
                </div>
              </button>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Character Modal */}
      </div>

      <AnimatePresence>
        {selectedCharacter && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6" style={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(10px)' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="w-full max-w-5xl relative flex flex-col mt-4 md:mt-0"
            >
              {/* Floating Close Button for both Mobile and Desktop */}
              <button 
                onClick={() => setSelectedCharacter(null)}
                className="absolute -top-12 right-0 md:top-6 md:-right-16 p-2.5 md:p-3 bg-white border border-pink-200 hover:bg-pink-50 text-gray-500 hover:text-pink-600 rounded-full transition-all z-[110] shadow-[0_4px_10px_rgba(255,182,193,0.4)]"
              >
                <X size={24} />
              </button>

              <div className="bg-white border-2 border-pink-100 rounded-[2rem] sm:rounded-[3rem] w-full max-h-[85vh] overflow-y-auto custom-scrollbar flex flex-col lg:flex-row relative shadow-[0_30px_60px_rgba(255,182,193,0.5)]">
                {/* Left Side: Big Image Area */}
                <div className="w-full lg:w-5/12 bg-pink-50 flex flex-col items-center justify-center p-8 pt-8 lg:pt-8 md:p-8 relative border-b lg:border-b-0 lg:border-r border-pink-100 min-h-[300px]">
                    <div className="relative w-full aspect-[3/4] flex items-center justify-center mb-6">
                    {/* Magical background ring */}
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                      className="absolute w-[120%] aspect-square border-[8px] border-dotted border-white rounded-full pointer-events-none"
                    />
                    
                    <img 
                      src={`https://working-cat.org/Magical/${selectedCharacter.code}/${imgRandNum}.png`} 
                      alt={selectedCharacter.name}
                      className="w-[120%] h-[120%] object-contain relative z-10 drop-shadow-2xl max-w-none"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPgo8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIgLz4KPHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGFsaWdubWVudC1iYXNlbGluZT0ibWlkZGxlIiBmaWxsPSJyZ2JhKDAsMCwwLDAuMykiPuiQkOyAseydtCDXhOyenOynnCDslYrAteuLiOuLpC48L3RleHQ+Cjwvc3ZnPg==";
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-4 w-full mt-2">
                    {/* Form Toggle */}
                    {!["FG", "GH", "HI", "EF"].includes(selectedCharacter.code) && (
                      <div className="flex items-center justify-center gap-2 p-1 bg-pink-100/50 rounded-full border border-pink-200 w-fit mx-auto">
                        <button
                          onClick={() => setImgRandNum((prev) => prev > 6 ? prev - 6 : prev)}
                          className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${imgRandNum <= 6 ? 'bg-white text-pink-500 shadow-sm border border-pink-200 scale-105' : 'text-pink-400/80 hover:text-pink-600'}`}
                        >
                          평상시
                        </button>
                        <button
                          onClick={() => setImgRandNum((prev) => prev <= 6 ? prev + 6 : prev)}
                          className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${imgRandNum > 6 ? 'bg-pink-400 text-white shadow-md scale-105' : 'text-pink-400/80 hover:text-pink-600'}`}
                        >
                          마법소녀 폼
                        </button>
                      </div>
                    )}
                    
                    {/* Emotion Buttons */}
                    <div className="w-full">
                      <p className="text-center text-[10px] text-pink-400 uppercase tracking-widest font-bold mb-2">상태 / 감정 정보</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {(imgRandNum <= 6 ? [1, 2, 3, 4, 5, 6] : [7, 8, 9, 10, 11, 12, 13, 14]).map(num => (
                           <button 
                             key={num}
                             onClick={() => setImgRandNum(num)}
                             className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                               imgRandNum === num 
                               ? 'bg-rose-400 text-white shadow-[0_3px_10px_rgba(251,113,133,0.4)] scale-105 border-rose-400' 
                               : 'bg-white text-rose-400 border border-rose-200 hover:bg-rose-50'
                             }`}
                           >
                             {imgRandNum <= 6 
                               ? ['대화', '미소', '의문', '부끄러움', '슬픔', '화남'][num-1]
                               : ['변신', '대화', '웃음', '의문', '부끄러움', '슬픔', '화남', '전투'][num-7]
                             }
                           </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side: Details Info */}
                <div className="w-full lg:w-7/12 p-8 lg:p-12 space-y-6 flex flex-col justify-center bg-white relative">
                  <div>
                    <h3 className="text-4xl lg:text-5xl font-black text-gray-800 font-serif mb-4">{selectedCharacter.name}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm">
                      <span className="px-5 py-2 bg-pink-500 text-white rounded-full font-bold shadow-md">CODE: {selectedCharacter.code}</span>
                      <span className="text-gray-700 font-bold bg-gray-100 px-4 py-2 rounded-full border border-gray-200">{selectedCharacter.ability}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                    <div className="bg-pink-50 p-4 rounded-3xl border border-pink-100">
                      <span className="text-pink-400 block text-[10px] mb-1 font-bold uppercase tracking-wider">AGE / GENDER</span>
                      <span className="text-gray-800 font-bold">{selectedCharacter.age} / {selectedCharacter.gender}</span>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-3xl border border-pink-100">
                      <span className="text-pink-400 block text-[10px] mb-1 font-bold uppercase tracking-wider">EYES</span>
                      <span className="text-gray-800 font-bold">{selectedCharacter.eyes}</span>
                    </div>
                    <div className="col-span-2 bg-pink-50 p-5 rounded-3xl border border-pink-100">
                      <span className="text-pink-400 block text-[10px] mb-2 font-bold uppercase tracking-wider">PERSONALITY</span>
                      <span className="text-gray-700 font-medium leading-relaxed block">{selectedCharacter.personality}</span>
                    </div>
                    <div className="col-span-2 bg-pink-50 p-5 rounded-3xl border border-pink-100">
                      <span className="text-pink-400 block text-[10px] mb-2 font-bold uppercase tracking-wider">FEATURE</span>
                      <span className="text-gray-700 font-medium leading-relaxed block">{selectedCharacter.feature}</span>
                    </div>
                    
                    <div className="col-span-2 mt-2 space-y-4">
                      <div className="border border-yellow-100 border-l-4 border-l-yellow-400 bg-yellow-50 p-5 rounded-r-3xl rounded-l-md shadow-sm">
                        <span className="text-yellow-600 block text-xs mb-3 font-bold flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2"></span>
                          평상시 차림
                        </span>
                        <p className="text-gray-700 text-xs mb-2 font-medium"><span className="text-yellow-600/70 inline-block w-10 font-bold">헤어</span> {selectedCharacter.originalHair}</p>
                        <p className="text-gray-700 text-xs font-medium"><span className="text-yellow-600/70 inline-block w-10 font-bold">복장</span> {selectedCharacter.casualOutfit}</p>
                      </div>
                      {selectedCharacter.transformOutfit !== "-" && (
                        <div className="border border-pink-200 border-l-4 border-l-pink-400 bg-gradient-to-r from-pink-50 to-white p-5 rounded-r-3xl rounded-l-md shadow-sm">
                          <span className="text-pink-600 block text-xs mb-3 font-bold flex items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mr-2"></span>
                            마법소녀 폼
                          </span>
                          <p className="text-gray-800 text-xs mb-2 font-medium"><span className="text-pink-500/70 inline-block w-10 font-bold">헤어</span> {selectedCharacter.transformHair}</p>
                          <p className="text-gray-800 text-xs font-medium"><span className="text-pink-500/70 inline-block w-10 font-bold">복장</span> {selectedCharacter.transformOutfit}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
    </section>
  );
}

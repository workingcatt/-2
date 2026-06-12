import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Heart, Star } from "lucide-react";

interface IntroProps {
  onEnter: () => void;
}

export function Intro({ onEnter }: IntroProps) {
  const [step, setStep] = useState(0);

  const startSequence = () => {
    setStep(1);
    setTimeout(() => {
      setStep(2);
      setTimeout(() => {
        onEnter();
      }, 3500);
    }, 3500);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#fff8fa] text-pink-900 overflow-hidden font-serif"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1.2, ease: "easeIn" }}
    >
      <div className="absolute inset-0 opacity-50 pointer-events-none mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle, #ffd1dc 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ background: 'radial-gradient(circle, rgba(255,223,186,0.6) 0%, transparent 70%)' }}
      />
      
      {/* Floating elegant petals/dust */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "120vh", x: `${Math.random() * 100}vw`, opacity: 0.2 + Math.random() * 0.4 }}
            animate={{ 
              y: "-20vh", 
              x: `${Math.random() * 100}vw`,
              rotate: Math.random() * 360 
            }}
            transition={{ 
              duration: 15 + Math.random() * 15, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 10
            }}
            className="absolute p-1 rounded-full bg-pink-200/50 blur-[1px]"
            style={{ width: `${Math.random() * 10 + 5}px`, height: `${Math.random() * 10 + 5}px` }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="step0"
            initial={{ y: 20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center z-10 flex flex-col items-center select-none w-full px-4 relative"
          >
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute w-[600px] h-[600px] rounded-full border-2 border-dashed border-pink-200 pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360 }} 
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[450px] h-[450px] rounded-full border-4 border-dotted border-yellow-200 pointer-events-none"
            />

            <p className="text-pink-500 font-sans tracking-[0.4em] mb-4 text-sm md:text-base opacity-90 drop-shadow-sm font-bold">
              ★ URBAN FANTASY MAGICAL GIRL ★
            </p>

            {/* Decorative sparkles */}
            <motion.div animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.8, 1.2, 0.8] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-10 left-10 text-yellow-300 text-3xl">✦</motion.div>
            <motion.div animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.3, 0.9] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }} className="absolute bottom-10 right-10 text-pink-300 text-4xl">✦</motion.div>
            <motion.div animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.1, 0.8] }} transition={{ duration: 2.5, repeat: Infinity, delay: 2 }} className="absolute top-1/4 right-1/4 text-purple-300 text-2xl">✨</motion.div>
            <motion.div animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }} className="absolute bottom-1/4 left-1/4 text-rose-300 text-5xl blur-[2px]">✧</motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-rose-300 to-yellow-400 drop-shadow-md mb-8 md:mb-10 tracking-tighter py-4 text-center leading-[1.1] md:leading-tight">
              그렇다 해도<br className="md:hidden" /> 마법소녀다!
            </h1>
            
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={startSequence}
              className="mt-8 md:mt-12 group relative px-6 py-3 md:px-10 md:py-4 font-serif font-black text-lg md:text-xl text-white outline-none"
            >
              {/* Magical Button Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300 rounded-full group-hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(255,182,193,0.8)]"></div>
              {/* Inner glowing edge */}
              <div className="absolute inset-1 border-2 border-white/40 rounded-full pointer-events-none"></div>
              {/* Sparkles */}
              <div className="absolute -top-3 -right-3 text-yellow-300 text-2xl animate-bounce pointer-events-none">✦</div>
              <div className="absolute -bottom-2 -left-2 text-pink-200 text-xl animate-bounce pointer-events-none" style={{ animationDelay: '0.5s' }}>✧</div>
              
              <span className="relative flex items-center justify-center space-x-2 md:space-x-3 drop-shadow-md z-10 w-full">
                <Heart className="w-4 h-4 md:w-5 md:h-5 fill-white" />
                <span className="tracking-wider">마법의 문 열기</span>
                <Star className="w-4 h-4 md:w-5 md:h-5 fill-white" />
              </span>
            </motion.button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="z-10 text-center px-6 max-w-2xl"
          >
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-500/80 font-medium italic tracking-wider break-keep">
              "괜찮다고 한다면 <span className="whitespace-nowrap">거짓말이겠지..."</span>
            </p>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, duration: 0.8 }}
            className="z-10 text-center px-6"
          >
            <h2 className="text-4xl md:text-6xl text-pink-500 font-black tracking-tight drop-shadow-[0_0_20px_rgba(255,105,180,0.6)]">
              "그래도 지키고 싶은 것들이 있어-"
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

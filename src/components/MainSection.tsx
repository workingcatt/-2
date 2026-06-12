import { motion } from "motion/react";

export function MainSection() {
  return (
    <section id="main" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden bg-[#faf8f9]">
      {/* Light Immersive Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[15000ms] hover:scale-[1.05] origin-center opacity-[0.9]" 
        style={{ backgroundImage: `url('https://working-cat.org/SITE/%EA%B7%B8%EB%9F%BC%EC%97%90%EB%8F%84%20%EB%A7%88%EB%B2%95%EC%86%8C%EB%85%80%EB%8B%A4!/%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8%20%EB%B0%B0%EA%B2%BD.png')` }}
      ></div>
      
      {/* Light Overlay + Magical Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-pink-50/40 to-[#faf8f9] pointer-events-none"></div>
      
      {/* Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{ opacity: [0.3, 0.8, 0.3], y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] left-[20%] text-pink-300 text-3xl">✦</motion.div>
        <motion.div animate={{ opacity: [0.2, 0.6, 0.2], y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute bottom-[30%] right-[15%] text-yellow-300 text-4xl">✧</motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex flex-col items-center w-full"
        >
          <div className="w-full relative py-12 md:py-24 flex flex-col items-center justify-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-amber-300 drop-shadow-sm mb-6 font-serif tracking-tighter leading-[1.1] md:leading-normal py-4 px-2 whitespace-normal md:whitespace-nowrap" style={{ filter: 'drop-shadow(0px 8px 15px rgba(255, 182, 193, 0.5))' }}>
              그렇다 해도<br className="md:hidden" /> 마법소녀다!
            </h1>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-center justify-center space-x-4 md:space-x-8 mt-4"
            >
              <div className="h-[1px] w-20 md:w-40 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60"></div>
              <p className="text-xs md:text-sm text-pink-500 font-sans tracking-[0.6em] font-bold uppercase">
                Urban Fantasy Magical Girl
              </p>
              <div className="h-[1px] w-20 md:w-40 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

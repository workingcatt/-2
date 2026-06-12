import { useState } from "react";
import { Intro } from "./components/Intro";
import { AudioPlayer } from "./components/AudioPlayer";
import { Navigation } from "./components/Navigation";
import { MainSection } from "./components/MainSection";
import { WorldviewSection } from "./components/WorldviewSection";
import { WebtoonSection } from "./components/WebtoonSection";
import { CharacterSection } from "./components/CharacterSection";
import { MapSection } from "./components/MapSection";
import { AnimatePresence } from "motion/react";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="font-sans text-gray-800 bg-[#faf8f9] min-h-screen selection:bg-pink-200">
      <div className="fixed inset-0 pointer-events-none opacity-40 z-0 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle, #f0e1e6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <AnimatePresence>
        {showIntro && <Intro onEnter={() => setShowIntro(false)} />}
      </AnimatePresence>

      {!showIntro && (
        <main className="relative z-10 w-full overflow-x-hidden">
          <Navigation />
          <MainSection />
          <WorldviewSection />
          <WebtoonSection />
          <CharacterSection />
          <MapSection />
          <AudioPlayer />
        </main>
      )}
    </div>
  );
}

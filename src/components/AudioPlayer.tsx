import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      setIsPlaying(!audioRef.current.paused);
      
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      
      audioRef.current.addEventListener('play', handlePlay);
      audioRef.current.addEventListener('pause', handlePause);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('play', handlePlay);
          audioRef.current.removeEventListener('pause', handlePause);
        }
      };
    }
  }, []);

  // Handle play/pause via button
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 lg:bottom-10 lg:right-10 z-50 flex items-center gap-1 sm:gap-2 bg-white/90 backdrop-blur-md p-1.5 sm:p-2.5 rounded-full border border-pink-200 shadow-[0_10px_30px_rgba(255,182,193,0.3)] group hover:shadow-[0_15px_40px_rgba(244,114,182,0.4)] transition-all">
      <audio 
        ref={audioRef} 
        src="https://pub-f28adb1525b54d3f9ca4be0fbdb3c1ed.r2.dev/music/%EA%B7%B8%EB%9F%BC%EC%97%90%EB%8F%84%20%EB%A7%88%EB%B2%95%EC%86%8C%EB%85%80%EB%8B%A4.mp3" 
        loop 
        autoPlay 
        className="hidden" 
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      
      {/* Volume slider visible on mobile, expandable on desktop */}
      <div className="w-16 sm:w-0 sm:group-hover:w-24 overflow-hidden transition-all duration-300 ease-in-out pl-2 sm:pl-0 sm:group-hover:pl-2">
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.01" 
          value={volume} 
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-16 sm:w-20 accent-pink-400"
        />
      </div>

      <button
        onClick={togglePlay}
        className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-400 hover:bg-pink-500 text-white rounded-full flex items-center justify-center shadow-[0_0_10px_rgba(244,114,182,0.5)] transition-all duration-300 flex-shrink-0"
      >
        {isPlaying ? <Volume2 size={20} className="sm:w-6 sm:h-6" /> : <VolumeX size={20} className="sm:w-6 sm:h-6" />}
      </button>
    </div>
  );
}

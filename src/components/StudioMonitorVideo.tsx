import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Grid3X3, Volume2, ShieldCheck, Eye } from 'lucide-react';
import { motion } from 'motion/react';

interface StudioMonitorVideoProps {
  youtubeUrl: string;
  title: string;
}

export function StudioMonitorVideo({ youtubeUrl, title }: StudioMonitorVideoProps) {
  const [showGrid, setShowGrid] = useState(false);
  const [timecode, setTimecode] = useState('00:01:28:14');
  const [audioLevels, setAudioLevels] = useState<number[]>([40, 65, 80, 55, 90, 75, 45, 60]);

  // Live timecode simulation
  useEffect(() => {
    let frame = 14;
    let sec = 28;
    let min = 1;
    const interval = setInterval(() => {
      frame = (frame + 1) % 30;
      if (frame === 0) {
        sec = (sec + 1) % 60;
        if (sec === 0) min = (min + 1) % 60;
      }
      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimecode(`00:${pad(min)}:${pad(sec)}:${pad(frame)}`);

      // Jitter audio visualizer
      setAudioLevels([
        Math.floor(Math.random() * 40 + 40),
        Math.floor(Math.random() * 50 + 45),
        Math.floor(Math.random() * 60 + 35),
        Math.floor(Math.random() * 70 + 25),
        Math.floor(Math.random() * 55 + 40),
        Math.floor(Math.random() * 65 + 30),
        Math.floor(Math.random() * 50 + 45),
        Math.floor(Math.random() * 45 + 50)
      ]);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-4xl mx-auto my-10">
      {/* Ambient 4K Cinema Glow behind monitor */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-75 pointer-events-none transition-all duration-500" />

      {/* Cinema Production Monitor Chassis */}
      <div className="relative rounded-3xl bg-neutral-950 border border-neutral-800/90 shadow-2xl p-3 sm:p-4 text-white overflow-hidden">
        
        {/* Top Monitor Bezel Header */}
        <div className="flex items-center justify-between px-3 py-2 text-[10px] font-mono tracking-wider border-b border-neutral-800/80 mb-3 text-neutral-400">
          <div className="flex items-center gap-3">
            {/* Blinking REC Status */}
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span>REC</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-300">
              <span className="text-white font-bold">SONY ZV-E10</span>
              <span className="text-neutral-600">•</span>
              <span className="text-cyan-400 font-bold">4K 60FPS</span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-emerald-400 hidden sm:inline">XAVC S 4K</span>
            </div>
          </div>

          {/* Timecode */}
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 font-bold tracking-widest bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
              TC {timecode}
            </span>

            {/* Grid toggle */}
            <button
              onClick={() => setShowGrid(!showGrid)}
              title="Alternar Grade de Enquadramento 4K"
              className={`p-1.5 rounded transition-colors ${showGrid ? 'bg-cyan-500 text-black' : 'bg-neutral-800 text-neutral-300 hover:text-white'}`}
            >
              <Grid3X3 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Video Display Screen */}
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-black border border-neutral-800">
          
          {/* Active 4K Overlay Grid Lines (Optional via state) */}
          {showGrid && (
            <div className="absolute inset-0 pointer-events-none z-20 grid grid-cols-3 grid-rows-3 border border-cyan-400/30">
              <div className="border-r border-b border-cyan-400/20" />
              <div className="border-r border-b border-cyan-400/20" />
              <div className="border-b border-cyan-400/20" />
              <div className="border-r border-b border-cyan-400/20" />
              <div className="border-r border-b border-cyan-400/20" />
              <div className="border-b border-cyan-400/20" />
              <div className="border-r border-cyan-400/20" />
              <div className="border-r border-cyan-400/20" />
              <div />
            </div>
          )}

          {/* Viewfinder Corner Framing Brackets */}
          <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white/60 pointer-events-none z-20" />
          <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white/60 pointer-events-none z-20" />
          <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white/60 pointer-events-none z-20" />
          <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white/60 pointer-events-none z-20" />

          {/* Central Target Reticle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 opacity-30">
            <div className="w-8 h-8 border border-white/80 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-white rounded-full" />
            </div>
          </div>

          {/* Actual YouTube Embed */}
          <iframe
            className="absolute inset-0 w-full h-full z-10"
            src={youtubeUrl}
            title={title}
            loading="lazy"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Bottom Monitor Dashboard Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-3 pt-3 mt-2 border-t border-neutral-800/80 text-[10px] font-mono text-neutral-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-neutral-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="font-bold text-white">SONY ZV-E10</span>
              <span className="text-neutral-500">•</span>
              <span className="text-cyan-400 font-semibold">4K 60FPS</span>
            </span>
            <span className="hidden sm:inline text-neutral-500">ISO 400 • 5600K • S-LOG</span>
          </div>

          {/* Stereo Audio Level Indicator (VU Meters) */}
          <div className="flex items-center gap-2">
            <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
            <div className="flex items-end gap-1 h-3.5 px-1 bg-neutral-900 rounded border border-neutral-800">
              {audioLevels.map((lvl, idx) => (
                <span
                  key={idx}
                  style={{ height: `${lvl}%` }}
                  className={`w-1 rounded-xs transition-all duration-100 ${lvl > 80 ? 'bg-rose-500' : lvl > 60 ? 'bg-amber-400' : 'bg-emerald-400'}`}
                />
              ))}
            </div>
            <span className="text-[9px] text-neutral-400 font-bold">24-BIT 48kHz</span>
          </div>
        </div>

      </div>

      {/* Subtitle Caption */}
      <div className="flex items-center justify-center gap-3 mt-3 text-xs text-neutral-400 font-mono">
        <span className="flex items-center gap-1 text-cyan-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>SONY ZV-E10 • 4K 60FPS</span>
        </span>
        <span>•</span>
        <span>PRODUÇÃO & QUALIDADE CINEMATOGRÁFICA</span>
      </div>
    </div>
  );
}

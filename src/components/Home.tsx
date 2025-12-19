import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface HomeProps {
  onEnter: () => void;
}

export function Home({ onEnter }: HomeProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#020403] text-slate-200 selection:bg-emerald-900/30">
      
      {/* Ambient Background - Velvety Black with Deep Emerald Undertones */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(6,78,59,0.1),transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-screen" />
        
        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020403_90%)]" />
      </div>

      {/* Floating Dust Motes - Extremely Subtle */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-emerald-100/10 rounded-full blur-[1px]"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [null, Math.random() * -50],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Cinematic Title Section */}
        <motion.div 
          className="text-center space-y-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 1}deg) rotateY(${mousePosition.x * 1}deg)`
          }}
        >
          {/* Logo Placeholder - Sophisticated Geometric Mark */}
          <div className="flex justify-center mb-12">
            <div className="relative w-20 h-20 md:w-24 md:h-24 opacity-80">
               {/* Place your logo image here if available */}
               <div className="absolute inset-0 border border-emerald-900/40 rotate-45 transform transition-transform duration-[3s] ease-in-out hover:rotate-90" />
               <div className="absolute inset-2 border border-slate-800/60 rotate-45" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-1 h-12 bg-gradient-to-b from-transparent via-emerald-900/50 to-transparent" />
                 <div className="absolute w-12 h-1 bg-gradient-to-r from-transparent via-emerald-900/50 to-transparent" />
               </div>
            </div>
          </div>

          <div className="relative space-y-[-1em] md:space-y-[-1.5em] flex flex-col items-center">
            <motion.h1 
              className="text-5xl md:text-8xl lg:text-[9rem] font-serif tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-[#e2e8f0] via-[#94a3b8] to-[#475569] drop-shadow-2xl relative z-10"
              style={{ textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              initial={{ opacity: 0, letterSpacing: '0.3em' }}
              animate={{ opacity: 1, letterSpacing: '0.2em' }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              MAISON
            </motion.h1>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-[7rem] font-serif tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-emerald-900/80 via-emerald-800/80 to-black relative z-0 mix-blend-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              FANTAISY
            </motion.h1>
            
            {/* Overlay for metallic sheen on second line */}
            <motion.div 
              className="absolute bottom-0 text-4xl md:text-6xl lg:text-[7rem] font-serif tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-b from-slate-500/50 via-slate-600/50 to-slate-800/50 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              FANTAISY
            </motion.div>
          </div>

          <motion.div 
            className="h-px w-32 bg-gradient-to-r from-transparent via-emerald-900 to-transparent mx-auto mt-12 opacity-50"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ duration: 1.5, delay: 1 }}
          />
        </motion.div>

        {/* Enter Interaction */}
        <motion.div
          className="mt-24 md:mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <button
            onClick={onEnter}
            className="group relative px-16 py-6 overflow-hidden focus:outline-none"
          >
            <span className="relative z-10 font-serif text-xs md:text-sm uppercase tracking-[0.4em] text-slate-500 group-hover:text-emerald-100 transition-colors duration-700">
              Enter
            </span>
            
            {/* Animated Borders */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-emerald-900/50 group-hover:w-full group-hover:bg-emerald-800/50 transition-all duration-700 ease-out" />
            
            {/* Subtle Glow */}
            <div className="absolute inset-0 bg-radial-gradient from-emerald-900/0 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-1000" />
          </button>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="absolute bottom-8 w-full text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <p className="text-[9px] uppercase tracking-[0.3em] text-slate-800">
            Sanctuary of Submission
          </p>
        </motion.div>

      </main>
    </div>
  );
}

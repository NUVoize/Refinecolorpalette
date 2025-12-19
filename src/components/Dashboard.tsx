import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Activity, List, Settings, ChevronRight, Star, Shield, LogOut } from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
}

export function Dashboard({ onBack }: DashboardProps) {
  return (
    <div className="min-h-screen bg-[#020403] text-slate-200 font-sans selection:bg-emerald-900/30 overflow-x-hidden">
      
      {/* Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-screen" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-md mx-auto min-h-screen flex flex-col p-6">
        
        {/* Header - Minimalist */}
        <header className="flex items-center justify-between py-6 mb-6 border-b border-white/5">
          <h1 className="font-serif text-lg tracking-[0.2em] text-emerald-500/80">
            MAISON <span className="text-slate-500">FANTAISY</span>
          </h1>
          <div className="flex items-center gap-6">
            <button className="text-slate-500 hover:text-white transition-colors group">
               <Settings className="w-5 h-5 stroke-[1px] group-hover:rotate-90 transition-transform duration-700" />
            </button>
            <button onClick={onBack} className="text-slate-500 hover:text-red-400 transition-colors">
               <LogOut className="w-5 h-5 stroke-[1px]" />
            </button>
          </div>
        </header>

        {/* Vertical Stack Layout */}
        <div className="flex-1 flex flex-col gap-4">

          {/* 1. Profile / Picture Section - Compact */}
          <section className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm" />
            <div className="relative border border-white/10 p-1 bg-[#050505]">
              <div className="h-48 w-full bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center">
                {/* Placeholder for User Image - High Fashion Style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.1),transparent)]" />
                <User className="w-12 h-12 text-emerald-900/30 stroke-[1px]" />
                
                {/* Name Overlay */}
                <div className="absolute bottom-4 left-4 z-20">
                  <p className="text-[9px] uppercase tracking-widest text-emerald-500/80 mb-0.5">Subject</p>
                  <h2 className="font-serif text-2xl text-white tracking-wide">ALEXANDRA</h2>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Experience / Level Box */}
          <section className="border border-white/10 bg-[#050505] p-5 relative overflow-hidden group hover:border-emerald-500/20 transition-colors duration-500">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <Shield className="w-16 h-16 text-emerald-800 stroke-[0.5px]" />
             </div>
             <div className="relative z-10">
               <div className="flex justify-between items-end mb-2">
                 <span className="text-[9px] uppercase tracking-[0.25em] text-slate-500">Current Rank</span>
                 <span className="font-serif text-xl text-emerald-100">Initiate</span>
               </div>
               <div className="h-[1px] w-full bg-slate-800/50 my-3" />
               <div className="flex justify-between text-[10px] text-slate-500 font-mono tracking-wider">
                 <span>EXP: 1,240</span>
                 <span>NEXT: 2,000</span>
               </div>
             </div>
          </section>

          {/* 3. Navigation Options */}
          <section className="py-2 space-y-2">
             <NavButton icon={<List />} label="Protocol Generator" sub="Assign new tasks" />
             <NavButton icon={<Activity />} label="Activity Log" sub="View history" />
             <NavButton icon={<Star />} label="Achievements" sub="Milestones reached" />
          </section>

          {/* 4. Today's Progress */}
          <section className="border-t border-white/5 pt-6 mt-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-serif text-base text-slate-300 tracking-wide">Today's Progress</h3>
              <span className="text-[10px] font-mono text-emerald-500">33%</span>
            </div>
            
            <div className="space-y-4">
              <ProgressBar label="Daily Tasks" current={1} total={3} />
              <ProgressBar label="Discipline Streak" current={7} total={10} />
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}

function NavButton({ icon, label, sub }: { icon: React.ReactNode, label: string, sub: string }) {
  return (
    <button className="w-full group flex items-center justify-between p-3.5 border border-white/5 bg-white/[0.02] hover:bg-emerald-900/10 hover:border-emerald-500/30 transition-all duration-500 active:scale-[0.99]">
      <div className="flex items-center gap-4">
        <div className="text-slate-600 group-hover:text-emerald-400 transition-colors duration-500 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-[1px]">
          {icon}
        </div>
        <div className="text-left">
          <div className="text-xs uppercase tracking-[0.15em] text-slate-300 group-hover:text-white transition-colors">{label}</div>
          <div className="text-[9px] text-slate-600 group-hover:text-slate-400 transition-colors mt-0.5">{sub}</div>
        </div>
      </div>
      <ChevronRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-emerald-500/50 transition-colors transform group-hover:translate-x-1 duration-500" />
    </button>
  );
}

function ProgressBar({ label, current, total }: { label: string, current: number, total: number }) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="group">
      <div className="flex justify-between mb-1.5 text-[9px] uppercase tracking-widest text-slate-600">
        <span>{label}</span>
        <span className="text-slate-500">{current} / {total}</span>
      </div>
      <div className="h-[1px] w-full bg-slate-800/50 overflow-hidden">
        <motion.div 
          className="h-full bg-emerald-600/80"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

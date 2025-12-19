import { useState } from 'react';
import { Dice6, Clock, Flame, Sparkles, ArrowLeft } from 'lucide-react';

interface TaskGeneratorProps {
  onBack: () => void;
}

const categories = [
  { id: 'all', name: 'All', icon: '✨' },
  { id: 'bondage', name: 'Bondage', icon: '🎀' },
  { id: 'impact', name: 'Impact', icon: '🎯' },
  { id: 'obedience', name: 'Obedience', icon: '🙇' },
  { id: 'puppy', name: 'Puppy', icon: '🐾' },
];

export function TaskGenerator({ onBack }: TaskGeneratorProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [duration, setDuration] = useState('medium');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showTask, setShowTask] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowTask(true);
    }, 2000);
  };

  if (isGenerating) {
    return <LoadingState />;
  }

  if (showTask) {
    return <TaskDisplay onBack={() => setShowTask(false)} onReturn={onBack} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-[rgb(10,10,10)] to-[rgb(20,20,20)]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-700/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-emerald-500/20 bg-[rgb(20,20,20)]/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-4 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-emerald-100 mb-2">Le Maison</h1>
                <p className="text-emerald-300/70">Your sanctuary awaits</p>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-purple-700/20 border border-purple-500/30 rounded-lg">
                <span className="text-3xl">🥀</span>
                <div>
                  <p className="font-semibold text-purple-200">Disciplined</p>
                  <p className="text-xs text-purple-300/60">Level 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Controls */}
            <div className="lg:col-span-2">
              <div className="bg-[rgb(26,26,26)]/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-8 relative">
                {/* Ornate corners */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-500/50 rounded-tl-2xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-emerald-500/50 rounded-tr-2xl pointer-events-none" />
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-br from-emerald-600/30 to-emerald-700/30 rounded-xl border border-emerald-500/30">
                    <Sparkles className="w-6 h-6 text-emerald-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-emerald-100">Your Next Experience</h2>
                    <p className="text-sm text-emerald-300/70">Customize your preferences</p>
                  </div>
                </div>

                {/* Category Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-emerald-300 mb-3">Category</label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-4 py-2 rounded-lg border-2 transition-all duration-300 flex items-center gap-2 ${
                          selectedCategory === cat.id
                            ? 'border-emerald-500 bg-emerald-500/20 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                            : 'border-emerald-500/20 bg-[rgb(20,20,20)]/50 text-emerald-400 hover:border-emerald-500/50'
                        }`}
                      >
                        <span>{cat.icon}</span>
                        <span className="text-sm font-medium">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-emerald-300 mb-3">Duration</label>
                  <div className="space-y-2">
                    {[
                      { id: 'quick', label: 'Quick', time: '10-20 min', icon: '⚡' },
                      { id: 'medium', label: 'Medium', time: '20-40 min', icon: '⏱️' },
                      { id: 'long', label: 'Long', time: '40+ min', icon: '🕐' }
                    ].map((dur) => (
                      <button
                        key={dur.id}
                        onClick={() => setDuration(dur.id)}
                        className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 flex items-center justify-between ${
                          duration === dur.id
                            ? 'border-emerald-500 bg-emerald-500/10 text-emerald-200'
                            : 'border-emerald-500/20 bg-[rgb(20,20,20)]/30 text-emerald-400 hover:border-emerald-500/40'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-xl">{dur.icon}</span>
                          <span className="font-medium">{dur.label}</span>
                        </span>
                        <span className="text-sm text-emerald-300/70">{dur.time}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={handleGenerate}
                  className="group relative w-full px-8 py-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center justify-center gap-3">
                    <Dice6 className="w-6 h-6" />
                    <span className="text-xl font-bold">Generate Task</span>
                    <Sparkles className="w-6 h-6" />
                  </div>
                </button>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6">
              {/* Today's Progress */}
              <div className="bg-[rgb(26,26,26)]/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-emerald-100 mb-4">Today's Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-emerald-300">Tasks Completed</span>
                      <span className="text-emerald-200 font-semibold">1 / 3</span>
                    </div>
                    <div className="h-2 bg-[rgb(20,20,20)] rounded-full overflow-hidden">
                      <div className="h-full w-1/3 bg-gradient-to-r from-emerald-500 to-emerald-600" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gradient-to-r from-orange-600/20 to-orange-700/20 border border-orange-500/30 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Flame className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-200 font-semibold">Streak</span>
                    </div>
                    <span className="text-xl font-bold text-orange-200">7 days</span>
                  </div>
                </div>
              </div>

              {/* Recent Tasks */}
              <div className="bg-[rgb(26,26,26)]/80 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-emerald-100 mb-4">Recent Tasks</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Nadu Position', time: 'Yesterday', icon: '🧘' },
                    { name: 'Puppy Training', time: '2 days ago', icon: '🐾' },
                    { name: 'Impact Challenge', time: '3 days ago', icon: '🎯' }
                  ].map((task, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-[rgb(20,20,20)]/50 rounded-lg border border-emerald-500/10">
                      <span className="text-2xl">{task.icon}</span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-emerald-200">{task.name}</p>
                        <p className="text-xs text-emerald-400/60">{task.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-[rgb(10,10,10)] to-[rgb(20,20,20)]">
      <div className="text-center space-y-8 max-w-md px-6">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/30 blur-3xl rounded-full animate-pulse" />
          <Sparkles className="w-16 h-16 text-emerald-400 mx-auto relative" style={{ animation: 'spin 3s linear infinite' }} />
        </div>
        
        <h2 className="text-3xl font-bold text-emerald-100">Preparing Your Room...</h2>
        
        <div className="space-y-3">
          {[
            'Checking safety...',
            'Building task pool...',
            'Analyzing history...',
            'Selecting task...',
            'Finalizing...'
          ].map((step, idx) => (
            <div key={idx} className="flex items-center gap-3 text-left">
              <div className="w-5 h-5 rounded-full border-2 border-emerald-500 bg-emerald-500 flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
              <span className="text-sm text-emerald-300">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TaskDisplay({ onBack, onReturn }: { onBack: () => void; onReturn: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-[rgb(10,10,10)] to-[rgb(20,20,20)] py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[rgb(26,26,26)]/90 backdrop-blur-xl border-2 border-emerald-500/40 rounded-2xl p-8 relative">
          {/* Decorative corners */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-emerald-400/60 rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-emerald-400/60 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-emerald-400/60 rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-emerald-400/60 rounded-br-2xl pointer-events-none" />

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-emerald-100 mb-3">Disciplined Obedience Training</h2>
            <div className="flex items-center justify-center gap-4 text-sm text-emerald-300/80">
              <span className="flex items-center gap-1">
                <span>🏷️</span> Obedience
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                17 min
              </span>
              <span>•</span>
              <span>⭐⭐⭐⭐</span>
            </div>
          </div>

          {/* Safety Check */}
          <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
            <h3 className="font-semibold text-emerald-200 mb-2 flex items-center gap-2">
              <span className="text-lg">✅</span> Safety Check
            </h3>
            <ul className="text-sm text-emerald-300/80 space-y-1">
              <li>✓ All hard limits respected</li>
              <li>✓ Solo-safe activities only</li>
            </ul>
          </div>

          {/* Task Steps */}
          <div className="mb-8">
            <h3 className="font-semibold text-emerald-200 mb-4">Task Overview (5 steps)</h3>
            <div className="space-y-3">
              {[
                { icon: '⏱️', title: 'Nadu Position', time: '5 min' },
                { icon: '🎲', title: 'Dice Roll', time: '1 min' },
                { icon: '⏱️', title: 'Impact Training', time: '2 min' },
                { icon: '⏱️', title: 'Rest Period', time: '1 min' },
                { icon: '📷', title: 'Offering Position', time: '4 min' }
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-[rgb(20,20,20)]/30 rounded-lg border border-emerald-500/10">
                  <span className="text-2xl">{step.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-emerald-200">{idx + 1}. {step.title}</span>
                      <span className="text-xs text-emerald-400/60">{step.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button className="w-full group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2">
                <span className="text-lg font-bold">🎭 Enter Play Room</span>
              </div>
            </button>

            <div className="flex gap-3">
              <button
                onClick={onBack}
                className="flex-1 px-6 py-3 bg-transparent border-2 border-emerald-500/30 text-emerald-300 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all"
              >
                🔄 New Task
              </button>
              <button
                onClick={onReturn}
                className="flex-1 px-6 py-3 bg-transparent border-2 border-emerald-500/30 text-emerald-300 rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all"
              >
                ← Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

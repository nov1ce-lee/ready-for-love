import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cards } from '../data/cards';
import type { CardData, CardType } from '../types';
import { TarotCard } from './TarotCard';
import { Sparkles, RefreshCw, Settings, X, RotateCcw } from 'lucide-react';
import clsx from 'clsx';
import { useSound } from '../utils/audio';

type Intensity = 'all' | 'gentle' | 'intense';

export const FlowGenerator = () => {
  const [selectedCards, setSelectedCards] = useState<CardData[]>([]);
  const [revealedIndices, setRevealedIndices] = useState<number[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [intensity, setIntensity] = useState<Intensity>('all');
  const [avoidRepeats, setAvoidRepeats] = useState(true);
  const [drawnHistory, setDrawnHistory] = useState<string[]>(() => {
    const saved = localStorage.getItem('drawnHistory');
    return saved ? JSON.parse(saved) : [];
  });

  // Audio
  const { playSound } = useSound();

  useEffect(() => {
    localStorage.setItem('drawnHistory', JSON.stringify(drawnHistory));
  }, [drawnHistory]);

  const clearHistory = () => {
    setDrawnHistory([]);
    localStorage.removeItem('drawnHistory');
    playSound('flip');
  };

  const generateFlow = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setSelectedCards([]);
    setRevealedIndices([]);
    playSound('draw');
    // Close settings if open
    setShowSettings(false);

    // Simulate shuffling/thinking time
    setTimeout(() => {
      const newFlow: CardData[] = [];
      const tempDrawn = new Set(avoidRepeats ? drawnHistory : []);

      // Helper to get random card by type
      const getCard = (types: CardType[], filterIntensity?: boolean) => {
        let candidates = cards.filter(c => types.includes(c.type));

        // Filter by intensity (difficulty)
        if (filterIntensity) {
          if (intensity === 'gentle') {
            // Difficulty 1-2
            candidates = candidates.filter(c => !c.difficulty || c.difficulty <= 2);
          } else if (intensity === 'intense') {
            // Difficulty 3-5
            candidates = candidates.filter(c => !c.difficulty || c.difficulty >= 3);
          }
        }

        // Filter by history (Avoid Repeats)
        if (avoidRepeats) {
          const available = candidates.filter(c => !tempDrawn.has(c.id));
          // If all candidates are used, fallback to all candidates (reset for this type effectively)
          if (available.length > 0) {
            candidates = available;
          }
        }

        if (candidates.length === 0) return null; // Should not happen ideally

        const chosen = candidates[Math.floor(Math.random() * candidates.length)];
        tempDrawn.add(chosen.id);
        return chosen;
      };

      // 1. Warm-up (Knowledge or Foreplay)
      const card1 = getCard(['knowledge', 'foreplay'], false); // Warmup usually gentle anyway
      if (card1) newFlow.push(card1);
      
      // 2. Main Event (Position) - Apply Intensity Filter
      const card2 = getCard(['position'], true);
      if (card2) newFlow.push(card2);
      
      // 3. Spice/Aftercare (Interaction or Tip or Foreplay) - Apply Intensity Filter partially (interaction can be intense)
      // For interactions, let's say intense mode prefers "Knot" or "Flame" style interactions if we tagged them, 
      // but currently interactions don't have difficulty. We can treat them as neutral or just random.
      const card3 = getCard(['interaction', 'tip'], false); 
      if (card3) newFlow.push(card3);

      setSelectedCards(newFlow);
      
      // Update History
      if (avoidRepeats) {
        setDrawnHistory(Array.from(tempDrawn));
      }

      setIsGenerating(false);
    }, 800);
  };

  const handleCardClick = (index: number) => {
    if (!revealedIndices.includes(index)) {
      setRevealedIndices(prev => [...prev, index]);
      playSound('reveal'); // 播放揭示音效
    }
  };

  const revealAll = () => {
    setRevealedIndices(selectedCards.map((_, i) => i));
    playSound('reveal');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-4 min-h-[80vh] relative">
      
      {/* Settings Toggle */}
      <div className="absolute top-0 right-4 z-20">
        <button 
          onClick={() => setShowSettings(!showSettings)}
          className="p-2 text-tarot-gold/50 hover:text-tarot-gold transition-colors"
        >
          {showSettings ? <X /> : <Settings />}
        </button>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="w-full max-w-md bg-tarot-card/90 backdrop-blur border border-tarot-gold/30 rounded-xl p-6 mb-8 overflow-hidden"
          >
            <h3 className="text-tarot-gold font-serif text-lg mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4" /> 偏好设置
            </h3>
            
            <div className="space-y-6">
              {/* Intensity */}
              <div>
                <label className="text-xs text-tarot-purple uppercase tracking-widest mb-2 block">强度选择</label>
                <div className="flex gap-2">
                  {(['all', 'gentle', 'intense'] as const).map((mode) => (
                    <button
                      key={mode}
                      onClick={() => setIntensity(mode)}
                      className={clsx(
                        "flex-1 py-2 px-3 rounded-lg text-sm transition-all border",
                        intensity === mode 
                          ? "bg-tarot-gold text-tarot-bg border-tarot-gold font-bold" 
                          : "bg-tarot-dark/50 text-tarot-text border-tarot-gold/20 hover:border-tarot-gold/50"
                      )}
                    >
                      {mode === 'all' ? '随机' : mode === 'gentle' ? '温和 (Lv1-2)' : '激情 (Lv3-5)'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Repeats */}
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs text-tarot-purple uppercase tracking-widest block">避免重复</label>
                  <p className="text-xs text-tarot-text/60">优先抽取未见过的卡牌</p>
                </div>
                <button
                  onClick={() => setAvoidRepeats(!avoidRepeats)}
                  className={clsx(
                    "w-12 h-6 rounded-full transition-colors relative",
                    avoidRepeats ? "bg-tarot-gold" : "bg-tarot-dark border border-tarot-text/20"
                  )}
                >
                  <div className={clsx(
                    "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                    avoidRepeats ? "left-7" : "left-1"
                  )} />
                </button>
              </div>

              {/* History Actions */}
              <div className="pt-4 border-t border-tarot-gold/10">
                 <button 
                   onClick={clearHistory}
                   className="text-xs text-tarot-text/40 hover:text-red-400 flex items-center gap-1 transition-colors"
                 >
                   <RotateCcw className="w-3 h-3" /> 清除 {drawnHistory.length} 张已读卡牌记录
                 </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Controls */}
      <div className="mb-12 text-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={generateFlow}
          disabled={isGenerating}
          className="group relative px-8 py-4 bg-tarot-card border border-tarot-gold text-tarot-gold font-serif text-xl rounded-full shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            {isGenerating ? (
              <RefreshCw className="animate-spin w-5 h-5" />
            ) : (
              <Sparkles className="w-5 h-5" />
            )}
            {selectedCards.length === 0 ? "抽取今日灵感" : "重新洗牌"}
          </span>
          <div className="absolute inset-0 bg-tarot-gold/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
        </motion.button>
        
        {selectedCards.length > 0 && !isGenerating && (
           <p className="mt-4 text-tarot-text/60 text-sm animate-fade-in">
             点击卡牌揭示命运，或 <button onClick={revealAll} className="underline text-tarot-gold hover:text-white">全部翻开</button>
           </p>
        )}
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full place-items-center perspective-1000">
        <AnimatePresence mode='wait'>
          {selectedCards.map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`} // Ensure uniqueness for re-renders
              initial={{ opacity: 0, y: 50, rotateX: 30 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex flex-col items-center gap-4">
                <span className="text-tarot-gold/50 font-serif text-lg tracking-widest uppercase">
                  {index === 0 ? "Step I: 启" : index === 1 ? "Step II: 承" : "Step III: 合"}
                </span>
                <TarotCard 
                  data={card} 
                  isRevealed={revealedIndices.includes(index)} 
                  onClick={() => handleCardClick(index)}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {selectedCards.length === 0 && !isGenerating && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-center text-tarot-text/30 italic font-serif mt-10"
        >
          <div className="w-32 h-48 border-2 border-dashed border-tarot-gold/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">?</span>
          </div>
          命运之轮等待转动...
        </motion.div>
      )}
    </div>
  );
};

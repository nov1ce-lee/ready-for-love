import { motion } from 'framer-motion';
import type { CardData } from '../types';
import { CardBack, CardBorder } from './illustrations/Illustrations';
import clsx from 'clsx';

interface TarotCardProps {
  data: CardData;
  isRevealed: boolean;
  onClick?: () => void;
  className?: string;
}

export const TarotCard = ({ data, isRevealed, onClick, className }: TarotCardProps) => {
  return (
    <div 
      className={clsx("relative w-64 h-96 cursor-pointer perspective-1000 group", className)}
      onClick={onClick}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        initial={false}
        animate={{ rotateY: isRevealed ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Card Back (Face Down) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-tarot-card rounded-xl shadow-2xl overflow-hidden flex items-center justify-center border border-tarot-goldDim/30"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay pointer-events-none" />
          
          <div className="p-2 w-full h-full">
            <CardBack />
          </div>
        </div>

        {/* Card Front (Face Up) */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden bg-tarot-card rounded-xl shadow-2xl overflow-hidden flex flex-col relative"
          style={{ 
            backfaceVisibility: "hidden", 
            transform: "rotateY(180deg)" 
          }}
        >
          {/* Noise Texture Overlay */}
          <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none z-0" />
          
          {/* SVG Border Frame */}
          <CardBorder />

          {/* Content Container (with padding to fit inside border) */}
          <div className="w-full h-full flex flex-col z-10 p-6">
            
            {/* Illustration Area */}
            <div className="flex-1 flex items-center justify-center border-b border-tarot-goldDim/30 mb-2 pb-2 relative">
               {/* Subtle glow behind illustration */}
               <div className="absolute inset-0 bg-tarot-gold/5 blur-xl rounded-full transform scale-75" />
               <div className="w-32 h-32 text-tarot-gold relative z-10 drop-shadow-[0_0_10px_rgba(197,160,89,0.3)]">
                 {data.illustration}
               </div>
            </div>

            {/* Text Area */}
            <div className="h-1/2 flex flex-col items-center text-center overflow-y-auto custom-scrollbar pr-1">
              <h3 className="text-xl font-bold mb-1 text-tarot-text font-serif tracking-widest drop-shadow-sm">{data.title}</h3>
              <span className="text-[10px] uppercase tracking-[0.2em] text-tarot-goldDim mb-2 border-b border-tarot-goldDim/20 pb-1 w-1/2">{data.type}</span>
              <p className="text-sm text-tarot-text/80 mb-3 italic font-body leading-relaxed">"{data.description}"</p>
              
              <div className="mt-auto w-full pt-2 border-t border-tarot-goldDim/20">
                 <p className="text-xs text-left text-tarot-text/70 leading-relaxed font-sans">
                   {data.content}
                 </p>
                 {data.tips && (
                   <p className="mt-2 text-xs text-left text-tarot-gold/80 italic font-body">
                     ⚠️ {data.tips}
                   </p>
                 )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

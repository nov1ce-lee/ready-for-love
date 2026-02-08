const StrokeProps = {
  stroke: "#C5A059", // tarot-gold (updated to antique gold)
  strokeWidth: "1.5",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none"
};

export const CardBorder = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 256 384" preserveAspectRatio="none">
    <defs>
      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#8A6D3B" strokeWidth="0.5" opacity="0.1"/>
      </pattern>
    </defs>
    
    {/* Main Border */}
    <rect x="8" y="8" width="240" height="368" rx="2" stroke="#C5A059" strokeWidth="2" fill="none" />
    <rect x="12" y="12" width="232" height="360" stroke="#8A6D3B" strokeWidth="1" strokeDasharray="1 2" fill="none" />

    {/* Decorative Corners - Alchemy feel */}
    <g transform="translate(8, 8)">
        <path d="M0 32 L0 0 L32 0" stroke="#C5A059" strokeWidth="3" fill="none" />
        <path d="M4 32 L4 4 L32 4" stroke="#8A6D3B" strokeWidth="1" fill="none" />
        <circle cx="0" cy="0" r="3" fill="#C5A059" />
    </g>
    <g transform="translate(248, 8) rotate(90)">
        <path d="M0 32 L0 0 L32 0" stroke="#C5A059" strokeWidth="3" fill="none" />
        <path d="M4 32 L4 4 L32 4" stroke="#8A6D3B" strokeWidth="1" fill="none" />
        <circle cx="0" cy="0" r="3" fill="#C5A059" />
    </g>
    <g transform="translate(248, 376) rotate(180)">
        <path d="M0 32 L0 0 L32 0" stroke="#C5A059" strokeWidth="3" fill="none" />
        <path d="M4 32 L4 4 L32 4" stroke="#8A6D3B" strokeWidth="1" fill="none" />
        <circle cx="0" cy="0" r="3" fill="#C5A059" />
    </g>
    <g transform="translate(8, 376) rotate(270)">
        <path d="M0 32 L0 0 L32 0" stroke="#C5A059" strokeWidth="3" fill="none" />
        <path d="M4 32 L4 4 L32 4" stroke="#8A6D3B" strokeWidth="1" fill="none" />
        <circle cx="0" cy="0" r="3" fill="#C5A059" />
    </g>

    {/* Top/Bottom Mid Symbols */}
    <g transform="translate(128, 8)">
      <circle r="4" fill="#1A1A1D" stroke="#C5A059" strokeWidth="1" />
      <path d="M-8 0 L-4 0 M4 0 L8 0" stroke="#8A6D3B" strokeWidth="1" />
    </g>
    <g transform="translate(128, 376)">
      <circle r="4" fill="#1A1A1D" stroke="#C5A059" strokeWidth="1" />
      <path d="M-8 0 L-4 0 M4 0 L8 0" stroke="#8A6D3B" strokeWidth="1" />
    </g>
  </svg>
);

export const CardBack = () => (
  <svg viewBox="0 0 200 300" className="w-full h-full bg-tarot-card">
    {/* Outer Border */}
    <rect x="10" y="10" width="180" height="280" rx="4" stroke="#8A6D3B" strokeWidth="2" fill="none" />
    <rect x="15" y="15" width="170" height="270" stroke="#8A6D3B" strokeWidth="1" strokeDasharray="4 2" fill="none" />
    
    {/* Center Geometry */}
    <g transform="translate(100, 150)">
      <circle r="60" stroke="#C5A059" strokeWidth="1.5" fill="none" />
      <circle r="52" stroke="#8A6D3B" strokeWidth="0.5" fill="none" />
      <circle r="45" stroke="#8A6D3B" strokeWidth="1" fill="none" />
      
      {/* Hexagram */}
      <path d="M0 -60 L52 30 L-52 30 Z" stroke="#C5A059" strokeWidth="1" fill="none" opacity="0.6" />
      <path d="M0 60 L-52 -30 L52 -30 Z" stroke="#C5A059" strokeWidth="1" fill="none" opacity="0.6" />
      
      {/* Inner Eye/Sun */}
      <circle r="12" stroke="#C5A059" strokeWidth="2" fill="#1A1A1D" />
      <circle r="4" fill="#C5A059" />
      
      {/* Rays */}
      <path d="M0 -70 L0 -80" stroke="#C5A059" strokeWidth="2" />
      <path d="M0 70 L0 80" stroke="#C5A059" strokeWidth="2" />
      <path d="M-70 0 L-80 0" stroke="#C5A059" strokeWidth="2" />
      <path d="M70 0 L80 0" stroke="#C5A059" strokeWidth="2" />
    </g>

    {/* Corners */}
    <path d="M20 20 L40 20 M20 20 L20 40" stroke="#C5A059" strokeWidth="2" fill="none" />
    <path d="M180 20 L160 20 M180 20 L180 40" stroke="#C5A059" strokeWidth="2" fill="none" />
    <path d="M20 280 L40 280 M20 280 L20 260" stroke="#C5A059" strokeWidth="2" fill="none" />
    <path d="M180 280 L160 280 M180 280 L180 260" stroke="#C5A059" strokeWidth="2" fill="none" />
  </svg>
);

export const ForeplayIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    <path d="M50 30 Q70 10 90 30 T50 70 T10 30 T50 30" {...StrokeProps} />
    <path d="M30 50 Q50 60 70 50" {...StrokeProps} strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="40" {...StrokeProps} strokeWidth="1" opacity="0.5" />
  </svg>
);

export const MissionaryIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Abstract representation: Bottom partner */}
    <circle cx="50" cy="70" r="10" {...StrokeProps} />
    <path d="M30 80 Q50 90 70 80" {...StrokeProps} />
    {/* Top partner */}
    <circle cx="50" cy="30" r="10" {...StrokeProps} />
    <path d="M30 40 Q50 50 70 40" {...StrokeProps} />
    {/* Connection */}
    <path d="M50 40 L50 60" {...StrokeProps} strokeDasharray="4 2" />
  </svg>
);

export const DoggyIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Abstract: Partner 1 (kneeling) */}
    <path d="M20 70 L40 50 L60 70" {...StrokeProps} />
    <circle cx="40" cy="40" r="8" {...StrokeProps} />
    {/* Partner 2 (behind) */}
    <path d="M50 70 L60 50 L80 70" {...StrokeProps} />
    <circle cx="60" cy="40" r="8" {...StrokeProps} />
  </svg>
);

export const CowgirlIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Bottom partner */}
    <line x1="30" y1="80" x2="70" y2="80" {...StrokeProps} />
    <circle cx="20" cy="80" r="8" {...StrokeProps} />
    {/* Top partner (sitting) */}
    <path d="M40 50 L50 30 L60 50" {...StrokeProps} />
    <circle cx="50" cy="20" r="8" {...StrokeProps} />
    <path d="M40 50 L30 70 M60 50 L70 70" {...StrokeProps} />
  </svg>
);

export const InteractionIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Dice */}
    <rect x="30" y="30" width="40" height="40" rx="5" {...StrokeProps} />
    <circle cx="40" cy="40" r="2" fill="#d4af37" />
    <circle cx="60" cy="60" r="2" fill="#d4af37" />
    <circle cx="50" cy="50" r="2" fill="#d4af37" />
  </svg>
);

export const ReverseCowgirlIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Bottom partner */}
    <line x1="20" y1="80" x2="80" y2="80" {...StrokeProps} />
    {/* Top partner (facing away) */}
    <path d="M40 50 L50 30 L60 50" {...StrokeProps} />
    <circle cx="50" cy="20" r="8" {...StrokeProps} />
    {/* Legs straddling */}
    <path d="M35 50 L30 70 M65 50 L70 70" {...StrokeProps} />
    {/* Back curve indicating facing away */}
    <path d="M45 35 Q40 45 45 55" {...StrokeProps} opacity="0.6" />
  </svg>
);

export const ButterflyIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Bottom partner (lying down) */}
    <circle cx="50" cy="70" r="10" {...StrokeProps} />
    <path d="M30 80 Q50 90 70 80" {...StrokeProps} />
    {/* Legs up */}
    <path d="M20 70 Q10 40 30 20" {...StrokeProps} />
    <path d="M80 70 Q90 40 70 20" {...StrokeProps} />
    {/* Top partner (kneeling/standing) */}
    <path d="M40 50 L50 30 L60 50" {...StrokeProps} />
  </svg>
);

export const StandingOIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Standing partner */}
    <line x1="40" y1="20" x2="40" y2="90" {...StrokeProps} />
    <circle cx="40" cy="15" r="8" {...StrokeProps} />
    {/* Partner being held/leg up */}
    <path d="M60 30 Q50 40 40 50" {...StrokeProps} />
    <path d="M60 30 L60 70" {...StrokeProps} />
    <path d="M60 70 L50 50" {...StrokeProps} /> {/* Leg hooked */}
    <circle cx="65" cy="25" r="8" {...StrokeProps} />
  </svg>
);

export const PretzelIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Intertwined bodies abstract */}
    <path d="M30 30 Q50 50 70 70" {...StrokeProps} />
    <path d="M70 30 Q50 50 30 70" {...StrokeProps} />
    <circle cx="30" cy="30" r="5" {...StrokeProps} />
    <circle cx="70" cy="70" r="5" {...StrokeProps} />
    {/* Connecting curves */}
    <path d="M30 70 Q50 90 70 70" {...StrokeProps} strokeDasharray="2 2" />
    <path d="M70 30 Q50 10 30 30" {...StrokeProps} strokeDasharray="2 2" />
  </svg>
);

export const SixtyNineIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Abstract 69 */}
    <path d="M40 40 A15 15 0 1 1 55 55 L35 75" {...StrokeProps} />
    <path d="M60 60 A15 15 0 1 1 45 45 L65 25" {...StrokeProps} />
    <circle cx="40" cy="40" r="3" fill="#d4af37" />
    <circle cx="60" cy="60" r="3" fill="#d4af37" />
  </svg>
);

export const KnowledgeIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Open Book */}
    <path d="M20 50 Q35 50 50 40 Q65 50 80 50" {...StrokeProps} />
    <path d="M20 50 L20 70 Q35 70 50 60 Q65 70 80 70 L80 50" {...StrokeProps} />
    <line x1="50" y1="40" x2="50" y2="60" {...StrokeProps} />
  </svg>
);

export const LotusIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Lotus Flower Abstract */}
    <path d="M50 80 Q30 80 20 60 Q20 40 50 20 Q80 40 80 60 Q70 80 50 80" {...StrokeProps} />
    <path d="M50 80 Q40 60 50 40 Q60 60 50 80" {...StrokeProps} />
    <path d="M30 65 Q40 50 50 40" {...StrokeProps} />
    <path d="M70 65 Q60 50 50 40" {...StrokeProps} />
  </svg>
);

export const FlameIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Flame */}
    <path d="M50 85 Q30 80 30 55 Q30 35 50 15 Q70 35 70 55 Q70 80 50 85" {...StrokeProps} />
    <path d="M50 85 Q45 70 50 55" {...StrokeProps} />
    <path d="M40 55 Q40 40 50 30" {...StrokeProps} />
  </svg>
);

export const FeatherIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Feather */}
    <path d="M50 15 Q80 30 80 60 Q80 90 50 85" {...StrokeProps} />
    <path d="M50 15 Q20 30 20 60 Q20 90 50 85" {...StrokeProps} />
    <line x1="50" y1="15" x2="50" y2="85" {...StrokeProps} />
    <path d="M50 30 L70 40 M50 50 L70 60 M50 70 L65 75" {...StrokeProps} />
    <path d="M50 30 L30 40 M50 50 L30 60 M50 70 L35 75" {...StrokeProps} />
  </svg>
);

export const MoonIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Crescent Moon */}
    <path d="M60 20 A30 30 0 1 1 60 80 A20 20 0 1 0 60 20" {...StrokeProps} />
    {/* Stars */}
    <path d="M30 40 L32 38 L34 40 L32 42 Z" fill="#d4af37" />
    <path d="M75 35 L77 33 L79 35 L77 37 Z" fill="#d4af37" />
  </svg>
);

export const KnotIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Infinity Knot */}
    <path d="M30 40 Q20 50 30 60 L70 40 Q80 30 70 20 Q60 10 50 30 L50 70 Q40 90 30 80 Q20 70 30 60 L70 40" {...StrokeProps} />
  </svg>
);

export const SpoonIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Spoons */}
    <path d="M30 50 Q30 30 50 30 Q70 30 70 50 L70 80 Q70 90 50 90 Q30 90 30 80 Z" {...StrokeProps} />
    <path d="M40 50 Q40 40 50 40 Q60 40 60 50 L60 70 Q60 75 50 75 Q40 75 40 70 Z" {...StrokeProps} />
  </svg>
);

export const HuggingIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Abstract Embrace */}
    <path d="M30 50 Q30 30 50 30 Q70 30 70 50" {...StrokeProps} />
    <path d="M30 50 Q30 80 50 80 Q70 80 70 50" {...StrokeProps} />
    <circle cx="40" cy="40" r="8" {...StrokeProps} />
    <circle cx="60" cy="40" r="8" {...StrokeProps} />
    <path d="M20 50 Q50 60 80 50" {...StrokeProps} strokeDasharray="2 2" />
  </svg>
);

export const HandsIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Holding Hands Abstract */}
    <path d="M30 60 Q40 40 50 50" {...StrokeProps} />
    <path d="M70 60 Q60 40 50 50" {...StrokeProps} />
    <circle cx="50" cy="50" r="10" {...StrokeProps} strokeDasharray="2 2" />
    <path d="M45 50 L55 50" {...StrokeProps} />
    <path d="M50 45 L50 55" {...StrokeProps} />
  </svg>
);

export const BridgeIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Bridge Arch */}
    <path d="M20 80 Q50 20 80 80" {...StrokeProps} />
    <line x1="20" y1="80" x2="80" y2="80" {...StrokeProps} strokeDasharray="2 2" />
    <circle cx="50" cy="50" r="8" {...StrokeProps} />
  </svg>
);

export const ChairIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Chair Abstract */}
    <path d="M30 80 L30 50 L70 50 L70 80" {...StrokeProps} />
    <path d="M30 50 L30 20" {...StrokeProps} />
    <path d="M30 40 L70 40" {...StrokeProps} />
    <circle cx="50" cy="30" r="8" {...StrokeProps} />
  </svg>
);

export const TShapeIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Perpendicular Lines */}
    <line x1="50" y1="20" x2="50" y2="80" {...StrokeProps} />
    <line x1="20" y1="50" x2="80" y2="50" {...StrokeProps} />
    <circle cx="50" cy="50" r="5" {...StrokeProps} />
    <circle cx="50" cy="20" r="5" {...StrokeProps} />
    <circle cx="80" cy="50" r="5" {...StrokeProps} />
  </svg>
);

export const MusicIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Musical Note */}
    <path d="M40 70 A10 10 0 1 1 60 70 L60 20 L80 30" {...StrokeProps} />
    <circle cx="50" cy="70" r="5" fill="#d4af37" />
    <path d="M20 40 Q30 30 40 40" {...StrokeProps} opacity="0.5" />
    <path d="M70 50 Q80 40 90 50" {...StrokeProps} opacity="0.5" />
  </svg>
);

export const CandleIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full p-4">
    {/* Candle */}
    <rect x="35" y="40" width="30" height="50" {...StrokeProps} />
    <path d="M50 40 L50 30" {...StrokeProps} />
    <path d="M50 30 Q55 20 50 10 Q45 20 50 30" {...StrokeProps} fill="#d4af37" opacity="0.8" />
    <path d="M30 80 L70 80" {...StrokeProps} strokeDasharray="2 2" />
  </svg>
);

import { FlowGenerator } from './components/FlowGenerator';

function App() {
  return (
    <div className="min-h-screen w-full bg-tarot-bg text-tarot-text flex flex-col">
      {/* Header */}
      <header className="w-full py-8 text-center border-b border-tarot-gold/20 bg-gradient-to-b from-tarot-dark/90 to-tarot-bg/60 backdrop-blur-sm sticky top-0 z-50">
        <h1 className="text-4xl md:text-5xl font-serif text-tarot-gold mb-2 tracking-[0.35em] drop-shadow-[0_0_18px_rgba(197,160,89,0.6)] uppercase">
          Love Tarot
        </h1>
        <p className="text-xs md:text-sm text-tarot-text/80 italic font-body tracking-[0.25em] uppercase">
          探索亲密关系的神秘指引
        </p>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center py-10 px-4">
        <FlowGenerator />
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-tarot-text/30 text-xs border-t border-tarot-gold/10">
        <p>© 2026 Love Tarot. 仅供成人健康教育与娱乐使用。</p>
      </footer>
    </div>
  );
}

export default App;

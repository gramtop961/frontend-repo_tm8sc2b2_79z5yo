import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-slate-950/60 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between text-white">
        <a href="#" className="inline-flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-fuchsia-500/20 text-fuchsia-300">
            <Rocket className="h-4 w-4" />
          </span>
          GameWeb
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#cta" className="text-slate-300 hover:text-white transition">Get Started</a>
          <a href="https://spline.design/" target="_blank" className="text-slate-300 hover:text-white transition" rel="noreferrer">Spline</a>
        </div>
      </nav>
    </header>
  );
}

import { Gamepad2, Cpu, Sparkles, Globe } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Controller‑First',
    desc: 'Built around tactile interactions and smooth, responsive movement.',
  },
  {
    icon: Cpu,
    title: 'Optimized Performance',
    desc: 'GPU‑accelerated rendering with efficient scene composition.',
  },
  {
    icon: Sparkles,
    title: 'Cinematic Effects',
    desc: 'Glows, depth, and gradients crafted for a next‑gen vibe.',
  },
  {
    icon: Globe,
    title: 'Web Native',
    desc: 'Runs anywhere—no installs required. Just open and play.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="bg-slate-950 text-slate-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Powering your next game experience</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">A focused stack for building interactive 3D worlds and gameplay mechanics that feel great.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

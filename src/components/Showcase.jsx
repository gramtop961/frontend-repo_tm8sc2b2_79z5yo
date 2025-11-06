import { useState } from 'react';

const demos = [
  {
    title: 'Retro Neon UI',
    media: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
    tag: 'UI',
  },
  {
    title: 'Voxel World',
    media: 'https://images.unsplash.com/photo-1611843159119-1d7f6f0c013e?q=80&w=1200&auto=format&fit=crop',
    tag: 'World',
  },
  {
    title: 'HUD & Particles',
    media: 'https://images.unsplash.com/photo-1557264337-e8a93017fe92?q=80&w=1200&auto=format&fit=crop',
    tag: 'FX',
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-950 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Playable concepts</h2>
            <p className="mt-3 text-slate-300 max-w-xl">A rotating set of visual ideas you can remix into your own game worlds.</p>
          </div>
          <div className="hidden sm:flex gap-2">
            {demos.map((d, i) => (
              <button
                key={d.title}
                onClick={() => setActive(i)}
                className={`px-3 py-1.5 rounded-full text-sm border transition ${
                  active === i ? 'bg-fuchsia-500 text-white border-fuchsia-500' : 'border-white/20 text-slate-300 hover:bg-white/10'
                }`}
              >
                {d.tag}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {demos.map((d, i) => (
            <button
              key={d.title}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border ${
                active === i ? 'border-fuchsia-500' : 'border-white/10'
              }`}
            >
              <img src={d.media} alt="demo" className="h-64 w-full object-cover transition group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                <h3 className="font-semibold">{d.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full border ${
                  active === i ? 'border-fuchsia-400 text-fuchsia-300' : 'border-white/20 text-slate-300'
                }`}>{d.tag}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

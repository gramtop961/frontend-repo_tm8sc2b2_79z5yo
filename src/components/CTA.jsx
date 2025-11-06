export default function CTA() {
  return (
    <section id="cta" className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Build your game presence</h2>
        <p className="mt-3 text-slate-300">Kickstart a stunning landing page for your game, studio, or 3D concept. Plug in assets, tweak copy, ship.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-fuchsia-500 px-6 py-3 font-semibold shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-600 transition">Launch Demo</a>
          <a href="#" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 font-semibold backdrop-blur ring-1 ring-white/20 hover:bg-white/20 transition">View Docs</a>
        </div>
        <p className="mt-5 text-xs text-slate-400">No signup required • Open source starter • Works anywhere</p>
      </div>
    </section>
  );
}

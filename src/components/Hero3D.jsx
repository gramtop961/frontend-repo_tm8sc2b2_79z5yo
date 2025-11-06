import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative w-full h-[85vh] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/nnNYb3ZFbRxKghMM/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient + glow overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-slate-900/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-950/80 to-transparent" />
        <div className="absolute -inset-24 rounded-[50%] opacity-30 blur-3xl bg-fuchsia-500/10" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="pointer-events-none select-none">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-md">
            Play With Dimensions
          </h1>
          <p className="mt-4 max-w-2xl text-slate-200/90 text-lg md:text-xl">
            An interactive gaming showcase built with immersive 3D, silky animations, and next‑gen web tech.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#features"
            className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-fuchsia-500 px-5 py-3 text-white font-semibold shadow-lg shadow-fuchsia-500/30 hover:bg-fuchsia-600 transition"
          >
            Explore Features
          </a>
          <a
            href="#cta"
            className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-white backdrop-blur-md ring-1 ring-white/20 hover:bg-white/20 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}

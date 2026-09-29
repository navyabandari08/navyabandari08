import { Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/80 to-slate-900" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-light text-sky-400 text-sm font-medium animate-fade-in">
          <Sparkles className="w-4 h-4" />
          Data Science Enthusiast
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight animate-fade-in-up delay-100">
          Hi, I'm <span className="text-gradient animate-gradient">Navya Bandari</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-300">
          Passionate about transforming data into meaningful insights. Building practical projects
          in <span className="text-sky-400 font-medium">Python</span>,{' '}
          <span className="text-teal-400 font-medium">Machine Learning</span>, and{' '}
          <span className="text-cyan-400 font-medium">AI</span>.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-500">
          <a
            href="#about"
            className="px-8 py-3.5 text-white font-semibold bg-gradient-to-r from-sky-500 to-teal-500 rounded-xl hover:shadow-xl hover:shadow-sky-500/30 transition-all duration-300 hover:scale-105"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 text-slate-200 font-semibold border border-white/15 rounded-xl hover:border-sky-500/50 hover:bg-white/5 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-sky-400 transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}

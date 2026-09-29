import { Brain, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center">
              <Brain className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold tracking-tight">
              Navya<span className="text-gradient">.B</span>
            </span>
          </div>

          <nav className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#about" className="hover:text-sky-400 transition-colors">About</a>
            <a href="#what-i-do" className="hover:text-sky-400 transition-colors">What I Do</a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">Contact</a>
          </nav>

          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-rose-400" /> by Navya Bandari
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Navya Bandari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

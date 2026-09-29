import { Linkedin, Github, Database, Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-teal-500" />
          <span className="text-teal-400 font-mono text-sm tracking-wider">04. GET IN TOUCH</span>
        </div>

        <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="reveal text-slate-400 text-lg mb-14 max-w-2xl">
          Whether it's a collaboration, a question, or just a hello — I'd love to hear from you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="reveal space-y-4">
            <a
              href="https://www.linkedin.com/in/navya-bandari-a79ab5439"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 glass-light rounded-2xl card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                <Linkedin className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">LinkedIn</p>
                <p className="text-white font-medium text-sm">Navya Bandari</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-5 glass-light rounded-2xl card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/20 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                <Github className="w-5 h-5 text-teal-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">GitHub</p>
                <p className="text-white font-medium text-sm">View my repositories</p>
              </div>
            </a>

            <a
              href="#"
              className="flex items-center gap-4 p-5 glass-light rounded-2xl card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Kaggle</p>
                <p className="text-white font-medium text-sm">Explore my datasets</p>
              </div>
            </a>

            <a
              href="mailto:navya@example.com"
              className="flex items-center gap-4 p-5 glass-light rounded-2xl card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="text-white font-medium text-sm">Send a message</p>
              </div>
            </a>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="reveal glass rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition-all"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white text-sm placeholder-slate-600 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/30 transition-all resize-none"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-white font-semibold bg-gradient-to-r from-sky-500 to-teal-500 rounded-xl hover:shadow-lg hover:shadow-sky-500/30 transition-all duration-300 hover:scale-[1.02]"
            >
              {sent ? (
                <>Message Sent!</>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

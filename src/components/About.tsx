import { Linkedin, Github, Database, ExternalLink, User } from 'lucide-react';

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/navya-bandari-a79ab5439', icon: Linkedin },
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'Kaggle', href: '#', icon: Database },
  { label: 'Portfolio', href: '#', icon: ExternalLink },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-sky-500" />
          <span className="text-sky-400 font-mono text-sm tracking-wider">01. ABOUT ME</span>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 reveal">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Turning data into <span className="text-gradient">meaningful insights</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Hi, I'm Navya Bandari, a passionate Data Science enthusiast interested in transforming
              data into meaningful insights. I am currently developing my skills in Python, Data
              Science, Machine Learning, Data Analysis, and Artificial Intelligence.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I enjoy learning new technologies and building practical projects that solve real-world
              problems. My journey is driven by curiosity and a desire to continuously grow as a data
              professional.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 px-4 py-2.5 glass-light rounded-xl text-slate-300 hover:text-sky-400 hover:border-sky-500/30 transition-all duration-300 group"
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 reveal">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-sky-500 to-teal-500 rounded-3xl blur-xl opacity-30 animate-pulse-glow" />
              <div className="relative glass rounded-3xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center mb-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Navya Bandari</h3>
                <p className="text-sky-400 text-sm font-medium mb-4">Data Scientist</p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-slate-500">Role</span>
                    <span className="text-slate-300 font-medium">Data Scientist</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/5">
                    <span className="text-slate-500">Focus</span>
                    <span className="text-slate-300 font-medium">ML & AI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500">Status</span>
                    <span className="text-teal-400 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

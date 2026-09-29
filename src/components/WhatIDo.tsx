import {
  BarChart3,
  BrainCircuit,
  Code2,
  LineChart,
  Sparkles,
  BookOpen,
} from 'lucide-react';

const items = [
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description:
      'Working with datasets to identify patterns, trends, and useful insights using Python and data analysis tools.',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    description:
      'Learning and implementing machine learning algorithms to solve practical problems.',
  },
  {
    icon: Code2,
    title: 'Python Development',
    description:
      'Improving my Python programming and problem-solving skills through hands-on projects.',
  },
  {
    icon: LineChart,
    title: 'Data Visualization',
    description:
      'Creating meaningful visualizations to communicate data and insights clearly.',
  },
  {
    icon: Sparkles,
    title: 'Artificial Intelligence',
    description:
      'Exploring AI and machine learning concepts and applying them to practical projects.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description:
      'Continuously improving my technical skills through projects, courses, and hands-on practice.',
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-teal-500" />
          <span className="text-teal-400 font-mono text-sm tracking-wider">02. WHAT I'M DOING</span>
        </div>

        <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Areas of <span className="text-gradient">focus</span>
        </h2>
        <p className="reveal text-slate-400 text-lg mb-14 max-w-2xl">
          I'm actively developing expertise across these core areas of data science and programming.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={item.title}
              className="reveal glass-light rounded-2xl p-7 card-hover"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-teal-500/20 border border-sky-500/20 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

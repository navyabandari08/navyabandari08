const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Data Science',
    skills: ['Data Science', 'Machine Learning', 'Artificial Intelligence', 'Pandas', 'NumPy', 'Matplotlib', 'Data Visualization'],
  },
  {
    title: 'Tools & Platforms',
    skills: ['Git & GitHub', 'DBMS', 'Deployment'],
  },
];

export default function Skills() {
  const allSkills = [...skillCategories[0].skills, ...skillCategories[1].skills, ...skillCategories[2].skills];

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="w-10 h-px bg-sky-500" />
          <span className="text-sky-400 font-mono text-sm tracking-wider">03. SKILLS</span>
        </div>

        <h2 className="reveal text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Technical <span className="text-gradient">toolkit</span>
        </h2>
        <p className="reveal text-slate-400 text-lg mb-14 max-w-2xl">
          Technologies and tools I work with across data science, programming, and deployment.
        </p>

        {/* Marquee */}
        <div className="reveal relative overflow-hidden mb-16 py-4 glass-light rounded-2xl">
          <div className="flex gap-4 animate-marquee whitespace-nowrap">
            {[...allSkills, ...allSkills].map((skill, i) => (
              <span
                key={`${skill}-${i}`}
                className="px-5 py-2.5 text-sm font-medium text-slate-300 border border-white/10 rounded-xl bg-white/5 flex-shrink-0"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none" />
        </div>

        {/* Categorized */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="reveal glass-light rounded-2xl p-7"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="text-sm font-mono tracking-wider text-sky-400 mb-5 uppercase">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-2 text-sm font-medium text-slate-300 border border-white/10 rounded-lg hover:border-sky-500/40 hover:text-sky-400 hover:bg-sky-500/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

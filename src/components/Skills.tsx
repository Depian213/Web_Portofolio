export function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [{name: 'React', level: 55, dot: 3},{ name: 'TypeScript', level : 70, dot: 4},{name: 'Tailwind CSS', level:45, dot: 3},{name:'Next.js', level:40, dot: 3},{name: 'Vue.js', level :40, dot: 3}],
      color: '#87BAC3',
    },
    {
      category: 'Backend',
      skills: [{name: 'Node.js', level: 70, dot: 3},{name: 'Python', level :85, dot: 4},{name: 'PostgreSQL',level: 67,dot: 3},{name: 'MongoDB', level: 70,dot: 3}],
      color: '#53629E',
    },
    {
      category: 'Tools & Others',
      skills: [{name:'Git',level: 78, dot: 4}, {name: 'Docker', level: 78, dot : 4}, {name:'AWS', level: 74, dot :4}, {name:'Figma', level: 70, dot : 4}],
      color: '#473472',
    },
  ];

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#87BAC3]/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#87BAC3] to-[#53629E] bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#87BAC3] to-[#53629E] mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A collection of technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (

            <div
              key={index}
              className="p-8 bg-[#0a0a0a] border border-[#473472]/30 rounded-2xl hover:border-[#87BAC3]/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-white" style={{ color: category.color }}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                       <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={
              i < skill.dot
                ? "text-[#87BAC3]"
                : "text-[#473472]/40"
            }
          >
            ●
          </span>
        ))}
      </div>
                    </div>
                    <div className="h-2 bg-[#473472]/20 rounded-full overflow-hidden">
                      <div
      className="h-full rounded-full transition-all duration-1000"
      style={{
        width: `${skill.level}%`,
        background: `linear-gradient(90deg, #87BAC3, #53629E)`
      }}
    />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

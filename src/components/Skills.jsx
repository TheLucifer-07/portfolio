function Skills() {
  const skills = [
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ];

  return (
    <section className="relative h-[60vh] flex flex-col justify-center px-6 overflow-hidden bg-gradient-to-b from-background via-accentLight/30 to-accentLight/60">

      {/* Top Blend */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accentLight/60 via-accentLight/30 to-transparent z-10 pointer-events-none blur-[2px]"></div>

      {/* Bottom Blend */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-accentLight/60 via-accentLight/30 to-transparent z-10 pointer-events-none blur-[2px]"></div>

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-[180px] rounded-full"></div>

      <div className="relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            Skills
          </h2>
          <p className="mt-4 text-secondary/90 max-w-xl mx-auto">
            Technologies and tools I use to build modern, scalable and efficient applications.
          </p>
        </div>

        {/* Scroll Row */}
        <div className="max-w-6xl mx-auto overflow-hidden py-4">
          <div className="animate-scroll whitespace-nowrap gap-6">

            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="group inline-flex items-center gap-4 min-w-[180px] px-5 py-4 rounded-xl bg-surface/70 border border-accent/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,94,60,0.2)]"
              >
                <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                <span className="text-primary font-medium tracking-wide">
                  {skill.name}
                </span>
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-accent/10"></div>
              </div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}

export default Skills;
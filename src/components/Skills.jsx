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
    <section className="section-shell relative overflow-hidden">
      <div className="section-glow left-1/2 top-[12%] -translate-x-1/2" />

      <div className="relative z-20">
        <div className="section-head">
          <p data-reveal className="section-kicker">
            Technical Edge
          </p>
          <h2 data-reveal className="section-title" style={{ transitionDelay: "80ms" }}>
            Skills
          </h2>
          <p data-reveal className="section-copy" style={{ transitionDelay: "160ms" }}>
            Technologies and tools I use to build modern, scalable and efficient applications.
          </p>
        </div>

        <div data-reveal className="skills-marquee-shell mx-auto max-w-6xl px-5 py-4 md:px-6" style={{ transitionDelay: "220ms" }}>
          <div className="animate-scroll whitespace-nowrap gap-6">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="group relative inline-flex min-w-[190px] items-center gap-4 rounded-2xl border border-[rgba(139,94,60,0.16)] bg-white/[0.72] px-5 py-4 text-sm text-primary shadow-soft backdrop-blur-xl transition-all duration-500 ease-luxury hover:-translate-y-2 hover:shadow-luxury"
              >
                <img src={skill.logo} alt={skill.name} className="w-6 h-6" />
                <span className="font-medium tracking-wide">
                  {skill.name}
                </span>
                <div className="absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/10 via-transparent to-accentLight/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

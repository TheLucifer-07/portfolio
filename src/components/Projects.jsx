import aqiImg from "../assets/aqi.png";
import edunexesImg from "../assets/edunexes.png";
import tracerImg from "../assets/tracer.png";

const projects = [
  {
    title: "TRACER",
    description:
      "AI-powered behavioral tracking platform with responsive React interfaces, analytics workflows, and modern UI systems.",
    tag: "Full Stack • AI",
    link: "https://tracer-07.vercel.app",
    github: "https://github.com/chanduforge/Tracer",
    image: tracerImg,
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    accent: "from-[rgba(181,144,103,0.12)] via-[rgba(139,94,60,0.08)] to-transparent",
  },

  {
    title: "EduNexes",
    description:
      "AI-powered student productivity system with chat, notes generation, resume analysis, and task tracking.",
    tag: "Full Stack • AI",
    link: "https://edu-nexes.vercel.app",
    github: "https://github.com/chanduforge/EduNexes",
    image: edunexesImg,
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
    accent: "from-[rgba(181,144,103,0.12)] via-[rgba(139,94,60,0.08)] to-transparent",
  },

  {
    title: "AQI Predictor",
    description:
      "Real-time AQI monitoring platform with responsive dashboards, ML-powered forecasting, and data visualization systems.",
    tag: "Frontend • ML",
    link: "https://aqi-predictor-07.vercel.app",
    github: "https://github.com/chanduforge/AQI-Predictor",
    image: aqiImg,
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
    accent: "from-[rgba(139,94,60,0.12)] via-[rgba(181,144,103,0.08)] to-transparent",
  },
];

function Projects() {
  const handleTilt = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1200px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-8px)`;
  };

  const resetTilt = (event) => {
    event.currentTarget.style.transform = "";
  };

  return (
    <section className="section-shell relative overflow-hidden">
      <div className="section-glow right-[5%] top-[10%]" />

      <div className="section-head">
        <p data-reveal className="section-kicker">
          Signature Work
        </p>
        <h2 data-reveal className="section-title" style={{ transitionDelay: "80ms" }}>
          Projects
        </h2>
        <p data-reveal className="section-copy" style={{ transitionDelay: "160ms" }}>
          A selection of projects showcasing my ability to build scalable, real-world applications.
        </p>
      </div>

      <div
        data-reveal
        className="mx-auto mb-8 flex max-w-6xl items-center justify-between gap-6 px-5 md:mb-10 md:px-6"
        style={{ transitionDelay: "220ms" }}
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary/[0.72]">
          Selected Builds
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 md:px-6 lg:grid-cols-2 lg:grid-rows-[auto_auto]">
        {projects.map((project, index) => (
          <div
            key={index}
            data-reveal
            className={`project-card group ${
              index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch" : ""
            }`}
            style={{ transitionDelay: `${index * 110}ms` }}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className={`relative overflow-hidden rounded-[26px] ${index === 0 ? "h-72 lg:h-full lg:min-h-[420px]" : "h-56"}`}>
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-top transition duration-700 ease-luxury group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,10,0.20)] via-transparent to-[rgba(255,255,255,0.08)] transition duration-500 group-hover:from-[rgba(10,10,10,0.28)]" />
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-90 transition duration-500 group-hover:opacity-100`} />
              <div className="absolute left-5 top-5 rounded-full border border-white/40 bg-white/[0.18] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                {project.tag}
              </div>
              <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                <span className="font-display text-4xl leading-none text-white/85">
                  0{index + 1}
                </span>
                <div className="h-10 w-px bg-white/25" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/78">
                  Featured Project
                </span>
              </div>
            </div>

            <div className={`relative p-6 md:p-7 ${index === 0 ? "lg:flex lg:flex-col lg:justify-between lg:p-8" : ""}`}>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent lg:hidden" />
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.26em] text-secondary/[0.7]">
                  Case Study
                </span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-primary md:text-[1.75rem]">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-secondary md:text-[0.95rem]">
                  {project.description}
                </p>
              </div>

              <div className={`mt-6 ${index === 0 ? "lg:mt-8" : ""}`}>
                <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary/[0.66]">
                  Built With
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <div
                      key={i}
                      className="glass-chip"
                    >
                      <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`mt-8 flex items-center justify-between gap-4 border-t border-[rgba(139,94,60,0.12)] pt-5 ${index === 0 ? "lg:mt-10" : ""}`}>
                <div className="h-px w-12 bg-gradient-to-r from-accent/55 to-transparent" />
                <div className="flex gap-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link"
                  >
                    Live →
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-link"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-gradient-to-br from-[rgba(181,144,103,0.10)] via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

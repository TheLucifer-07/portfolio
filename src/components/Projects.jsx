import aqiImg from "../assets/aqi.png";
import edunexesImg from "../assets/edunexes.png";
import shopeasyImg from "../assets/shopeasy.png";

const projects = [
  {
    title: "AQI Predictor",
    description:
      "AI-powered air quality prediction platform using ML models, real-time APIs, and interactive dashboards.",
    tag: "Full Stack • AI",
    link: "https://aqi-predictor-07.vercel.app",
    github: "https://github.com/TheLucifer-07/AQI-Predictor",
    image: aqiImg,
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    ],
  },
  {
    title: "EduNexes",
    description:
      "AI-powered student productivity system with chat, notes generation, resume analysis, and task tracking.",
    tag: "Full Stack • AI",
    link: "https://edu-nexes.vercel.app",
    github: "https://github.com/TheLucifer-07/EduNexes",
    image: edunexesImg,
    tech: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    ],
  },
  {
    title: "ShopEasy",
    description:
      "Responsive e-commerce UI built using HTML and Tailwind during early learning phase.",
    tag: "Frontend",
    link: "https://shopeasy-07.vercel.app",
    github: "https://github.com/TheLucifer-07/shopeasy",
    image: shopeasyImg,
    tech: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
    ],
  },
];

function Projects() {
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden flex flex-col justify-center bg-gradient-to-br from-[#dacdb8] via-[#EFE4D8] to-[#e0cebb]">
       {/* Premium Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FAFAFA] via-[#F6F1EC] to-[#d1baa0]"></div>
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-[180px] rounded-full"></div>

      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-primary tracking-tight">
          Projects
        </h2>
        <p className="mt-4 text-secondary max-w-xl mx-auto">
          A selection of projects showcasing my ability to build scalable, real-world applications.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border border-black/10 bg-surface/60 backdrop-blur-md transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.15)]"
          >
            {/* Top Image */}
            <div className="relative h-52 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-primary">
                {project.title}
              </h3>

              <p className="mt-3 text-secondary text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {project.tech.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-black/10 text-xs text-secondary"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                    {tech.name}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary/80 hover:text-accent transition"
                >
                  Live →
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary/80 hover:text-accent transition"
                >
                  GitHub →
                </a>
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-accent/5 via-transparent to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

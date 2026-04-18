function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black via-neutral-900 to-black opacity-90"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-accent/20 blur-[140px] rounded-full"></div>
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Top Tag */}
        <p className="text-sm uppercase tracking-[0.3em] text-accent/80 animate-fadeInUp">
          Full Stack Developer • AI & Data Science Student
        </p>

        {/* Name */}
        <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl tracking-tight font-bold text-primary leading-[1.3] animate-fadeInUp delay-100">
          <span className="text-primary/80">
            Hema Chandu
          </span>
          <span className="block pb-2 bg-gradient-to-r from-[#e0c3a3] via-[#c6a27e] to-[#a67c52] bg-clip-text text-transparent tracking-widest">
            Animireddy
          </span>
        </h1>
        <div className="w-32 h-[2px] mx-auto mt-4 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50"></div>

        {/* Main Statement */}
        <p className="mt-4 text-lg md:text-xl text-primary/80 max-w-2xl mx-auto leading-relaxed animate-fadeInUp delay-200">
          I design and develop 
          <span className="text-accent font-semibold"> modern web experiences </span>
          with performance in mind, focusing on 
          <span className="text-accent font-semibold"> clean UI, scalability, </span>
          and real-world impact.
        </p>

        {/* Tech Stack */}
        <div className="mt-6 flex flex-wrap justify-center gap-3 animate-fadeInUp delay-300">
          {["React", "Node.js", "MongoDB", "Tailwind", "JavaScript"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1 text-sm rounded-full border bg-white/5 backdrop-blur-md text-primary/50 border-primary/70 hover:text-accent hover:border-accent transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp delay-500">
          <a
            href="#projects"
            className="px-10 py-4 rounded-full bg-[#8B7355] text-white text-sm tracking-wide uppercase border border-[#8B7355] transition-all duration-300 hover:opacity-90"
          >
            View My Work
          </a>

          <a
            href="/Hema_Chandu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 rounded-full border border-[#8B7355] text-[#8B7355] text-sm tracking-wide uppercase transition-all duration-300 hover:bg-[#8B7355] hover:text-white"
          >
            Resume
          </a>
        </div>

        {/* Social Links (Subtle) */}
        <div className="mt-6 flex justify-center gap-6 animate-fadeInUp delay-500">
          <a href="https://github.com/TheLucifer-07" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/70 backdrop-blur-md border border-accent/20 hover:bg-[#8B7355] hover:scale-110 transition-all duration-300 group">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" className="w-5 h-5 object-contain filter grayscale hover:grayscale-0" />
          </a>

          <a href="https://www.linkedin.com/in/hemachandu-animireddy/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/70 backdrop-blur-md border border-accent/20 hover:bg-[#8B7355] hover:scale-110 transition-all duration-300 group">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" className="w-5 h-5 object-contain filter grayscale hover:grayscale-0" />
          </a>

          <a href="mailto:hemachanduanimireddy@gmail.com" className="p-2 rounded-full bg-white/70 backdrop-blur-md border border-accent/20 hover:bg-[#8B7355] hover:scale-110 transition-all duration-300 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-primary/70 group-hover:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>

          <a href="https://x.com/chandux_?s=21" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/70 backdrop-blur-md border border-accent/20 hover:bg-[#8B7355] hover:scale-110 transition-all duration-300 group">
            <svg className="w-5 h-5 text-primary/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.73 1.04 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.89a4.27 4.27 0 001.32 5.7 4.22 4.22 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54a12.14 12.14 0 006.58 1.93c7.9 0 12.23-6.54 12.23-12.21 0-.19 0-.37-.01-.56A8.7 8.7 0 0022 5.92z" />
            </svg>
          </a>

          <a href="https://leetcode.com/u/Chandu30_05_06/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/70 backdrop-blur-md border border-accent/20 hover:bg-[#8B7355] hover:scale-110 transition-all duration-300 group">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg" className="w-5 h-5 object-contain filter grayscale hover:grayscale-0" />
          </a>

          <a href="https://www.codechef.com/users/chandu30_05_06" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/70 backdrop-blur-md border border-accent/20 hover:bg-[#8B7355] hover:scale-110 transition-all duration-300 group">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codechef.svg" className="w-5 h-5 object-contain filter grayscale hover:grayscale-0" />
          </a>

          <a href="https://codeforces.com/profile/chandu3005" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/70 backdrop-blur-md border border-accent/20 hover:bg-[#8B7355] hover:scale-110 transition-all duration-300 group">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codeforces.svg" className="w-5 h-5 object-contain filter grayscale hover:grayscale-0" />
          </a>
        </div>
        <div className="w-24 h-[1px] mx-auto mt-6 bg-gradient-to-r from-transparent via-accent/40 to-transparent"></div>
      </div>
    </section>
  );
}

export default Hero;


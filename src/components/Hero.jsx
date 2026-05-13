function Hero() {
  const socials = [
    {
      href: "https://github.com/chanduforge",
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/hemachandu-animireddy/",
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
      label: "LinkedIn",
    },
    { href: "mailto:hemachanduanimireddy@gmail.com", type: "mail", label: "Email" },
    { href: "https://x.com/chandux_?s=21", type: "twitter", label: "Twitter" },
    {
      href: "https://leetcode.com/u/Chandu30_05_06/",
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg",
      label: "LeetCode",
    },
    {
      href: "https://www.codechef.com/users/chandu30_05_06",
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codechef.svg",
      label: "CodeChef",
    },
    {
      href: "https://codeforces.com/profile/chandu3005",
      type: "image",
      src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codeforces.svg",
      label: "Codeforces",
    },
  ];

  return (
    <section className="hero-shell section-shell relative flex min-h-screen items-center justify-center overflow-hidden pt-28 md:pt-32">
      <div className="hero-haze hero-haze-one" />
      <div className="hero-haze hero-haze-two" />
      <div className="hero-grid" />

      <div className="mx-auto max-w-6xl px-5 text-center sm:px-6">
        <p
          data-reveal
          className="mx-auto w-fit rounded-full border border-[rgba(139,94,60,0.12)] bg-white/[0.75] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-accent shadow-soft backdrop-blur-xl"
        >
          Full Stack Developer • AI & Data Science Student
        </p>

        <h1
          data-reveal
          className="mx-auto mt-8 max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-primary sm:text-6xl md:text-7xl lg:text-[6.2rem]"
          style={{ transitionDelay: "90ms" }}
        >
          <span className="block font-display text-primary/[0.88]">
            Hema Chandu
          </span>
          <span className="hero-name block bg-gradient-to-r from-accent via-accentLight to-accent bg-clip-text pb-2 font-display text-transparent">
            Animireddy
          </span>
        </h1>
        <div
          data-reveal
          className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-accent/[0.7] to-transparent"
          style={{ transitionDelay: "170ms" }}
        />

        <p
          data-reveal
          className="mx-auto mt-6 max-w-3xl text-base leading-8 text-secondary sm:text-lg md:text-[1.15rem]"
          style={{ transitionDelay: "230ms" }}
        >
          I design and develop 
          <span className="text-accent font-semibold"> modern web experiences </span>
          with performance in mind, focusing on 
          <span className="text-accent font-semibold"> clean UI, scalability, </span>
          and real-world impact.
        </p>

        <div
          data-reveal
          className="mt-8 flex flex-wrap justify-center gap-3"
          style={{ transitionDelay: "310ms" }}
        >
          {["React", "Node.js", "MongoDB", "Tailwind", "JavaScript"].map((tech) => (
            <span
              key={tech}
              className="glass-chip"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          data-reveal
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ transitionDelay: "390ms" }}
        >
          <a
            href="#projects"
            className="btn-luxury px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white"
          >
            View My Work
          </a>

          <a
            href="/Hema_Chandu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-10 py-4 text-[11px] font-semibold uppercase tracking-[0.24em]"
          >
            Resume
          </a>
        </div>

        <div
          data-reveal
          className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4"
          style={{ transitionDelay: "470ms" }}
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="social-pill group"
              aria-label={social.label}
            >
              {social.type === "mail" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary/70 transition duration-300 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ) : social.type === "twitter" ? (
                <svg className="h-5 w-5 text-primary/70 transition duration-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.73 1.04 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.89a4.27 4.27 0 001.32 5.7 4.22 4.22 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54a12.14 12.14 0 006.58 1.93c7.9 0 12.23-6.54 12.23-12.21 0-.19 0-.37-.01-.56A8.7 8.7 0 0022 5.92z" />
                </svg>
              ) : (
                <img src={social.src} alt={social.label} className="h-5 w-5 object-contain grayscale transition duration-300 group-hover:grayscale-0" />
              )}
            </a>
          ))}
        </div>

        <div
          data-reveal
          className="mx-auto mt-10 flex w-fit flex-col items-center gap-3"
          style={{ transitionDelay: "550ms" }}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/[0.75]">
            Scroll
          </span>
          <span className="scroll-cue">
            <span className="scroll-cue-dot" />
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;

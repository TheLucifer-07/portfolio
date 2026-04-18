import React from "react";

function About() {
  const items = [
    {
      title: "Frontend",
      desc: "Crafting clean, high-performance interfaces with React and modern UI principles.",
    },
    {
      title: "Backend",
      desc: "Designing scalable APIs and systems using Node.js and MongoDB.",
    },
    {
      title: "Problem Solving",
      desc: "Strong foundation in DSA with a focus on logical and efficient solutions.",
    },
    {
      title: "AI & Data Science",
      desc: "Exploring intelligent systems and data-driven applications.",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pb-16 md:pb-0 bg-gradient-to-br from-[#FAF7F2] via-[#EFE4D8] to-[#E2D0BE]">

      {/* Premium Gradient Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FAFAFA] via-[#F6F1EC] to-[#E9DDCF]"></div>
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-[180px] rounded-full"></div>

      {/* Heading */}
      <div className="w-full max-w-4xl mx-auto text-center pt-10 md:pt-16 mb-10 md:mb-14">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary leading-tight">
          About Me
        </h2>
        <p className="mt-4 text-secondary text-base leading-relaxed max-w-xl mx-auto opacity-90">
          I build modern, scalable and performance-driven web applications with a strong focus on clean UI, system design and real-world impact.
        </p>
      </div>

      {/* Layout */}
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-3 gap-12 md:gap-16 items-center px-4 md:px-0">

        {/* Left */}
        <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">

          {items.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-surface/70 border border-accent/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,94,60,0.2)]"
            >
              <h3 className="text-lg font-semibold text-primary tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-secondary leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center order-1 md:order-2 mt-2 md:mt-0">
          <div className="relative group">
            <img
              src="/src/assets/my-photo.PNG"
              alt="Hema Chandu"
              className="w-72 h-96 md:w-80 md:h-[460px] object-cover object-top rounded-2xl shadow-[0_50px_120px_rgba(139,94,60,0.25)] transition duration-500 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 rounded-2xl border border-white/30 pointer-events-none"></div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6 md:gap-8 order-3">
          {items.slice(2, 4).map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-surface/70 border border-accent/30 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,94,60,0.2)]"
            >
              <h3 className="text-lg font-semibold text-primary tracking-tight leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-secondary leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default About;
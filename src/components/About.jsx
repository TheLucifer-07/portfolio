import React from "react";
import myPhoto from "../assets/my-photo.PNG";

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
    <section className="section-shell relative overflow-hidden">
      <div className="section-glow top-[8%] left-[8%]" />

      <div className="section-head">
        <p data-reveal className="section-kicker">
          Crafted Foundations
        </p>
        <h2 data-reveal className="section-title" style={{ transitionDelay: "80ms" }}>
          About Me
        </h2>
        <p data-reveal className="section-copy" style={{ transitionDelay: "160ms" }}>
          I build modern, scalable and performance-driven web applications with a strong focus on clean UI, system design and real-world impact.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-5 md:grid-cols-3 md:gap-10 md:px-6">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          {items.slice(0, 2).map((item, index) => (
            <div
              key={index}
              data-reveal
              className="luxury-card p-6 md:p-7"
              style={{ transitionDelay: `${120 + index * 80}ms` }}
            >
              <h3 className="text-xl font-semibold tracking-tight text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-secondary">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div data-reveal className="order-1 flex justify-center md:order-2" style={{ transitionDelay: "220ms" }}>
          <div className="portrait-frame group">
            <img
              src={myPhoto}
              alt="Hema Chandu"
              className="h-96 w-72 rounded-[28px] object-cover object-top transition duration-700 ease-luxury group-hover:scale-[1.05] md:h-[460px] md:w-80"
            />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-white/[0.45]" />
            <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-t from-[rgba(10,10,10,0.10)] via-transparent to-[rgba(255,255,255,0.12)] opacity-80" />
          </div>
        </div>

        <div className="order-3 flex flex-col gap-6">
          {items.slice(2, 4).map((item, index) => (
            <div
              key={index}
              data-reveal
              className="luxury-card p-6 md:p-7"
              style={{ transitionDelay: `${260 + index * 80}ms` }}
            >
              <h3 className="text-xl font-semibold tracking-tight text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-secondary">
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

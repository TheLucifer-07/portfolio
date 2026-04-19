function Contact() {
  return (
    <section className="section-shell relative overflow-hidden">
      <div className="section-glow left-1/2 top-[18%] -translate-x-1/2" />

      <div className="relative z-20 mx-auto w-full max-w-5xl px-5 text-center sm:px-6">
        <p data-reveal className="section-kicker">
          Final Impression
        </p>
        <h2 data-reveal className="section-title" style={{ transitionDelay: "80ms" }}>
          Let’s Connect
        </h2>

        <p data-reveal className="section-copy px-2" style={{ transitionDelay: "160ms" }}>
          Whether you have a project idea, collaboration opportunity, or just want to say hi — feel free to reach out.
        </p>

        <div
          data-reveal
          className="mx-auto mt-10 max-w-3xl rounded-[30px] border border-[rgba(139,94,60,0.14)] bg-white/[0.78] p-7 shadow-luxury backdrop-blur-2xl sm:mt-12 sm:p-10"
          style={{ transitionDelay: "240ms" }}
        >
          <p className="break-words font-display text-3xl font-semibold tracking-[-0.03em] text-primary sm:text-4xl">
            hemachanduanimireddy@gmail.com
          </p>

          <p className="mt-4 text-sm leading-7 text-secondary">
            I usually respond within 24 hours.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <a
              href="mailto:hemachanduanimireddy@gmail.com"
              className="btn-luxury w-full px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white sm:w-auto"
            >
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/hemachandu-animireddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] sm:w-auto"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

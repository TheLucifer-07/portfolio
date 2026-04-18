function Contact() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-[#FAFAFA] via-[#F6F1EC] to-[#E9DDCF]">

      {/* Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/20 blur-[180px] rounded-full"></div>

      <div className="relative z-20 max-w-5xl mx-auto w-full text-center px-2 sm:px-0">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary tracking-tight">
          Let’s Connect
        </h2>

        <p className="mt-3 text-secondary max-w-xl mx-auto leading-relaxed text-sm sm:text-base px-2">
          Whether you have a project idea, collaboration opportunity, or just want to say hi — feel free to reach out.
        </p>

        {/* Contact Card */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-8 rounded-2xl bg-surface/80 border border-black/10 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.1)]">

          <p className="text-primary text-base sm:text-lg font-medium break-words">
            hemachanduanimireddy@gmail.com
          </p>

          <p className="mt-2 text-secondary text-sm">
            I usually respond within 24 hours.
          </p>

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

            <a
              href="mailto:hemachanduanimireddy@gmail.com"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full bg-accent text-white text-sm tracking-wide transition hover:opacity-90"
            >
              Send Email
            </a>

            <a
              href="https://www.linkedin.com/in/hemachandu-animireddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-accent text-accent text-sm tracking-wide transition hover:bg-accent hover:text-white"
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

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let frameId;

    const updateActiveSection = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      if (!sections.length) return;

      const navOffset = 140;
      const scrollPosition = window.scrollY + navOffset;
      const pageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;

      const currentSection = pageBottom
        ? sections[sections.length - 1]
        : sections
            .slice()
            .reverse()
            .find((section) => section.offsetTop <= scrollPosition);

      setActiveSection(currentSection?.id || "");
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ease-luxury ${
        scrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex w-[min(1120px,calc(100%-24px))] items-center justify-between rounded-full px-5 md:px-7 transition-all duration-500 ease-luxury ${
          scrolled
            ? "border border-[rgba(139,94,60,0.12)] bg-white/[0.72] shadow-soft backdrop-blur-2xl"
            : "border border-transparent bg-white/[0]"
        }`}
      >
        <Link
          to="/"
          className="py-4 font-display text-2xl font-semibold tracking-[0.16em] text-primary transition duration-300 hover:text-accent"
        >
          Chandu
        </Link>

        <div className="hidden items-center gap-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link ${activeSection === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="/Hema_Chandu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.22em]"
          >
            View Resume
          </a>
        </div>

        <button
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[rgba(139,94,60,0.12)] bg-white/[0.7] text-primary shadow-soft backdrop-blur-xl transition duration-300 hover:scale-[1.04] hover:border-accent/30 hover:text-accent md:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <span className="space-y-1.5">
            <span className="block h-px w-5 bg-current" />
            <span className="block h-px w-5 bg-current" />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-[rgba(10,10,10,0.14)] backdrop-blur-xl transition-all duration-500 ease-luxury ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={handleClose}
      />

      <div
        className={`fixed right-0 top-0 flex h-full w-[min(320px,88vw)] flex-col border-l border-[rgba(139,94,60,0.12)] bg-white/[0.82] shadow-[0_30px_80px_rgba(10,10,10,0.12)] backdrop-blur-3xl transition-transform duration-500 ease-luxury ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[rgba(139,94,60,0.1)] px-6 py-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-secondary">
            Navigation
          </span>
          <button
            onClick={handleClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(139,94,60,0.14)] text-primary transition duration-300 hover:rotate-90 hover:border-accent/30 hover:text-accent"
            aria-label="Close navigation menu"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>

        <div className="flex flex-1 flex-col gap-2 px-6 py-8">
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleClose}
              className={`mobile-nav-link ${activeSection === item.id ? "is-active" : ""}`}
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateX(0)" : "translateX(18px)",
                transitionDelay: isOpen ? `${120 + index * 55}ms` : "0ms",
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="/Hema_Chandu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClose}
            className="btn-luxury mt-6 px-6 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
          >
            View Resume
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

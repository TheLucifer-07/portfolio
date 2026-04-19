function Footer() {
  const socials = [
    {
      name: "GitHub",
      link: "https://github.com/TheLucifer-07",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hemachandu-animireddy/",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
      name: "Email",
      link: "mailto:hemachanduanimireddy@gmail.com",
      type: "mail",
    },
    {
      name: "Twitter",
      link: "https://x.com/chandux_?s=21",
      type: "twitter",
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/u/Chandu30_05_06/",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/leetcode.svg",
    },
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/chandu30_05_06",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codechef.svg",
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/chandu3005",
      icon: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/codeforces.svg",
    },
  ];

  return (
    <footer className="relative border-t border-[rgba(139,94,60,0.12)] bg-[rgba(255,255,255,0.55)] px-6 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill group"
            >
              {item.type === "mail" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-primary/70 group-hover:text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ) : item.type === "twitter" ? (
                <svg className="w-5 h-5 text-primary/70 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.92c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.6 8.6 0 01-2.73 1.04 4.28 4.28 0 00-7.3 3.9A12.13 12.13 0 013 4.89a4.27 4.27 0 001.32 5.7 4.22 4.22 0 01-1.94-.54v.05a4.28 4.28 0 003.43 4.2 4.3 4.3 0 01-1.93.07 4.29 4.29 0 004 2.98A8.6 8.6 0 012 19.54a12.14 12.14 0 006.58 1.93c7.9 0 12.23-6.54 12.23-12.21 0-.19 0-.37-.01-.56A8.7 8.7 0 0022 5.92z" />
                </svg>
              ) : (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-5 w-5 object-contain grayscale group-hover:grayscale-0"
                />
              )}
            </a>
          ))}
        </div>

        <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <p className="text-center text-sm text-primary/70">
          © {new Date().getFullYear()} Chandu. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

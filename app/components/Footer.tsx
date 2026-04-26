const socials = [
  { href: "https://github.com/moh1tsingh", label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/mohitsingh-thakur-b6794325a",
    label: "LinkedIn",
  },
  { href: "https://x.com/is_mohitsingh", label: "X" },
  { href: "mailto:mohitsinghthakur19@gmail.com", label: "Mail" },
];

export default function Footer() {
  return (
    <footer>
      <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-faint)] mb-6">
        Connect
      </h2>
      <div className="flex flex-wrap items-center gap-4 sm:gap-5">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-[var(--text-muted)] hover:text-[var(--text)] transition-colors duration-200"
          >
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  );
}

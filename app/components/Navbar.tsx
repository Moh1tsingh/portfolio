"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blog" },
  { href: "/experience", label: "Experience" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="hidden px-7 py-5 sm:flex sm:px-10 items-center justify-between">
      <Link
        href="/"
        className="text-[15px] font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
      >
        MT
      </Link>
      <div className="flex items-center gap-5">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[14px] transition-colors duration-200 ${
                isActive
                  ? "text-[var(--text)]"
                  : "text-[var(--text-muted)] hover:text-[var(--text)]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

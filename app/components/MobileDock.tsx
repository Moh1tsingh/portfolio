"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, BriefcaseBusiness, FolderGit2, Home } from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";

const links = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/blogs", label: "Blog", icon: BookOpen },
  { href: "/experience", label: "Experience", icon: BriefcaseBusiness },
];

export default function MobileDock() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:hidden">
      <Dock
        iconSize={42}
        iconMagnification={52}
        iconDistance={92}
        className="mt-0 h-14 gap-2 rounded-full border-[var(--border-hover)] bg-[rgba(17,17,19,0.72)] px-3 shadow-2xl shadow-black/40"
      >
        {links.map((link) => {
          const Icon = link.icon;
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <DockIcon key={link.href} className="text-[var(--text-muted)]">
              <Link
                href={link.href}
                aria-label={link.label}
                className={`grid size-9 place-items-center rounded-full transition-colors ${
                  isActive
                    ? "bg-[var(--text)] text-[var(--bg)]"
                    : "hover:bg-[var(--border)] hover:text-[var(--text)]"
                }`}
              >
                <Icon size={18} strokeWidth={2} />
              </Link>
            </DockIcon>
          );
        })}
      </Dock>
    </div>
  );
}

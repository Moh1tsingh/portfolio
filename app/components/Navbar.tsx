import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="w-full py-6 border-b border-white/20 mb-8">
      <div className="flex justify-center items-center gap-8">
        <Link
          href="/projects"
          className="text-lg font-mono hover:text-white/70 transition-colors duration-200"
        >
          [projects]
        </Link>
        <Link
          href="/"
          className="text-lg font-mono hover:text-white/70 transition-colors duration-200"
        >
          [home]
        </Link>
        <Link
          href="/experience"
          className="text-lg font-mono hover:text-white/70 transition-colors duration-200"
        >
          [experience]
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

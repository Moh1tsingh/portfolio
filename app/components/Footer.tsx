import React from "react";

export default function Footer() {
  return (
    <footer className="pt-6 sm:pt-8 px-4 sm:px-6 border-t border-white/20">
      <div className="text-center space-y-3 sm:space-y-4">
        <div className="text-white/60 font-mono text-xs sm:text-sm">
          $ cat social.txt
        </div>
        <div className="flex justify-center items-center gap-4 sm:gap-6">
          <a
            href="https://github.com/moh1tsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 font-mono text-xs sm:text-sm hover:text-white transition-colors duration-200"
          >
            [github]
          </a>
          <a
            href="https://www.linkedin.com/in/mohitsingh-thakur-b6794325a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 font-mono text-xs sm:text-sm hover:text-white transition-colors duration-200"
          >
            [linkedin]
          </a>
          <a
            href="https://x.com/is_mohitsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 font-mono text-xs sm:text-sm hover:text-white transition-colors duration-200"
          >
            [x]
          </a>
        </div>
      </div>
    </footer>
  );
}

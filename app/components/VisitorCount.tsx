"use client";

import { useEffect, useState } from "react";

export default function VisitorCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor-count")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-1.5 text-[13px] text-[var(--text-faint)]">
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      {count.toLocaleString()}
    </div>
  );
}

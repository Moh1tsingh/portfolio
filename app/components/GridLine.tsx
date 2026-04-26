export default function GridLine() {
  return (
    <div className="relative">
      <div
        className="h-px bg-[var(--border)] opacity-70"
        style={{
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      />
      <span className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 text-[11px] text-[var(--geo)] opacity-70 select-none pointer-events-none">
        +
      </span>
      <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-[11px] text-[var(--geo)] opacity-70 select-none pointer-events-none">
        +
      </span>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <main className=" flex pt-20 justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-6xl font-mono font-bold tracking-tight pixelated text-red-400">
            $ 404
          </h1>
          <div className="text-2xl font-mono text-white/80">Page not found</div>
        </div>

        <div className="space-y-4 text-white/60 font-mono text-sm">
          <div>$ ls -la /</div>
          <div className="text-white/80 pl-4 space-y-1">
            <div>
              drwxr-xr-x 2 mohit mohit 4096 Jan 1 00:00{" "}
              <span className="text-white">~/</span>
            </div>
            <div>
              drwxr-xr-x 2 mohit mohit 4096 Jan 1 00:00{" "}
              <span className="text-white">~/projects</span>
            </div>
            <div>
              drwxr-xr-x 2 mohit mohit 4096 Jan 1 00:00{" "}
              <span className="text-white">~/experience</span>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/"
            className="text-white/80 font-mono text-sm hover:text-white transition-colors duration-200 border border-white/20 px-4 py-2 rounded"
          >
            $ cd ~/
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function Projects() {
  return (
    <main className="space-y-6">
      <section className="space-y-4">
        <h1 className="text-3xl font-mono font-bold tracking-tight pixelated">
          $ ls projects/
        </h1>
      </section>

      <section className="space-y-6">
        {/* Sentilizer Project */}
        <div className="space-y-4 p-6 border border-white/20 rounded">
          <div className="space-y-3">
            <h2 className="text-xl font-mono font-semibold text-white">
              $ cat sentilizer/README.md
            </h2>
            <div className="space-y-3 text-white/90 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-white/60">Project:</span>
                <span className="text-white">Sentilizer</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Description:</span>
                <span className="text-white">
                  YouTube comment sentiment analysis tool - login, get credits, paste youtube video link,
                  analyze video comments using Gemini LLM
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Tech Stack:</span>
                <span className="text-white">
                  Next.js, Gemini API, Supabase (Postgres)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Status:</span>
                <span className="text-yellow-400">
                  ● Deployed (DB inactive)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Links:</span>
                <a
                  href="https://github.com/moh1tsingh/sentilizer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  [github]
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* DSA with JavaScript Project */}
        <div className="space-y-4 p-6 border border-white/20 rounded">
          <div className="space-y-3">
            <h2 className="text-xl font-mono font-semibold text-white">
              $ cat dsa-js/README.md
            </h2>
            <div className="space-y-3 text-white/90 font-mono text-sm">
              <div className="flex items-center gap-2">
                <span className="text-white/60">Project:</span>
                <span className="text-white">DSA with JavaScript</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Description:</span>
                <span className="text-white">
                  JavaScript library for Data Structures & Algorithms -
                  available as npm package
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Tech Stack:</span>
                <span className="text-white">JavaScript, Node.js</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Status:</span>
                <span className="text-green-400">● Live on npm</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Downloads:</span>
                <span className="text-white">450+ downloads</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white/60">Links:</span>
                <a
                  href="https://github.com/Moh1tsingh/dsa-npm-lib"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  [github]
                </a>
                <a
                  href="https://www.npmjs.com/package/dsa-with-javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                >
                  [npm]
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project Summary */}
        <div className="pt-4 border-t border-white/20">
          <div className="text-white/60 font-mono text-sm">
            $ wc -l projects/* | tail -1
          </div>
          <div className="text-white/80 font-mono text-sm mt-2">
            Total projects: 2 | 1 npm package, 1 deployed (DB inactive)
          </div>
        </div>
      </section>
    </main>
  );
}

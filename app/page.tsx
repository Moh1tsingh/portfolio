import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8">
      <section className="space-y-4 sm:space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-tight pixelated">
            Mohitsingh Thakur
          </h1>
          <div className="text-base sm:text-lg text-white/80 font-mono">
            $ whoami
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 max-w-3xl">
          <div className="text-white/90 font-mono text-base sm:text-lg leading-tight">
            Full Stack Developer. I write code. I ship. I break things… then fix
            them. More into backends than frontends, I enjoy designing systems,
            scaling deployments, and diving deep into how the web really works.
          </div>
        
        </div>
      </section>

      <section className="pt-6 sm:pt-8 border-t border-white/20">
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-xl sm:text-2xl font-mono font-semibold">
            $ systemctl status
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-white/80 font-mono text-xs sm:text-sm">
                <span className="text-green-400">●</span> Frontend Stack
              </div>
              <div className="pl-3 sm:pl-4 space-y-1 text-white/60 font-mono text-xs sm:text-sm">
                <div>├─ JavaScript/TypeScript</div>
                <div>├─ React.js</div>
                <div>├─ Next.js</div>
                <div>└─ HTML/CSS</div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="text-white/80 font-mono text-xs sm:text-sm">
                <span className="text-blue-400">●</span> Backend & Database
              </div>
              <div className="pl-3 sm:pl-4 space-y-1 text-white/60 font-mono text-xs sm:text-sm">
                <div>├─ Node.js/Express</div>
                <div>├─ PostgreSQL</div>
                <div>├─ REST APIs</div>
                <div>└─ Server Architecture</div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="text-white/80 font-mono text-xs sm:text-sm">
                <span className="text-yellow-400">●</span> Cloud & DevOps
              </div>
              <div className="pl-3 sm:pl-4 space-y-1 text-white/60 font-mono text-xs sm:text-sm">
                <div>├─ AWS (EC2, S3, CloudFront)</div>
                <div>├─ RDS, Lambda</div>
                <div>├─ Docker</div>
                <div>└─ CI/CD Pipelines</div>
              </div>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <div className="text-white/80 font-mono text-xs sm:text-sm">
                <span className="text-purple-400">●</span> Tools & Version
                Control
              </div>
              <div className="pl-3 sm:pl-4 space-y-1 text-white/60 font-mono text-xs sm:text-sm">
                <div>├─ Git/GitHub</div>
                <div>├─ VS Code/Cursor</div>
                <div>├─ Terminal/CLI</div>
                <div>└─ Postman/Insomnia</div>
              </div>
            </div>
          </div>

          <div className="pt-3 sm:pt-4 border-t border-white/10">
            <div className="text-white/80 font-mono text-xs sm:text-sm">
              <span className="text-yellow-400">●</span> Current Status:{" "}
              <span className="text-green-400">Building something awesome</span>
            </div>
            <div className="text-white/60 font-mono text-xs sm:text-sm mt-1">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import Footer from "../components/Footer";

export default function Experience() {
  return (
    <main className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
      <section className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl font-mono font-bold tracking-tight pixelated">
          $ cat experience.txt
        </h1>
      </section>

      <section className="space-y-4 sm:space-y-6">
        {/* Current Role */}
        <div className="space-y-2 sm:space-y-3">
          <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
            $ whoami --current
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-white/90 font-mono text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Role:
              </span>
              <span className="text-white">Product Engineer</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Company:
              </span>
              <span className="text-white">Your Brand Mate</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Started:
              </span>
              <span className="text-white">June 10, 2024</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Status:
              </span>
              <span className="text-green-400">● Active</span>
            </div>
          </div>
        </div>

        {/* Internship */}
        <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/20">
          <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
            $ cat internship.log
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-white/90 font-mono text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Role:
              </span>
              <span className="text-white">Full Stack Engineer Intern</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Company:
              </span>
              <span className="text-white">Your Brand Mate</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Duration:
              </span>
              <span className="text-white">Dec 9 - June 9, 2024</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Status:
              </span>
              <span className="text-yellow-400">● Completed</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/20">
          <h2 className="text-lg sm:text-xl font-mono font-semibold text-white">
            $ cat education.txt
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-white/90 font-mono text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Degree:
              </span>
              <span className="text-white">B.Tech CSE</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                Field:
              </span>
              <span className="text-white">Computer Science</span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 text-white/90 font-mono text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white/60 min-w-[60px] sm:min-w-[80px]">
                CGPA:
              </span>
              <span className="text-white">8.78</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

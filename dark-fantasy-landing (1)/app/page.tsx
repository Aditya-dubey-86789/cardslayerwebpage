import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white relative overflow-hidden">
      {/* Purple mist background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-900/30 z-0"></div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-500/30 animate-pulse"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 8 + 2}s`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-rowdies">
          CARD SLAYER
        </h1>

        <Link
          href="https://t.me/Cardslayer_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center px-8 py-2 text-lg font-lite text-white transition-all duration-300 ease-in-out bg-purple-900 rounded-lg hover:bg-purple-800 overflow-hidden"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="relative flex items-center">
            Join
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </Link>
      </div>
    </main>
  )
}


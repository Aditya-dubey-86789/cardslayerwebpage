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
          className="group relative inline-flex items-center justify-center px-8 py-2 text-lg font-light text-white transition-all duration-300 ease-in-out bg-purple-900 rounded-lg hover:bg-purple-800 overflow-hidden"
        >
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-600 rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="relative flex items-center">
            Join
            <svgStart
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm2.24 7.38-7.5 3.5c-.124.058-.232.125-.24.25.007.125.115.192.24.25l1.865.935 5.785-3.185-4.5 4.06.65 2.335c.022.124.115.217.24.245.123.03.24-.034.329-.124l1.32-1.32 2.025 1.442c.124.09.283.09.407 0 .125-.09.166-.217.15-.352l-1.5-8c-.016-.135-.115-.25-.24-.282-.125-.034-.258.015-.35.09z"/>
            </svg>
          </span>
        </Link>
      </div>
    </main>
  )
}
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col items-center justify-center text-center pt-12 overflow-hidden"
    >
      {/* Custom Animations for this section */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.9; transform: scale(1);}
          50% { opacity: 0.6; transform: scale(1.04);}
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s infinite;
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>

      {/* Glowing animated gradient background */}
      <div className="absolute top-36 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
        <div className="w-80 h-80 rounded-full bg-gradient-to-tr from-blue-600/40 via-fuchsia-400/40 to-pink-500/30 blur-3xl animate-pulse-slow" />
      </div>

      {/* Profile image with floating animated ring */}
      <div className="relative mb-8 z-20 flex items-center justify-center">
        {/* Animated ring */}
        <span className="absolute inset-0 rounded-full border-4 border-purple-400/50 animate-spin-slow pointer-events-none" />
        {/* Profile image */}
        <img
          src="/me.jpg" // <-- Update with your own image path!
          alt="Dhruva Teja D R"
          className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-[#2e2653] mx-auto"
          style={{
            boxShadow:
              "0 0 0 8px rgba(79,47,166,0.10), 0 4px 32px 0 rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text drop-shadow-lg z-20">
        Dhruva Teja D R
      </h1>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mt-2 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text z-20">
        Web Developer
      </h2>

      {/* Short intro */}
      <p className="text-gray-200 max-w-2xl mt-6 text-lg md:text-xl font-medium z-20">
        Hey there! I’m a Computer Science Engineering student from Bangalore and a web developer driven by curiosity and creativity.
        I build sleek, functional, and scalable web apps using modern technologies.
      </p>
    </section>
  );
}

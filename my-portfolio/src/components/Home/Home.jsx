// src/components/Hero.jsx

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] flex flex-col items-center justify-center text-center pt-12"
    >
      {/* Profile Image */}
      <div className="mb-8">
        <img
          src="/profile.jpg" // <-- Update with your own image path!
          alt="Dhruva Teja D R"
          className="w-48 h-48 object-cover rounded-full shadow-2xl border-4 border-[#2e2653] mx-auto"
          style={{
            boxShadow:
              "0 0 0 8px rgba(79,47,166,0.10), 0 4px 32px 0 rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">
        Dhruva Teja D R
      </h1>

      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold mt-2 bg-gradient-to-r from-pink-400 to-blue-400 text-transparent bg-clip-text">
        Web Developer
      </h2>

      {/* Short intro */}
      <p className="text-gray-200 max-w-2xl mt-6 text-lg md:text-xl font-medium">
        Hey there! I’m a Computer Science Engineering student from Bangalore and a web developer driven by curiosity and creativity.
        I build sleek, functional, and scalable web apps using modern technologies.
      </p>
    </section>
  );
}

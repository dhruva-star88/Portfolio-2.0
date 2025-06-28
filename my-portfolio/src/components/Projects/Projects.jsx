import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Budget Buddy",
    image: "/budgetbuddy.png",
    tech: ["Next Js", "React Js", "Typescript", "Gemini AI", "PostgreSQL"],
    description:
      "A finance tracker web app to manage personal finances efficiently.",
    github: "https://github.com/yourusername/budget-buddy",
  },
  {
    name: "Decision Engine",
    image: "/decisionengine.png",
    tech: ["React Js", "Javascript", "MongoDb", "Node.js", "Express.js", "ShadCn"],
    description:
      "A rule engine that lets users create, validate, and visualize rules.",
    github: "https://github.com/yourusername/decision-engine",
  },
  {
    name: "Real Time Weather Processing Application",
    image: "/weatherapp.png",
    tech: ["React Js", "Typescript", "Node.js", "Express.js", "Redis", "Socket.io"],
    description:
      "Live weather app with alerts for metro cities based on user thresholds.",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    name: "Edumax",
    image: "/edumax.png",
    tech: ["React Js", "Node Js", "Express Js", "MongoDb", "Recoil", "Tailwind CSS"],
    description:
      "A full-stack web app to manage education workflows.",
    github: "https://github.com/yourusername/edumax",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-white">
        Projects
      </h2>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj) => (
          <div
            key={proj.name}
            className="bg-[#181824] rounded-2xl shadow-2xl p-6 flex flex-col items-start transition-all hover:scale-[1.02] hover:shadow-purple-900/30"
          >
            {/* Project Image/Logo */}
            <div className="w-full flex justify-center mb-4">
              <div className="bg-white rounded-xl w-full h-40 flex items-center justify-center overflow-hidden">
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="object-contain w-full h-full p-4"
                />
              </div>
            </div>
            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#2b234a] text-purple-300 px-3 py-1 rounded-full text-sm font-semibold shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* Project Name */}
            <h3 className="text-2xl font-bold text-white mb-2">{proj.name}</h3>
            {/* Short Description */}
            <p className="text-[#bdbad3] text-base mb-4">
              {proj.description}
            </p>
            {/* View on GitHub Button */}
            <div className="w-full flex justify-center">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow hover:opacity-90 transition"
              >
                <FaGithub className="text-lg" />
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

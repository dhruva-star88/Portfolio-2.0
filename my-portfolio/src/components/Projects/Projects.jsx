const projects = [
  {
    name: "Budget Buddy",
    date: "Sep 2024",
    image: "/budgetbuddy.png", // replace with your actual image path
    tech: ["Next Js", "React Js", "Typescript", "Gemini AI", "PostgreSQL"],
    description:
      "Budget Buddy is a full-featured finance tracker web app designed to help users manage their personal finances efficiently.",
  },
  {
    name: "Decision Engine",
    date: "Nov 2024",
    image: "/decisionengine.png",
    tech: ["React Js", "Javascript", "MongoDb", "Node.js", "Express.js", "ShadCn"],
    description:
      "A Rule/Decision engine that takes rule as input, creates an Abstract Syntax Tree, displays it, and lets users validate rules and visualize results.",
  },
  {
    name: "Real Time Weather Processing Application",
    date: "Oct 2024",
    image: "/weatherapp.png",
    tech: ["React Js", "Typescript", "Node.js", "Express.js", "Redis", "Socket.io"],
    description:
      "A real-time weather processing app that fetches live weather of metro cities and sends alerts based on threshold set by users.",
  },
  {
    name: "Edumax",
    date: "Mar 2024 – May 2024",
    image: "/edumax.png",
    tech: ["React Js", "Node Js", "Express Js", "MongoDb", "Recoil", "Tailwind CSS"],
    description:
      "Edumax is a full-stack web application developed during my internship at CDW Technologies. The application was designed to manage education workflows.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-white">Projects</h2>
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, idx) => (
          <div
            key={proj.name}
            className="bg-[#181824] rounded-2xl shadow-2xl p-6 flex flex-col items-start transition-all hover:scale-[1.02] hover:shadow-purple-900/30"
          >
            {/* Project Image/Logo */}
            <div className="w-full flex justify-center mb-4">
              <div className="bg-white rounded-xl w-full h-40 flex items-center justify-center overflow-hidden">
                <img src={proj.image} alt={proj.name} className="object-contain w-full h-full p-4" />
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
            <h3 className="text-2xl font-bold text-white mb-1">{proj.name}</h3>
            {/* Date */}
            <p className="text-[#bdbad3] text-sm mb-2">{proj.date}</p>
            {/* Description (truncate if long) */}
            <p className="text-[#bdbad3] text-base line-clamp-3">
              {proj.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

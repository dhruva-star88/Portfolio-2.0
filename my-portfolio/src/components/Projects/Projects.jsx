import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Vogue Virtue",
    image: "/vv.png",
    tech: ["DjangoRestAPI", "React Js", "Typescript", "Random Forest Classifier", "Tailwind CSS", "Img2Vec", "Python" ],
    description:
      "Vogue Virtue is an AI-powered fashion recommendation system that analyzes user-uploaded clothing images to suggest stylish outfit combinations",
    github: "https://github.com/dhruva-star88/Vogue-Virtue",
  },
  {
    name: "Ping Now",
    image: "/chat.png",
    tech: ["React Js", "Javascript", "MongoDb", "Node.js", "Express.js", "Sockets.io"],
    description:
      "Ping Now is a real-time messaging app that connects users instantly for seamless communication and quick interactions.",
    github: "https://github.com/dhruva-star88/PingNow.git",
  },
  {
    name: "Farm Fleet",
    image: "/farm.png",
    tech: ["Javascript", "TailwindCSS", "Django", "SQLite3", "ChartJs"],
    description:
      "Farmfleet is a comprehensive farm management system that streamlines crop scheduling, resource allocation, and real-time productivity tracking for efficient agricultural operations.",
    github: "https://github.com/dhruva-star88/FarmFleet.git",
  },
  {
    name: "Alert Cam",
    image: "/cam.jpg",
    tech: ["Streamlit", "Python", "OpenCV"],
    description:
      "Aert Cam is a smart surveillance system that captures motion-triggered images and instantly sends them as email notifications for real-time monitoring.",
    github: "https://github.com/dhruva-star88/Webcam-detection",
  },
  {
    name: "TubeSift",
    image: "/scrape.jpeg",
    tech: ["Python", "YouTube Data API v3", "Pandas" ],
    description:
      "TubeSift is a powerful API-based tool that efficiently scrapes and extracts valuable data from YouTube for analytics and insights.",
    github: "https://github.com/dhruva-star88/Youtube-scraping-through-API.git",
  },
  {
    name: "AstroSnap",
    image: "/astro.png",
    tech: ["Python", "Streamlit", "Requests" ],
    description:
      "TAstroSnap fetches and showcases breathtaking daily astronomy images, bringing the wonders of the universe right to your screen.",
    github: "https://github.com/dhruva-star88/Astronomy-image-of-the-day",
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

// src/components/Skills.jsx

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "React JS", 
        src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K", 
        color: "#61DAFB" },
      { name: "Next JS", 
        src: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSIxNiIgZmlsbD0iIzAwMCIvPgogIDxwYXRoIGQ9Ik0yMCAyNEgyMlYxMkgxOFYyNCIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==", 
        color: "#000000" },
      { name: "Redux", src: "/redux.svg", color: "#764ABC" },
      { name: "Zustand", src: "/zustand.png", color: "#231F20" }, // Mascot color
      { name: "HTML", src: "/html5.svg", color: "#E34F26" },
      { name: "CSS", src: "/css3.svg", color: "#1572B6" },
      { name: "JavaScript", src: "/javascript.svg", color: "#F7DF1E" },
      { name: "Bootstrap", src: "/bootstrap.svg", color: "#7952B3" },
      { name: "Tailwind CSS", src: "/tailwind.svg", color: "#38BDF8" },
      { name: "Chart.js", src: "/chartjs.svg", color: "#FF6384" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node JS", src: "/nodejs.svg", color: "#339933" },
      { name: "Express JS", src: "/express.svg", color: "#000000" },
      { name: "Django", src: "/django.svg", color: "#092E20" },
      { name: "Flask", src: "/flask.svg", color: "#000000" },
      { name: "Firebase", src: "/firebase.svg", color: "#FFCA28" },
      { name: "MySQL", src: "/mysql.svg", color: "#4479A1" },
      { name: "PostgreSQL", src: "/postgresql.svg", color: "#336791" },
      { name: "MongoDB", src: "/mongodb.svg", color: "#47A248" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", src: "/mysql.svg", color: "#4479A1" },
      { name: "PostgreSQL", src: "/postgresql.svg", color: "#336791" },
      { name: "MongoDB", src: "/mongodb.svg", color: "#47A248" },
      { name: "SQLite3", src: "/sqlite.svg", color: "#003B57" },
      { name: "Firebase", src: "/firebase.svg", color: "#FFCA28" },
    ],
  },
  {
    category: "Tools & Libraries",
    skills: [
      { name: "Figma", src: "/figma.svg", color: "#F24E1E" },
      { name: "Notion", src: "/notion.svg", color: "#000000" },
      { name: "TensorFlow", src: "/tensorflow.svg", color: "#FF6F00" },
      { name: "Keras", src: "/keras.svg", color: "#D00000" },
      { name: "Pandas", src: "/pandas.svg", color: "#150458" },
      { name: "Docker", src: "/docker.svg", color: "#2496ED" },
      { name: "GitHub", src: "/github.svg", color: "#181717" },
      { name: "VS Code", src: "/vscode.svg", color: "#007ACC" },
      { name: "Postman", src: "/postman.svg", color: "#FF6C37" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-white">
        Skills
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {skillsData.map((cat) => (
          <div
            key={cat.category}
            className="bg-[#232234] border border-purple-500 rounded-2xl p-8 shadow-md"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              {cat.category}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 bg-[#191928] rounded-xl border border-gray-700 shadow-sm"
                >
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-10 h-10 object-contain" // Increased from w-6 h-6 to w-10 h-10
                    style={{
                      filter: `drop-shadow(0 0 6px ${skill.color})`
                    }}
                  />
                  <span className="text-lg text-white font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

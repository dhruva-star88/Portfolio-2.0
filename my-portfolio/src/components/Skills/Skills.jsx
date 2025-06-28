// src/components/Skills.jsx
import { skillsData } from "../../constant.js";

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
                    className="w-8 h-8 object-contain" // Increased from w-6 h-6 to w-10 h-10
                    // style={{
                    //   filter: `drop-shadow(0 0 6px ${skill.color})`
                    // }}
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

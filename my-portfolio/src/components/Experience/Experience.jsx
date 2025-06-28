import { useState } from "react";

const experiences = [
  {
  company: "SISA Information Security",
  logo: "/sisa.webp",
  title: "AIML R&D Intern",
  period: "May 2025 – Present",
  highlights: [
    "AI/ML & Red Teaming:",
    "- Conducted Red Team assessments and simulated adversarial attacks to evaluate and strengthen client security postures.",
    "- Developed and fine-tuned Large Language Models (LLMs) for automating phishing detection, incident triage, and security alert analysis.",
    "- Built and evaluated ML models to detect anomalous behavior and malicious patterns in network traffic and endpoint logs.",
    "",
    "LLM Research & Automation:",
    "- Researched prompt engineering and context-aware LLM applications for automating threat intelligence gathering.",
    "- Integrated LLM-based solutions into security operations workflows, reducing incident response time by automating report generation and log analysis.",
    ,
    
  ],
  short:
    "Red teaming, adversarial testing, and LLM automation: built AI/ML and LLM solutions for threat detection, security reporting, and process automation. Integrated models into SOC workflows, reducing response times and improving incident analysis."
}
,
  {
  company: "Souloxy",
  logo: "/souloxy.png",
  title: "SDE Intern",
  period: "Dec 2024 – March 2025",
  highlights: [
    "Backend Engineering:",
    "- Designed and implemented scalable REST APIs for the company’s core platform using Node.js and Express, ensuring low-latency communication between client and server.",
    "- Integrated Firebase Authentication and Firestore database to manage user sessions and real-time data updates.",
    "- Wrote efficient data models and implemented validation and error-handling to improve reliability and maintainability.",
    "",
    "Frontend Engineering:",
    "- Built responsive, dynamic UI components using React and Tailwind CSS, focusing on a seamless user experience across devices.",
    "- Developed chat functionality using React, Firebase, and Socket.io, enabling real-time communication between users.",
    "- Implemented Redux for robust state management in complex flows such as authentication and messaging.",
    "",
    "Collaboration & Impact:",
    "- Worked closely with a cross-functional team of designers and product managers to gather requirements and deliver features ahead of deadlines.",
    "- Actively participated in code reviews and Agile sprints, contributing to a 30% reduction in post-release bugs through thorough testing and documentation.",
    "- Demonstrated quick learning and adaptability by rapidly onboarding to new tech stacks and project requirements."
  ],
  short:
    "Developed REST APIs, implemented real-time chat and authentication features, and delivered responsive UIs using React, Redux, Node.js, and Firebase. Collaborated in Agile teams to ship reliable, scalable features for Souloxy’s core platform."
}

];


export default function Experience() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="experience" className="py-16 px-4">
      <h2 className="text-5xl font-extrabold text-center mb-4 text-white">
        Experience
      </h2>
      <div className="max-w-3xl mx-auto flex flex-col gap-24 mt-16">
        {experiences.map((exp, idx) => (
          <div
            key={exp.company}
            className="relative flex flex-col items-center group"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Floating rectangle logo */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
              <div className={`
                rounded-2xl
                shadow-xl
                border border-purple-400
                bg-[#232234]
                p-3
                w-32 h-20
                flex items-center justify-center
                transition-all duration-500
                ${hovered === idx ? "scale-110 shadow-purple-400/40" : ""}
              `}>
                <img
                  src={exp.logo}
                  alt={exp.company}
                  className="h-16 object-contain" // Increased from h-12 to h-16
                  style={{
                    filter: hovered === idx
                      ? "drop-shadow(0 0 16px #a78bfa)"
                      : "none"
                  }}
                />
              </div>
            </div>
            {/* Card */}
            <div
              className={`
                flex flex-col items-center
                transition-all duration-700
                border border-purple-400 rounded-3xl
                px-8 pt-20 pb-8 w-full
                bg-gradient-to-br from-[#191728] via-[#221c3a] to-[#191728]
                shadow-2xl
                hover:scale-[1.03] hover:shadow-purple-400/40
              `}
              style={{
                minHeight: hovered === idx ? "320px" : "150px",
                boxShadow: hovered === idx
                  ? "0 12px 48px 0 rgba(167,139,250,0.22)"
                  : "0 4px 24px 0 rgba(90,44,201,0.11)",
                zIndex: hovered === idx ? 10 : 1,
                transitionProperty: 'min-height, box-shadow, transform'
              }}
            >
              <div className="flex flex-col items-center gap-1 mb-2">
                <h3 className="text-2xl font-bold text-white text-center">
                  {exp.company}
                </h3>
                <div className="text-gray-300 text-base font-semibold text-center">
                  {exp.title}
                </div>
                <div className="text-gray-400 text-sm text-center">{exp.period}</div>
              </div>
              <div
                className={`
                  text-gray-200 font-medium text-base
                  whitespace-pre-line mt-2 text-center
                  overflow-hidden transition-all duration-700 ease-in-out
                `}
                style={{
                  maxHeight: hovered === idx ? 900 : 46,
                  opacity: hovered === idx ? 1 : 0.7,
                }}
              >
                {hovered === idx ? exp.highlights.join("\n") : exp.short}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import React from "react";
import {
  FaReact,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiAdobephotoshop, SiAdobepremierepro } from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Python", icon: <FaPython /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
  ];

  return (
    <section id="skills" className="py-16 bg-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 relative inline-block">
          Skills
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500"></span>
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 border-2 border-transparent rounded-lg transition-all transform hover:scale-110 hover:border-gradient-to-r hover:from-green-400 hover:to-blue-500"
            >
              <div className="text-5xl mb-4">{skill.icon}</div>
              <p className="text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

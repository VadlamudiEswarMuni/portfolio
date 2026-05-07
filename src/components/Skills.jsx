import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Git & GitHub",
  "REST APIs",
  "Responsive Web Design",
  "Frontend Development",
  "Full Stack Development",
];

const Skills = () => {
  return (
    <section className="py-12 bg-[#020b3d] text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 via-emerald-400 to-yellow-300 bg-clip-text text-transparent"
        >
          Skills
        </motion.h2>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mb-8 text-lg">
          Technologies and tools I use to build modern web applications.
        </p>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              transition={{ duration: 0.3 }}
              className="bg-[#11206b] border border-cyan-500 rounded-2xl p-5 text-center font-bold shadow-lg hover:shadow-cyan-500/40 transition"
            >
              {skill}
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;

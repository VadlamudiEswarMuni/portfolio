import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Personal & Freelance Projects",
    year: "2023 - Present",
    description:
      "Developed responsive and modern web applications using React.js, Tailwind CSS, and JavaScript. Built portfolio websites, business websites, and UI-based applications.",
  },

  {
    role: "Full Stack Developer",
    company: "RAM STORES Digital Projects",
    year: "2024 - Present",
    description:
      "Worked on full stack business applications including portfolio systems, business websites, product showcase platforms, and scalable web solutions using MERN stack technologies.",
  },

  {
    role: "Technical Events Secretary",
    company: "Vel Tech University",
    year: "2023 - 2024",
    description:
      "Organized and managed technical events, workshops, and coding sessions. Coordinated teams, handled registrations, and ensured smooth execution while improving leadership and teamwork skills.",
  },
];

const Experience = () => {
  return (
    <section className="py-16 bg-[#020b3d] text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 via-emerald-400 to-yellow-300 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mb-12 text-lg">
          My development experience and leadership journey.
        </p>

        {/* Experience Cards */}
        <div className="space-y-8">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              transition={{ duration: 0.4 }}
              className="bg-[#11206b] border border-cyan-500 rounded-3xl p-8 shadow-xl hover:shadow-cyan-500/40"
            >
              <h3 className="text-3xl font-bold text-cyan-300">
                {exp.role}
              </h3>

              <p className="text-emerald-300 text-xl mt-2">
                {exp.company}
              </p>

              <p className="text-yellow-300 mt-2">
                {exp.year}
              </p>

              <p className="text-gray-300 leading-8 mt-5">
                {exp.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Experience;

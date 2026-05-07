import React from "react";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Full Stack Portfolio Development",
    description:
      "Designed and developed a complete responsive developer portfolio using React.js, Tailwind CSS, Framer Motion, and modern UI principles.",
  },

  {
    title: "Business Website Development",
    description:
      "Built and managed websites and digital platforms for RAM STORES and related business projects with responsive layouts and modern design.",
  },

  {
    title: "Frontend Development Skills",
    description:
      "Strong understanding of React.js, responsive web design, UI/UX development, animations, and scalable frontend architecture.",
  },

  {
    title: "Technical Events Leadership",
    description:
      "Successfully organized and coordinated technical workshops, coding events, and student technical activities at Vel Tech University.",
  },

  {
    title: "Project Development Experience",
    description:
      "Developed multiple real-world projects including business websites, portfolio systems, and tourism-related web applications.",
  },

  {
    title: "Continuous Learning",
    description:
      "Continuously learning modern technologies including MERN stack, deployment workflows, APIs, and scalable applications.",
  },
];

const Achievements = () => {
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
          Achievements
        </motion.h2>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mb-12 text-lg">
          Highlights of my technical journey and accomplishments.
        </p>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              transition={{ duration: 0.4 }}
              className="bg-[#11206b] border border-cyan-500 rounded-3xl p-8 shadow-xl hover:shadow-cyan-500/40"
            >

              <h3 className="text-2xl font-bold text-cyan-300 mb-4">
                {achievement.title}
              </h3>

              <p className="text-gray-300 leading-8">
                {achievement.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Achievements;

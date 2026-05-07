import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor of Technology (B.Tech)",
    school: "Vel Tech University",
    stream: "Computer Science Engineering",
    year: "2022 - 2026",
    score: "CGPA: Add Your Score Here",
    description:
      "Completed B.Tech in Computer Science Engineering with strong interest in Full Stack Web Development, Frontend Technologies, Backend Development, UI/UX Design, and scalable modern applications.",
  },

  {
    title: "Intermediate",
    school: "MPC Stream",
    stream: "Mathematics, Physics & Chemistry",
    year: "2020 - 2022",
    score: "Percentage: Add Your Score Here",
    description:
      "Completed Intermediate education with focus on analytical thinking, mathematics, and problem-solving skills.",
  },

  {
    title: "SSC / 10th Class",
    school: "Secondary School Education",
    stream: "General Education",
    year: "2019 - 2020",
    score: "GPA: Add Your Score Here",
    description:
      "Successfully completed secondary school education with good academic performance and foundational knowledge.",
  },
];

const Education = () => {
  return (
    <section className="py-16 bg-[#03114f] text-white">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-3 bg-gradient-to-r from-cyan-400 via-emerald-400 to-yellow-300 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        {/* Subtitle */}
        <p className="text-center text-gray-300 mb-12 text-lg">
          My academic background and learning journey.
        </p>

        {/* Education Cards */}
        <div className="space-y-8">

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.02,
                y: -4,
              }}
              transition={{ duration: 0.4 }}
              className="bg-[#11206b] border border-cyan-500 rounded-3xl p-8 shadow-xl hover:shadow-cyan-500/40"
            >
              <h3 className="text-3xl font-bold text-cyan-300">
                {edu.title}
              </h3>

              <p className="text-emerald-300 text-xl mt-2">
                {edu.school}
              </p>

              <p className="text-yellow-300 mt-2">
                {edu.stream}
              </p>

              <p className="text-gray-300 mt-2">
                {edu.year}
              </p>

              <p className="text-cyan-200 mt-2 font-semibold">
                {edu.score}
              </p>

              <p className="text-gray-300 leading-8 mt-5">
                {edu.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Education;

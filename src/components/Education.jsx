import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      institution: "Vel Tech University",
      field: "Computer Science & Engineering",
      year: "2021 - 2025",
      score: "CGPA: 6.95 / 10",
      description:
        "Completed Bachelor of Technology in Computer Science & Engineering with strong interest in Full Stack Development, Frontend Technologies, Backend Development, and scalable modern web applications.",
    },

    {
      degree: "Intermediate",
      institution: "MPC Stream",
      field: "Mathematics, Physics & Chemistry",
      year: "2019 - 2021",
      score: "Percentage: 66%",
      description:
        "Completed Intermediate education with focus on analytical thinking, mathematics, and problem-solving skills.",
    },

    {
      degree: "SSC / 10th Class",
      institution: "Secondary School Education",
      field: "State Board",
      year: "2018 - 2019",
      score: "GPA: 9.0 / 10",
      description:
        "Successfully completed secondary school education with excellent academic performance and strong foundational knowledge.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#020b5c] text-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
          Education
        </h2>

        <p className="text-center text-gray-300 text-lg mb-16">
          My academic background and educational journey.
        </p>

        {/* Cards */}
        <div className="space-y-10">

          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-[#12206f] border border-cyan-500 rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition duration-300"
            >

              <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                {edu.degree}
              </h3>

              <h4 className="text-pink-400 text-xl mb-2">
                {edu.institution}
              </h4>

              <p className="text-yellow-300 font-semibold mb-2">
                {edu.field}
              </p>

              <p className="text-green-400 font-semibold mb-2">
                {edu.score}
              </p>

              <p className="text-gray-400 mb-4">
                📅 {edu.year}
              </p>

              <p className="text-gray-300 leading-8 text-lg">
                {edu.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Education;

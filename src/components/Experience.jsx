function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Personal Projects",
      year: "2024 - Present",
      description:
        "Building modern, responsive, and user-friendly web applications using React.js, Tailwind CSS, and JavaScript.",
    },

    {
      role: "Full Stack Developer",
      company: "RAM STORES Digital Projects",
      year: "2024 - Present",
      description:
        "Working on full stack business applications including portfolio systems, business websites, product showcase platforms, and scalable MERN stack projects.",
    },

    {
      role: "Technical Events Secretary",
      company: "Vel Tech University",
      year: "2023 - 2024",
      description:
        "Organized and managed technical events, workshops, coding sessions, and student coordination activities.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#020b3d]">
      
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
          Experience
        </h2>

        <p className="text-center text-gray-300 mb-16 text-lg">
          My development experience and leadership journey.
        </p>

        <div className="space-y-10">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-[#08145f] border border-cyan-500 rounded-3xl p-8 shadow-lg hover:scale-[1.02] transition duration-300"
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-2">
                {exp.role}
              </h3>

              <h4 className="text-pink-400 text-xl mb-2">
                {exp.company}
              </h4>

              <p className="text-green-400 mb-4 font-semibold">
                📅 {exp.year}
              </p>

              <p className="text-gray-300 leading-8 text-lg">
                {exp.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;

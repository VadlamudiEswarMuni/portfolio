function Skills() {
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

  return (
    <section className="py-24 px-6 bg-[#020b3d]">
      
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
          Skills
        </h2>

        <p className="text-center text-gray-300 mb-16 text-lg">
          Technologies and tools I use to build modern web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#12206f] border border-cyan-500 rounded-3xl py-8 px-6 text-center text-white text-2xl font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;

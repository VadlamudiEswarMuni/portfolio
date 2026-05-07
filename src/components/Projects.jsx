const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      tech: "React.js • Tailwind CSS • Vite",
      description:
        "Modern responsive personal portfolio website with beautiful UI, animations, responsive layouts, and professional sections.",
    },
    {
      title: "RAM STORES Business Website",
      tech: "MERN Stack",
      description:
        "Business website developed for RAM STORES including product showcase, digital branding, responsive design, and scalable architecture.",
    },
    {
      title: "Tourism Website",
      tech: "React.js • Node.js",
      description:
        "Travel and tourism platform with destination showcase, responsive UI, booking-friendly layout, and modern design.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-[#020b5c]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center text-cyan-400 mb-4">
          Projects
        </h2>

        <p className="text-center text-gray-300 mb-16 text-lg">
          Some of my recent development projects and works.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#16246d] border border-cyan-500 rounded-3xl p-8 shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-pink-400 mb-4">
                {project.title}
              </h3>

              <p className="text-yellow-300 mb-4 font-semibold">
                {project.tech}
              </p>

              <p className="text-gray-300 leading-8">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

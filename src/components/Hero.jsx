import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020659] text-white px-6 py-20">

      <div className="max-w-6xl mx-auto text-center">

        {/* Profile Section */}
        <div className="flex justify-center mb-10">
          <div className="relative flex items-center justify-center">

            {/* Aura Background */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-pink-500 opacity-40 blur-3xl animate-pulse"></div>

            <div className="absolute w-80 h-80 md:w-[28rem] md:h-[28rem] rounded-full bg-cyan-400 opacity-20 blur-[120px]"></div>

            {/* Profile Image */}
            <img
              src="/profile.jpg"
              alt="Vadlamudi Eswar Muni"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-pink-400 shadow-[0_0_40px_rgba(255,0,255,0.7)]"
            />

          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-yellow-300 text-transparent bg-clip-text">
          Vadlamudi Eswar Muni
        </h1>

        {/* Role */}
        <h2 className="text-2xl md:text-4xl font-semibold text-pink-300 mb-8">
          Frontend & Full Stack Developer
        </h2>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-gray-300 leading-relaxed mb-10">
          Passionate Frontend and Full Stack Developer skilled in React.js,
          Node.js, Express.js, MongoDB, and modern web technologies.
          Building scalable and responsive real-world applications.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-cyan-400 text-white font-bold text-lg shadow-lg hover:scale-105 transition duration-300"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 rounded-xl border border-pink-400 text-white font-bold text-lg hover:bg-pink-500 hover:text-white transition duration-300"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;

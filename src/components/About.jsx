import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const About = () => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#020024] via-[#090979] to-[#ff0080] text-white overflow-hidden flex items-center justify-center px-6">

      {/* PARTICLES BACKGROUND */}

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },

          fpsLimit: 120,

          particles: {
            color: {
              value: [
                "#00ffff",
                "#ff00ff",
                "#00ff99",
                "#ffd700",
                "#ff4d4d",
              ],
            },

            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },

            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1.5,
              straight: false,
            },

            number: {
              density: {
                enable: true,
              },
              value: 60,
            },

            opacity: {
              value: 0.5,
            },

            shape: {
              type: "circle",
            },

            size: {
              value: { min: 1, max: 4 },
            },
          },

          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* MAIN CONTENT */}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-5xl"
      >

        {/* PROFILE IMAGE */}

        <motion.img
          src="/profile.jpg"
          alt="Profile"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
          className="w-56 h-56 rounded-full mx-auto border-4 border-pink-500 shadow-[0_0_60px_rgba(255,0,255,0.7)] object-cover mb-10"
        />

        {/* NAME */}

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Vadlamudi Eswar Muni
        </motion.h1>

        {/* TYPING ANIMATION */}

        <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent mb-8">

          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Full Stack Developer",
              2000,
              "React.js Developer",
              2000,
              "MERN Stack Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </div>

        {/* DESCRIPTION */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-200 text-lg md:text-2xl leading-relaxed max-w-4xl mx-auto mb-10"
        >
          Passionate Frontend and Full Stack Developer skilled in React.js,
          Node.js, Express.js, MongoDB, and modern web technologies.
          Building scalable and responsive real-world applications.
        </motion.p>

        {/* BUTTONS */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl transition duration-300 hover:scale-110"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-pink-500 bg-black/20 backdrop-blur-lg px-8 py-4 rounded-2xl text-xl font-bold shadow-2xl transition duration-300 hover:scale-110"
          >
            Download Resume
          </a>

        </motion.div>

        {/* CONTACT LINKS */}

        <div className="flex flex-col gap-4 items-center text-xl">

          <a
            href="mailto:vadlamudieswarmuni@gmail.com"
            className="text-cyan-300 underline hover:text-pink-300 transition"
          >
            📧 vadlamudieswarmuni@gmail.com
          </a>

          <a
            href="tel:+919177306250"
            className="text-cyan-300 underline hover:text-pink-300 transition"
          >
            📱 +91 9177306250
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 underline hover:text-pink-300 transition"
          >
            🔗 GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-cyan-300 underline hover:text-pink-300 transition"
          >
            💼 LinkedIn
          </a>

        </div>

      </motion.div>

    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#020b3d] border-t border-cyan-500 py-10 text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 text-center"
      >

        {/* Name */}
        <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-emerald-400 to-yellow-300 bg-clip-text text-transparent">
          Vadlamudi Eswar Muni
        </h2>

        {/* Role */}
        <p className="text-gray-300 text-lg mb-6">
          Frontend & Full Stack Developer
        </p>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">

          <a
            href="mailto:vadlamudieswarmuni@gmail.com"
            className="text-cyan-400 hover:text-cyan-300 text-lg font-semibold underline"
          >
            📧 Gmail
          </a>

          <a
            href="tel:+919177306250"
            className="text-emerald-400 hover:text-emerald-300 text-lg font-semibold underline"
          >
            📱 Contact
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="text-yellow-300 hover:text-yellow-200 text-lg font-semibold underline"
          >
            🔗 GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="text-pink-400 hover:text-pink-300 text-lg font-semibold underline"
          >
            💼 LinkedIn
          </a>

        </div>

        {/* Bottom Text */}
        <p className="text-gray-400 text-sm">
          © 2026 Vadlamudi Eswar Muni. All Rights Reserved.
        </p>

      </motion.div>

    </footer>
  );
};

export default Footer;

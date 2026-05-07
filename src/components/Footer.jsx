function Footer() {
  return (
    <footer className="bg-[#020b3d] border-t border-cyan-500 py-10 px-6 text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
        Vadlamudi Eswar Muni
      </h2>

      <p className="text-gray-300 mb-6 text-lg">
        Frontend & Full Stack Developer
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-lg font-semibold mb-6">
        
        <a
          href="mailto:vadlamudieswarmuni@gmail.com"
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          📧 Gmail
        </a>

        <a
          href="tel:+919177306250"
          className="text-green-400 hover:text-green-300 transition"
        >
          📱 Contact
        </a>

        <a
          href="https://github.com/VadlamudiEswarMuni"
          target="_blank"
          rel="noreferrer"
          className="text-yellow-400 hover:text-yellow-300 transition"
        >
          🔗 GitHub
        </a>

        <a
          href="https://linkedin.com/in/vadlamudi-eswar-muni"
          target="_blank"
          rel="noreferrer"
          className="text-pink-400 hover:text-pink-300 transition"
        >
          💼 LinkedIn
        </a>

      </div>

      <p className="text-gray-400 text-sm">
        © 2026 Vadlamudi Eswar Muni. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;

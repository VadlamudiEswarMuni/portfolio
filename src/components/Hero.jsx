const Hero = () => {
  return (
    <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-950 via-purple-900 to-pink-700">
      <img
        src="/profile.jpg"
        alt="profile"
        className="w-40 h-40 rounded-full mx-auto border-4 border-pink-500 shadow-[0_0_40px_#ff00ff]"
      />

      <h1 className="text-5xl md:text-7xl font-bold mt-8 bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
        Vadlamudi Eswar Muni
      </h1>

      <h2 className="text-2xl md:text-4xl font-semibold text-pink-300 mt-4">
        Frontend Developer
      </h2>

      <p className="max-w-4xl mx-auto text-gray-200 mt-8 text-lg leading-8">
        Passionate Frontend and Full Stack Developer skilled in React.js,
        Node.js, Express.js, MongoDB, and modern web technologies.
      </p>
    </section>
  );
};

export default Hero;


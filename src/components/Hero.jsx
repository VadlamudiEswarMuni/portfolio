const Hero = () => {
  return (
    <section className="text-center py-20 px-6 bg-gradient-to-r from-blue-950 via-purple-900 to-pink-700">
      
      <div className="flex justify-center">
        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-pink-500 blur-3xl opacity-60 animate-pulse"></div>

          <div className="p-2 rounded-full bg-gradient-to-r from-cyan-400 via-pink-500 to-orange-400 shadow-[0_0_60px_rgba(255,0,255,0.8)]">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white"
            />
          </div>

        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold mt-10 bg-gradient-to-r from-cyan-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
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

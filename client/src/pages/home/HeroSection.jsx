const HeroSection = () => {
  return (
    <section
      className="text-white py-20 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="container mx-auto px-4 bg-black/50 p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to SkillSnap</h1>
        <p className="text-lg md:text-xl mb-6">Learn anything, anytime, anywhere</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

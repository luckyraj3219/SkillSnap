const StatsSection = () => {
  const stats = [
    {
      icon: "📚",
      title: "Courses Available",
      value: "100+",
      description: "Comprehensive courses across various domains",
      gradient: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: "👥",
      title: "Students Enrolled",
      value: "10,000+",
      description: "Active learners from around the world",
      gradient: "from-green-500 to-teal-600",
      bgGradient: "from-green-50 to-teal-50"
    },
    {
      icon: "⭐",
      title: "Average Rating",
      value: "4.8/5",
      description: "Consistently high student satisfaction",
      gradient: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: "🏆",
      title: "Certificates Issued",
      value: "8,500+",
      description: "Professional certifications earned",
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide mb-4">
            Our Impact
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Thousands of 
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Learners</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing community of successful learners who have transformed their careers through SkillSnap.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${stat.bgGradient} p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-6 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <span className="filter drop-shadow-sm">{stat.icon}</span>
              </div>

              {/* Content */}
              <div className="relative">
                <h4 className="text-lg font-semibold text-gray-700 mb-2 group-hover:text-gray-800 transition-colors">
                  {stat.title}
                </h4>
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors">
                  {stat.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-400 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs text-white font-bold">+</span>
              </div>
            </div>
            <span className="text-gray-600 font-medium">Join thousands of successful learners</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
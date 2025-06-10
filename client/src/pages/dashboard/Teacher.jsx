import React from 'react';

const Teacher = ({ darkMode }) => {
  
  // Original data preserved
  const classesToTeach = [
    { title: 'React Basics', date: '2025-06-05', time: '11:00 AM' },
    { title: 'Node.js Advanced', date: '2025-06-08', time: '3:00 PM' },
  ];
  
  const studentsCount = 120;

  // Additional data for enhanced features
  const recentActivity = [
    { type: 'assignment', title: 'JavaScript Fundamentals Quiz', student: 'Sarah Johnson', time: '2 hours ago' },
    { type: 'message', title: 'New message from Alex Chen', content: 'Question about async/await', time: '4 hours ago' },
    { type: 'submission', title: 'React Project submitted', student: 'Mike Davis', time: '1 day ago' },
  ];

  const upcomingDeadlines = [
    { title: 'Assignment: React Components', dueDate: '2025-06-06', course: 'React Basics' },
    { title: 'Quiz: Node.js Modules', dueDate: '2025-06-09', course: 'Node.js Advanced' },
  ];

  const achievements = [
    { title: 'Top Rated Instructor', icon: '🏆', description: '4.9/5 rating' },
    { title: 'Course Completion', icon: '🎯', description: '95% completion rate' },
    { title: 'Student Favorite', icon: '❤️', description: '98% recommend' },
  ];

  const quickStats = [
    { label: 'Active Courses', value: '8', icon: '📚', color: 'text-blue-600' },
    { label: 'This Week\'s Classes', value: '12', icon: '📅', color: 'text-green-600' },
    { label: 'Pending Reviews', value: '23', icon: '📝', color: 'text-orange-600' },
    { label: 'Messages', value: '7', icon: '💬', color: 'text-purple-600' },
  ];

  const baseClasses = darkMode 
    ? 'bg-gray-900 text-white min-h-screen' 
    : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900 min-h-screen';

  return (
    <div className={baseClasses}>
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Teacher Dashboard
              </h1>
              <p className={`mt-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Welcome back! Here's what's happening with your classes today.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <button className={`p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 shadow-lg'}`}>
                <span className="text-xl">🔔</span>
              </button>
              <button className={`p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 shadow-lg'}`}>
                <span className="text-xl">⚙️</span>
              </button>
            </div>
          </div>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-lg'}`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
                  <p className="text-3xl font-bold mt-1">{stat.value}</p>
                </div>
                <span className={`text-3xl ${stat.color}`}>{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Original Classes to Teach Section - Enhanced */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                  Classes to Teach
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'}`}>
                  {classesToTeach.length} upcoming
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {classesToTeach.map((cls, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl border hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer ${darkMode ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50' : 'bg-white/70 border-white/20 shadow-lg hover:bg-white/90'}`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">📚</span>
                      <span className="text-lg">→</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-1">
                        <span>📅</span>
                        <span>{cls.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>🕐</span>
                        <span>{cls.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Enhanced Students Section */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Students Overview
              </h2>
              <div className={`p-8 rounded-2xl border backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-lg'}`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {studentsCount}
                    </p>
                    <p className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Students Enrolled</p>
                  </div>
                  <span className="text-6xl opacity-20">👥</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-500">85%</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Active</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-500">92%</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Passing</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-purple-500">4.8</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Avg Rating</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Activity */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Recent Activity
              </h2>
              <div className="space-y-3">
                {recentActivity.map((activity, index) => (
                  <div key={index} className={`p-4 rounded-xl border transition-all hover:shadow-md ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{activity.title}</h4>
                        {activity.student && (
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>by {activity.student}</p>
                        )}
                        {activity.content && (
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{activity.content}</p>
                        )}
                      </div>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Achievements */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-orange-500 bg-clip-text text-transparent">
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-4 rounded-xl border transition-all hover:scale-105 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{achievement.icon}</span>
                      <div>
                        <h4 className="font-semibold">{achievement.title}</h4>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Upcoming Deadlines */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
                Upcoming Deadlines
              </h2>
              <div className="space-y-3">
                {upcomingDeadlines.map((deadline, index) => (
                  <div key={index} className={`p-4 rounded-xl border transition-all hover:shadow-md ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <h4 className="font-semibold">{deadline.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{deadline.course}</p>
                    <p className={`text-sm font-medium text-red-500`}>Due: {deadline.dueDate}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Actions */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-cyan-500 bg-clip-text text-transparent">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📝', label: 'Create Quiz', color: 'bg-blue-500' },
                  { icon: '👥', label: 'View Students', color: 'bg-green-500' },
                  { icon: '💬', label: 'Messages', color: 'bg-purple-500' },
                  { icon: '📊', label: 'Analytics', color: 'bg-orange-500' },
                ].map((action, index) => (
                  <button
                    key={index}
                    className={`p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg ${action.color} text-white flex flex-col items-center`}
                  >
                    <span className="text-2xl mb-2">{action.icon}</span>
                    <span className="text-sm font-medium">{action.label}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
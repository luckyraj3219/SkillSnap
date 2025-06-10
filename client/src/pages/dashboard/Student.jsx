import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Student = ({ darkMode }) => {
  const { user } = useAuth();

  const learningGoals = [
    'Complete React Fundamentals',
    'Master JavaScript ES6',
    'Build a Full-Stack Project',
  ];

  const upcomingClasses = [
    { title: 'Advanced React Patterns', date: '2025-06-05', time: '10:00 AM' },
    { title: 'Node.js for Beginners', date: '2025-06-07', time: '2:00 PM' },
    { title: 'UI/UX Design Principles', date: '2025-06-10', time: '4:00 PM' },
  ];

  const certificates = [
    { title: 'HTML & CSS Basics', date: '2025-05-20' },
    { title: 'JavaScript Intermediate', date: '2025-05-25' },
  ];

  const courseStats = [
    { label: 'Enrolled Courses', value: 5, icon: '📚', change: '+1 this week', color: 'text-blue-600' },
    { label: 'Completed', value: 2, icon: '✅', change: '+1 this month', color: 'text-green-600' },
    { label: 'In Progress', value: 3, icon: '📖', change: 'Currently active', color: 'text-orange-600' },
    { label: 'Certificates', value: certificates.length, icon: '🎓', change: '+2 earned', color: 'text-purple-600' },
  ];

  const recentActivities = [
    { icon: '📖', title: 'Started React Fundamentals Course', time: '2 hours ago', status: 'success', description: 'Introduction to React components' },
    { icon: '✅', title: 'Completed JavaScript Basics', time: '1 day ago', status: 'success', description: 'Final quiz completed with 95% score' },
    { icon: '🏆', title: 'Earned HTML Certificate', time: '3 days ago', status: 'success', description: 'Certificate automatically generated' },
    { icon: '💡', title: 'Assignment Submitted', time: '1 week ago', status: 'success', description: 'CSS Flexbox project submitted' }
  ];

  const learningProgress = [
    { course: 'React Fundamentals', progress: 65, color: 'bg-blue-500' },
    { course: 'JavaScript ES6', progress: 80, color: 'bg-green-500' },
    { course: 'Node.js Basics', progress: 30, color: 'bg-orange-500' },
  ];

  const quickActions = [
    { icon: '📚', label: 'Browse Courses', color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: '📝', label: 'Take Quiz', color: 'bg-green-500 hover:bg-green-600' },
    { icon: '💬', label: 'Discussion', color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: '📊', label: 'Progress', color: 'bg-orange-500 hover:bg-orange-600' },
  ];

  const baseClasses = darkMode
    ? 'bg-gray-900 text-white min-h-screen'
    : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-900 min-h-screen';

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className={baseClasses}>
      <div className="container mx-auto px-6 py-8">
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Student Dashboard</h1>
              <p className={`mt-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Welcome back, {user?.name || 'Student'}! Continue your learning journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'}`}>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Active Learner</span>
              </div>
              <button className={`p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 shadow-lg'}`}>
                <span className="text-xl">🔔</span>
              </button>
            </div>
          </div>
        </header>

        <section className="space-y-4 mb-8">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">User Information</h2>
          <div className={`p-8 rounded-2xl border backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-lg'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse mr-2"></span>
                  <span className="text-lg font-bold text-blue-500">{user?.name || 'N/A'}</span>
                </div>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Student Name</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></span>
                  <span className="text-lg font-bold text-green-500">{user?.email || 'N/A'}</span>
                </div>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Email Address</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse mr-2"></span>
                  <span className="text-lg font-bold text-purple-500">{new Date().toLocaleDateString()}</span>
                </div>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Member Since</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {courseStats.map((stat, index) => (
            <div key={index} className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-lg'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-3xl ${stat.color}`}>{stat.icon}</span>
                <span className={`text-sm font-medium px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>{stat.change}</span>
              </div>
              <div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">Learning Progress</h2>
              <div className={`p-6 rounded-2xl border backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-lg'}`}>
                <div className="space-y-6">
                  {learningProgress.map((course, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">{course.course}</span>
                        <span className="text-sm font-bold">{course.progress}%</span>
                      </div>
                      <div className={`w-full rounded-full h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                        <div className={`${course.color} h-3 rounded-full transition-all duration-300`} style={{ width: `${course.progress}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Recent Activity</h2>
              <div className="space-y-3">
                {recentActivities.map((activity, index) => (
                  <div key={index} className={`p-4 rounded-xl border transition-all hover:shadow-md ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <span className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(activity.status).replace('text-', 'bg-')}`}></span>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-xl">{activity.icon}</span>
                            <h4 className="font-semibold">{activity.title}</h4>
                          </div>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{activity.description}</p>
                        </div>
                      </div>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">Upcoming Classes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {upcomingClasses.map((cls, index) => (
                  <div key={index} className={`p-6 rounded-xl border transition-all hover:scale-105 hover:shadow-lg ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <div className="flex items-start justify-between mb-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${darkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-100 text-blue-700'}`}>Upcoming</span>
                      <span className="text-2xl">📚</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{cls.title}</h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{cls.date} at {cls.time}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">Learning Goals</h2>
              <div className="space-y-3">
                {learningGoals.map((goal, index) => (
                  <div key={index} className={`p-4 rounded-xl border transition-all hover:scale-105 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <div className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                      <span className="font-medium">{goal}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-amber-600 to-yellow-400 bg-clip-text text-transparent">Certificates</h2>
              <div className="space-y-3">
                {certificates.map((cert, index) => (
                  <div key={index} className={`p-4 rounded-xl border transition-all hover:scale-105 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="text-xl">🎓</span>
                          <h4 className="font-semibold">{cert.title}</h4>
                        </div>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Earned on {cert.date}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${darkMode ? 'bg-yellow-900/30 text-yellow-300' : 'bg-yellow-100 text-yellow-700'}`}>Verified</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">Quick Actions</h2>
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <button key={index} className={`p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg ${action.color} text-white flex flex-col items-center space-y-2`}>
                    <span className="text-2xl">{action.icon}</span>
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

export default Student;

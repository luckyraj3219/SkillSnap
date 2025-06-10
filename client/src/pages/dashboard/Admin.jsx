import React from 'react';

const Admin = ({ darkMode }) => {
  // Original data preserved
  const totalUsers = 452;
  const activeCourses = 34;
  const systemStatus = 'All Systems Operational';

  // Additional data for enhanced features
  const systemMetrics = [
    { label: 'Server Uptime', value: '99.9%', icon: '🟢', trend: '+0.1%' },
    { label: 'Database Health', value: 'Optimal', icon: '💾', trend: 'stable' },
    { label: 'Response Time', value: '124ms', icon: '⚡', trend: '-12ms' },
    { label: 'Storage Used', value: '68%', icon: '💿', trend: '+2%' },
  ];

  const recentActivity = [
    { type: 'user', action: 'New user registration', user: 'john.doe@email.com', time: '2 minutes ago', status: 'success' },
    { type: 'course', action: 'Course "Advanced React" published', user: 'Sarah Wilson', time: '15 minutes ago', status: 'success' },
    { type: 'system', action: 'Database backup completed', user: 'System', time: '1 hour ago', status: 'success' },
    { type: 'alert', action: 'High traffic detected', user: 'Monitoring', time: '2 hours ago', status: 'warning' },
  ];

  const quickStats = [
    { label: 'Total Users', value: totalUsers, icon: '👥', change: '+23 today', color: 'text-blue-600' },
    { label: 'Active Courses', value: activeCourses, icon: '📚', change: '+2 this week', color: 'text-green-600' },
    { label: 'Revenue Today', value: '$2,847', icon: '💰', change: '+12%', color: 'text-purple-600' },
    { label: 'Support Tickets', value: '7', icon: '🎫', change: '-3 resolved', color: 'text-orange-600' },
  ];

  const adminActions = [
    { label: 'Manage Users', icon: '👥', color: 'bg-red-600 hover:bg-red-700' },
    { label: 'Manage Courses', icon: '📚', color: 'bg-blue-600 hover:bg-blue-700' },
    { label: 'Analytics', icon: '📊', color: 'bg-green-600 hover:bg-green-700' },
    { label: 'Settings', icon: '⚙️', color: 'bg-purple-600 hover:bg-purple-700' },
    { label: 'Payments', icon: '💳', color: 'bg-yellow-600 hover:bg-yellow-700' },
    { label: 'Reports', icon: '📋', color: 'bg-indigo-600 hover:bg-indigo-700' },
  ];

  const pendingApprovals = [
    { type: 'Course', title: 'Python for Data Science', author: 'Dr. Smith', submitted: '2 days ago' },
    { type: 'User', title: 'Instructor Application', author: 'Mike Johnson', submitted: '1 day ago' },
    { type: 'Content', title: 'Video Update Request', author: 'Lisa Chen', submitted: '3 hours ago' },
  ];

  const baseClasses = darkMode 
    ? 'bg-gray-900 text-white min-h-screen' 
    : 'bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 text-gray-900 min-h-screen';

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
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className={`mt-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                System control center - Monitor and manage your platform
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`px-4 py-2 rounded-full flex items-center space-x-2 ${systemStatus === 'All Systems Operational' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">{systemStatus}</span>
              </div>
              <button className={`p-3 rounded-full transition-all hover:scale-110 ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50 shadow-lg'}`}>
                <span className="text-xl">🔔</span>
              </button>
            </div>
          </div>
        </header>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <div key={index} className={`p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-lg'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-3xl ${stat.color}`}>{stat.icon}</span>
                <span className={`text-sm font-medium px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Enhanced System Overview */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-red-500 bg-clip-text text-transparent">
                  System Overview
                </h2>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${darkMode ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-700'}`}>
                  All Systems Online
                </span>
              </div>
              
              {/* Original System Info - Enhanced */}
              <div className={`p-8 rounded-2xl border backdrop-blur-sm ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-lg'}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-500 mb-2">{totalUsers}</div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Total Registered Users</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">{activeCourses}</div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Active Courses</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2"></span>
                      <span className="text-lg font-bold text-green-500">Online</span>
                    </div>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{systemStatus}</p>
                  </div>
                </div>
              </div>

              {/* System Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {systemMetrics.map((metric, index) => (
                  <div key={index} className={`p-4 rounded-xl border transition-all hover:shadow-md ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{metric.icon}</span>
                        <div>
                          <h4 className="font-semibold">{metric.label}</h4>
                          <p className="text-2xl font-bold">{metric.value}</p>
                        </div>
                      </div>
                      <span className={`text-sm font-medium px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
                        {metric.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Enhanced Admin Actions */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent">
                Admin Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {adminActions.map((action, index) => (
                  <button
                    key={index}
                    className={`p-6 rounded-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-xl flex flex-col items-center space-y-3 ${action.color}`}
                  >
                    <span className="text-3xl">{action.icon}</span>
                    <span className="font-semibold">{action.label}</span>
                  </button>
                ))}
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
                      <div className="flex items-start space-x-3">
                        <span className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(activity.status).replace('text-', 'bg-')}`}></span>
                        <div className="flex-1">
                          <h4 className="font-semibold">{activity.action}</h4>
                          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>by {activity.user}</p>
                        </div>
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
            {/* Pending Approvals */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                Pending Approvals
              </h2>
              <div className="space-y-3">
                {pendingApprovals.map((item, index) => (
                  <div key={index} className={`p-4 rounded-xl border transition-all hover:scale-105 ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                    <div className="flex items-start justify-between mb-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-100 text-orange-700'}`}>
                        {item.type}
                      </span>
                      <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.submitted}</span>
                    </div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>by {item.author}</p>
                    <div className="flex space-x-2 mt-3">
                      <button className="px-3 py-1 bg-green-500 text-white text-xs rounded hover:bg-green-600 transition">
                        Approve
                      </button>
                      <button className="px-3 py-1 bg-red-500 text-white text-xs rounded hover:bg-red-600 transition">
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* System Health */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-green-600 to-teal-500 bg-clip-text text-transparent">
                System Health
              </h2>
              <div className={`p-6 rounded-xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/70 border-white/20 shadow-sm'}`}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">CPU Usage</span>
                    <span className="text-sm font-bold">23%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '23%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Memory Usage</span>
                    <span className="text-sm font-bold">67%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Disk Usage</span>
                    <span className="text-sm font-bold">45%</span>
                  </div>
                  <div className={`w-full rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Tools */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                Quick Tools
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: '📊', label: 'Export Data', color: 'bg-blue-500' },
                  { icon: '🔄', label: 'Sync Users', color: 'bg-green-500' },
                  { icon: '🛡️', label: 'Security', color: 'bg-red-500' },
                  { icon: '📧', label: 'Send Email', color: 'bg-purple-500' },
                ].map((tool, index) => (
                  <button
                    key={index}
                    className={`p-4 rounded-xl transition-all hover:scale-105 hover:shadow-lg ${tool.color} text-white flex flex-col items-center`}
                  >
                    <span className="text-2xl mb-2">{tool.icon}</span>
                    <span className="text-sm font-medium">{tool.label}</span>
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

export default Admin;
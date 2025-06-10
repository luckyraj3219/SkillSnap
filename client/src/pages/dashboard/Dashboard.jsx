'use client';
import React, { useState } from 'react';
import Student from './Student';
import Teacher from './Teacher';
import Admin from './Admin';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [role, setRole] = useState('Student');

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleRoleChange = (e) => setRole(e.target.value);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden ${darkMode ? 'bg-gray-800' : ''}`}>
          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-8 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-bold text-white tracking-tight">Dashboard</h1>
              <div className="flex items-center space-x-4">
                <label className="flex items-center space-x-2">
                  <span className="text-white">Dark Mode</span>
                  <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className="form-checkbox h-5 w-5 text-white"
                  />
                </label>
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="bg-white text-gray-900 rounded-md px-2 py-1"
                >
                  <option value="Admin">Admin</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Student">Student</option>
                </select>
              </div>
            </div>
            <div className="w-24 h-1 bg-white/30 rounded-full mt-2"></div>
          </div>

          {/* Role-based rendering */}
          <div className="p-8">
            {role === 'Student' && <Student darkMode={darkMode} />}
            {role === 'Teacher' && <Teacher darkMode={darkMode} />}
            {role === 'Admin' && <Admin darkMode={darkMode} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <nav className="bg-slate-900 px-5 py-3 shadow-md flex justify-center font-sans text-slate-200">
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <img
            src="/logo.png"
            alt="SkillSnap Logo"
            className="w-12 h-12 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-110;"
          />
          <div className="flex space-x-6">
            <Link to="/home" className="font-semibold text-slate-300 hover:text-sky-400">
              Home
            </Link>
            <Link to="/dashboard" className="font-semibold text-slate-300 hover:text-sky-400">
              Dashboard
            </Link>
            <Link to="/contact" className="font-semibold text-slate-300 hover:text-sky-400">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {user && (
            <span className="font-semibold text-sky-200">
              Welcome, {user.name || user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md transition-colors duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

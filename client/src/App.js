import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

import Auth from './pages/Auth';
import Contact from './pages/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import Home from './pages/home/Home';
import HeroSection from './pages/home/HeroSection';
import AboutSection from './pages/home/AboutSection';
import StatsSection from './pages/home/StatsSection';
import './index.css'; // adjust path as per your setup


// Layout for protected routes
const ProtectedLayout = ({ children }) => (
  <ProtectedRoute>
    <Navbar />
    {children}
    <Footer />
  </ProtectedRoute>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Public Route */}
            <Route path="/auth" element={<Auth />} />

            {/* Protected Routes */}
            <Route path="/home" element={<ProtectedLayout><Home /></ProtectedLayout>} />
            <Route path="/home/hero" element={<ProtectedLayout><HeroSection /></ProtectedLayout>} />
            <Route path="/home/about" element={<ProtectedLayout><AboutSection /></ProtectedLayout>} />
            <Route path="/home/stats" element={<ProtectedLayout><StatsSection /></ProtectedLayout>} />
            <Route path="/dashboard" element={<ProtectedLayout><Dashboard /></ProtectedLayout>} />
            <Route path="/contact" element={<ProtectedLayout><Contact /></ProtectedLayout>} />

            {/* Redirects */}
            <Route path="/" element={<Navigate to="/auth" replace />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Generate', href: '/generate' },
    { name: 'About', href: '#about' },
    { name: 'Help', href: '#help' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className={`rounded-lg p-2 shadow-sm transition-colors duration-300 ${
              scrolled ? 'bg-blue-600' : 'bg-white'
            }`}>
              <img 
                src={logo} 
                alt="SketchGen Logo" 
                className="w-6 h-6"
              />
            </div>
            <span className={`text-xl font-bold font-montserrat transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              SketchGen
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`font-medium font-montserrat transition-colors duration-200 relative group ${
                    scrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 ${
                    scrolled ? 'bg-blue-600' : 'bg-blue-300'
                  } group-hover:w-full`}></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/generate"
              className={`inline-flex items-center px-6 py-2 rounded-lg font-semibold font-montserrat transition-colors duration-200 shadow-sm hover:shadow-md ${
                scrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              <Shield className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
              scrolled 
                ? 'hover:bg-gray-100' 
                : 'hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors duration-300 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`py-4 space-y-2 border-t transition-colors duration-300 ${
            scrolled 
              ? 'bg-white border-gray-200' 
              : 'bg-black/90 backdrop-blur-md border-white/20'
          }`}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block px-4 py-3 rounded-lg font-medium font-montserrat transition-all duration-200 ${
                  scrolled 
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-white hover:text-blue-300 hover:bg-white/10'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className={`pt-4 border-t transition-colors duration-300 ${
              scrolled ? 'border-gray-200' : 'border-white/20'
            }`}>
              <Link
                to="/generate"
                className={`block px-4 py-3 rounded-lg font-semibold text-center font-montserrat transition-colors duration-200 ${
                  scrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Shield className="w-4 h-4 inline mr-2" />
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo1.png';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'How it Works', href: '#how' },
    { name: 'Solution', href: '#solution' },
  ];

  const headerRef = useRef(null);

  const handleAnchorClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12; // small gap
      window.scrollTo({ top, behavior: 'smooth' });
      // update URL hash without jumping
      window.history.pushState(null, '', href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? '' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (no rounded background) */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SketchGen Logo" className="w-12 h-12" />
            <span className={`text-[24px] font-Audiowide transition-colors duration-300 tracking-normal text-white`}>
              SketchGen
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-lg">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`font-medium font-montserrat transition-colors duration-200 relative group text-white hover:text-blue-300`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 bg-blue-300 group-hover:w-full`}></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Login Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className={`inline-flex items-center px-5 py-3 rounded-full text-lg font-semibold font-montserrat transition-colors duration-200 shadow-lg ${
                scrolled 
                  ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' 
                  : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
              }`}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-3 rounded-lg transition-colors duration-200 ${
              scrolled 
                ? 'hover:bg-gray-100' 
                : 'hover:bg-white/10'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={`w-7 h-7 transition-colors duration-300 text-white`} />
            ) : (
              <Menu className={`w-7 h-7 transition-colors duration-300 text-white`} />
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
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`block px-4 py-3 rounded-lg font-medium font-montserrat transition-all duration-200 text-white hover:text-blue-300 hover:bg-white/10`}
                >
                {link.name}
              </a>
            ))}
            <div className={`pt-4 border-t transition-colors duration-300 ${
              scrolled ? 'border-gray-200' : 'border-white/20'
            }`}>
              <a
                href="#login"
                className={`block px-4 py-3 rounded-lg font-semibold text-center font-montserrat transition-colors duration-200 ${
                  scrolled 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

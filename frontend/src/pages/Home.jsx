import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import Background from '../components/Background';

const Layout = () => {
  useEffect(() => {
    const aboutEl = document.querySelector('#about');
    if (!aboutEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.documentElement.classList.add('show-about-glow');
          } else {
            document.documentElement.classList.remove('show-about-glow');
          }
        });
      },
      { root: null, threshold: 0.15 }
    );

    observer.observe(aboutEl);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-transparent overflow-x-hidden">
      <Background />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Layout;

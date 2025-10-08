import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative text-white overflow-hidden min-h-screen flex items-center pt-16">
      {/* Multi-layer Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-800/50 via-transparent to-purple-900/30"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-600/20 via-transparent to-blue-800/40"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 animate-pulse"></div>
      
      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%),
                       radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 50%),
                       radial-gradient(circle at 75% 25%, #06b6d4 0%, transparent 50%),
                       radial-gradient(circle at 25% 75%, #ec4899 0%, transparent 50%)`
        }}></div>
      </div>
      
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
                          radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%),
                          repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255,255,255,0.05) 100px, rgba(255,255,255,0.05) 101px)`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-bounce"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-gradient-to-br from-cyan-400/25 to-blue-400/25 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-br from-indigo-400/30 to-purple-400/30 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <Shield className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium font-montserrat">Trusted by Law Enforcement</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight animate-fade-in font-montserrat">
          <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            AI-Powered
          </span>
          <br />
          <span className="text-white">
            Suspect Sketch
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent">
            Generation
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed animate-fade-in font-montserrat">
          Transform witness descriptions into accurate forensic sketches in minutes. 
          <span className="block mt-2 text-lg opacity-80">
            Advanced AI technology designed specifically for law enforcement investigations.
          </span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Link
            to="/generate"
            className="group inline-flex items-center bg-gradient-to-r from-white to-blue-50 text-blue-900 px-8 py-4 rounded-full text-lg font-semibold font-montserrat hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-50 hover:to-white hover:shadow-blue-500/25"
          >
            Start Generating
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <a
            href="#about"
            className="inline-flex items-center border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold font-montserrat hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-white/20"
          >
            Learn More
          </a>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-montserrat">Lightning Fast</h3>
            <p className="text-sm opacity-80 font-montserrat">Generate sketches in under 5 minutes</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-montserrat">Forensic Accuracy</h3>
            <p className="text-sm opacity-80 font-montserrat">Court-ready results every time</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold mb-2 font-montserrat">Bias-Free AI</h3>
            <p className="text-sm opacity-80 font-montserrat">Equitable results for all demographics</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

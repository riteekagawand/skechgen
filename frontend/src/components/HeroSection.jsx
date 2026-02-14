import React from "react";
import { Link } from "react-router-dom";
import { Zap, Sparkles, Cpu } from "lucide-react";
import Navbar from "./Navbar";
import faceImg from "../assets/hero1.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative text-white overflow-hidden min-h-screen flex items-center pt-16 bg-transparent"
    >

      <Navbar />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid md:grid-cols-2 gap-12 items-center">
        
  {/* LEFT CONTENT */}
  <div className="text-left md:-ml-12 lg:-ml-24">
          <h1 className="font-alexandria text-[56px] md:text-[64px] lg:text-[72px] font-bold mb-6 leading-tight mt-10">
            Turn Ideas Into
            <br />
            AI-Generated Faces
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-xl mb-8 leading-relaxed">
            Our deep learning model transforms text prompts into realistic
            human faces and sketches. Fast, intelligent, and built using
            advanced diffusion-based AI technology.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/generate"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-2xl"
            >
              Generate Now
            </Link>

            <Link
              to="/samples"
              className="inline-flex items-center bg-gray-700/60 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-inner backdrop-blur-sm"
            >
              View Samples
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="relative flex items-center justify-center">
            <img
              src={faceImg}
              alt="subject"
              className="h-96 transform md:translate-x-12 lg:translate-x-20"
            />
          </div>
        </div>

        {/* FEATURES */}
        {/* <div className="md:col-span-2 ">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Lightning Fast Generation
              </h3>
              <p className="text-sm opacity-80">
                Generate high-quality faces within seconds.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Prompt-Based Customization
              </h3>
              <p className="text-sm opacity-80">
                Control age, gender, style, and facial attributes using text.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Deep Learning Powered
              </h3>
              <p className="text-sm opacity-80">
                Built using Stable Diffusion + LoRA fine-tuning.
              </p>
            </div>

          </div>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;

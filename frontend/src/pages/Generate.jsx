import React, { useState } from "react";
import { Wand2, Loader2, ImageIcon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";

const Generate = () => {
  const [description, setDescription] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 py-20 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -left-40 top-10 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[200px]" />
      <div className="absolute -right-40 bottom-10 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[200px]" />

      {/* Main Glass Container */}
      <div className="relative w-full max-w-6xl rounded-3xl border border-white/10 backdrop-blur-xl p-10 bg-white/5 shadow-[0_0_40px_rgba(139,92,246,0.15)]">

        {/* 🔥 Clickable Logo + Name */}
        <Link
          to="/"
          className="absolute top-6 left-8 flex items-center gap-3 cursor-pointer group"
        >
          <img
            src={logo}
            alt="SketchGen Logo"
            className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-white text-lg font-Audiowide font-semibold tracking-wide group-hover:text-purple-400 transition-colors duration-300">
            SketchGen
          </span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-10">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">
              Generate AI Face
            </h1>

            <p className="text-white/70 mb-6">
              Enter a detailed description and let our AI generate a realistic face.
            </p>

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Example: 25 year old woman, short black hair, soft lighting, studio portrait..."
              className="w-full h-32 bg-black/40 border border-white/20 rounded-xl p-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-400 resize-none"
            />

            <button
              onClick={handleGenerate}
              disabled={!description || isGenerating}
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-300 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="w-5 h-5" />
                  Generate Image
                </>
              )}
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <div className="relative rounded-2xl border border-white/15 bg-black/40 p-4 backdrop-blur-lg">

              <p className="text-white/60 mb-4 text-center">
                Your generated image will appear here
              </p>

              <div className="w-full h-[380px] flex items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <div className="flex flex-col items-center text-white/40">
                  <ImageIcon className="w-20 h-20 mb-4" />
                  <p className="text-sm">
                    Generated image preview
                  </p>
                </div>
              </div>

              {isGenerating && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/60 px-4 py-2 rounded-full border border-white/10">
                  <Loader2 className="w-4 h-4 animate-spin text-purple-400" />
                  <span className="text-white/80 text-sm">
                    Generating...
                  </span>
                </div>
              )}
            </div>

            {/* Outer Glow */}
            <div className="absolute inset-0 rounded-2xl border border-blue-400/20 shadow-[0_0_30px_rgba(59,130,246,0.25)] pointer-events-none"></div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Generate;

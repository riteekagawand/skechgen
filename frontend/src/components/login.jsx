import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2 } from "lucide-react";
import logo from "../assets/logo1.png";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -left-40 top-10 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[200px]" />
      <div className="absolute -right-40 bottom-10 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[200px]" />

      {/* Glass Card */}
      <div className="relative w-full max-w-md rounded-3xl border border-white/10 backdrop-blur-xl p-10 bg-white/5 shadow-[0_0_40px_rgba(139,92,246,0.15)]">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center justify-center gap-3 mb-10 group"
        >
          <img
            src={logo}
            alt="SketchGen Logo"
            className="w-9 h-9 group-hover:scale-110 transition-transform duration-300"
          />
          <span className="text-white text-xl font-Audiowide tracking-wide group-hover:text-purple-400 transition-colors duration-300">
            SketchGen
          </span>
        </Link>

        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h2>
        <p className="text-white/60 text-center mb-8">
          {isLogin
            ? "Login to continue generating AI faces"
            : "Sign up to start creating AI-generated faces"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Name (Signup Only) */}
          {!isLogin && (
            <div>
              <label className="block text-white/70 mb-2 text-sm">
                Full Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-400"
                placeholder="Your name"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-white/70 mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-400"
              placeholder="you@example.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white/70 mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-purple-400"
              placeholder="••••••••"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:scale-105 transition-transform duration-300 disabled:opacity-50 flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin mr-2" />
                {isLogin ? "Logging in..." : "Signing up..."}
              </>
            ) : (
              isLogin ? "Login" : "Sign Up"
            )}
          </button>
        </form>

        {/* Toggle */}
        <p className="text-white/50 text-sm text-center mt-8">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-400 hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </p>

      </div>
    </div>
  );
};

export default Auth;

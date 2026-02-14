import React from "react";
import steps from "../assets/steps.png";

const stepsData = [
  {
    id: 1,
    title: "Enter Your Prompt",
    desc: "Describe the face you want to generate — age, hairstyle, lighting, expression, and more."
  },
  {
    id: 2,
    title: "AI Model Processing",
    desc: "Our diffusion-based AI model analyzes your prompt and generates a realistic face."
  },
  {
    id: 3,
    title: "Download & Use",
    desc: "Preview, download, and use your high-resolution AI-generated image instantly."
  }
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <img
              src={steps}
              alt="How it works"
              className="w-[520px] max-w-full object-contain"
            />
          </div>

          {/* RIGHT STEPS */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xl">
              
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10">
                How it Works?
              </h2>

              <div className="space-y-8">
                {stepsData.map((s) => {
                  const isActive = s.id === 2;

                  return (
                    <div
                      key={s.id}
                      className={`relative w-full md:w-[523px] md:h-[105px] rounded-3xl px-6 py-5 flex items-center gap-5 transition-all duration-300 ${
                        isActive
                          ? "border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.55)]"
                          : ""
                      }`}
                      style={{
                        background: isActive
                          ? "linear-gradient(90deg, rgba(60,60,60,0.95) 0%, rgba(80,80,80,0.9) 100%)"
                          : "linear-gradient(90deg, rgba(55,55,55,0.95) 0%, rgba(75,75,75,0.85) 100%)"
                      }}
                    >
                      {/* Number Badge */}
                      <div
                        className={`w-12 h-9 rounded-2xl flex items-center justify-center font-semibold text-base ${
                          isActive
                            ? "bg-cyan-400 text-black"
                            : "bg-white text-black"
                        }`}
                      >
                        {s.id}
                      </div>

                      {/* Text */}
                      <div>
                        <h3
                          className={`text-lg md:text-xl font-semibold ${
                              isActive ? "text-cyan-400" : "text-white"
                            }`}
                        >
                          {s.title}
                        </h3>

                          <p className="text-sm md:text-sm text-white/70 mt-2 leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

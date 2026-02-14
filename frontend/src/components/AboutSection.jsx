import React from "react";
import { Sparkles, Cpu, Sliders, Image as ImageIcon } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-sky-400" />,
      title: "Prompt-Based Generation",
      description:
        "Transform detailed text descriptions into realistic human faces using advanced AI models."
    },
    {
      icon: <Cpu className="w-8 h-8 md:w-10 md:h-10 text-sky-400" />,
      title: "Deep Learning Powered",
      description:
        "Built using diffusion models and LoRA fine-tuning to generate high-quality, photorealistic results."
    },
    {
      icon: <Sliders className="w-8 h-8 md:w-10 md:h-10 text-sky-400" />,
      title: "Customizable Attributes",
      description:
        "Control age, gender, hairstyle, lighting, and facial features directly through text prompts."
    },
    {
      icon: <ImageIcon className="w-8 h-8 md:w-10 md:h-10 text-sky-400" />,
      title: "High-Resolution Output",
      description:
        "Generate sharp 512x512 (or higher) resolution faces suitable for research and creative applications."
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className="relative z-10 rounded-3xl p-10 md:p-16 backdrop-blur-sm border border-white/5"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(245,245,245,0.03) 40%, rgba(230,230,230,0.06) 100%)",
            backdropFilter: "saturate(120%)"
          }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Why Choose SketchGen
              <br />
              for AI Face Generation?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-lg">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {f.title}
                    </h3>
                    <p className="text-sm text-white/75 leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

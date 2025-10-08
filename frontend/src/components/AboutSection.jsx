import React from 'react';
import { Zap, Target, Shield } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Suspect Generation",
      description: "Generate high-quality suspect sketches in under 5 minutes. Our streamlined interface allows officers to input witness descriptions quickly and efficiently, accelerating investigation timelines without compromising accuracy."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Forensic-Grade Accuracy",
      description: "Built on validated forensic principles and trained with law enforcement input. Our AI models produce sketches that meet the standards required for criminal investigations and court proceedings."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bias-Aware AI",
      description: "Rigorously tested for fairness across demographics. Our bias detection systems ensure equitable results, maintaining the integrity of investigations while respecting civil liberties and constitutional rights."
    }
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-4">
          Trusted by Law Enforcement Nationwide
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          SketchGen combines cutting-edge artificial intelligence with forensic expertise to deliver reliable, unbiased suspect identification tools.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-blue-700"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 rounded-xl flex items-center justify-center text-white mb-6">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;

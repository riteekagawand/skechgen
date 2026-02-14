import React from 'react';

const Background = () => {
  return (
    // Background should sit behind content; give it a low z-index
    <div aria-hidden className="fixed inset-0 pointer-events-none z-0 bg-black">
      {/* Left soft glow (softened) */}
      <div
        className="absolute -left-40 top-24 w-[60rem] h-[60rem] rounded-full"
        style={{
          filter: 'blur(200px)',
          background: 'radial-gradient(circle at 30% 40%, rgba(139,92,246,0.6) 0%, rgba(59,130,246,0.35) 25%, rgba(59,130,246,0.05) 45%, transparent 60%)'
        }}
      />

      {/* Top-right glow (softened) */}
      <div
        className="absolute -right-20 -top-28 w-[64rem] h-[64rem] rounded-full"
        style={{
          filter: 'blur(220px)',
          background: 'radial-gradient(circle at 70% 20%, rgba(59,130,246,0.6) 0%, rgba(139,92,246,0.55) 28%, rgba(59,130,246,0.03) 50%, transparent 70%)'
        }}
      />

      {/* Bottom-centered downward glow to extend the effect under About */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-[-12rem] w-[72rem] h-[40rem] rounded-full bottom-glow"
        style={{
          filter: 'blur(180px)',
          background: 'radial-gradient(circle at 50% 70%, rgba(139,92,246,0.45) 0%, rgba(99,102,241,0.35) 25%, rgba(59,130,246,0.03) 55%, transparent 80%)'
        }}
      />

      {/* Soft light center + dark edges vignette (lighter center like the reference) */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 30%, rgba(0,0,0,0.6) 100%)'
        }}
      />
    </div>
  );
};

export default Background;

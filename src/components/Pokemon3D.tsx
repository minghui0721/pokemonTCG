'use client';

import React from 'react';

const Pokemon3D = () => {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-gray-900/50 rounded-3xl border border-cyan-500/30 backdrop-blur-xl">
      <div className="w-64 h-64 bg-cyan-500/10 rounded-full flex items-center justify-center animate-pulse border-2 border-cyan-500/20">
        <span className="text-6xl">🎮</span>
      </div>
      <h2 className="text-2xl font-bold mt-8 text-cyan-300">3D Interaction Coming Soon</h2>
      <p className="text-gray-400 mt-2 text-center max-w-md">
        We are currently refining the 3D augmented reality experience. Stay tuned for the digital revolution!
      </p>
    </div>
  );
};

export default Pokemon3D;

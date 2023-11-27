import React, { useState } from 'react';

const HoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-blue-500 px-4 py-2 rounded text-white"
      >
        Hover me
      </button>
      {isHovered && (
        <div className="absolute bg-white border mt-2 p-4 rounded shadow-lg text-black w-64">
          I&apos;m a floating div
        </div>
      )}
    </div>
  );
};

export default HoverButton;
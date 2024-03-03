import React from "react";

const ThreeDanimation = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8">
      <div className="shadow-lg rounded-sm hover:border-violet-200 border-2">
        <video
          src="/Animations/3D Animation/1.mp4"
          controls
          muted
          loop
          preload="auto"
        >
          Your browser does not support video tag
        </video>
      </div>
      <div className="shadow-lg rounded-sm hover:border-violet-200 border-2">
        <video
          src="/Animations/3D Animation/2.mp4"
          controls
          muted
          loop
          preload="auto"
        >
          Your browser does not support video tag
        </video>
      </div>
      <div className="shadow-lg rounded-sm hover:border-violet-200 border-2">
        <video
          src="/Animations/2D Animation/3.mp4"
          controls
          muted
          loop
          preload="auto"
        >
          Your browser does not support video tag
        </video>
      </div>
      <div className="shadow-lg rounded-sm hover:border-violet-200 border-2">
        <video
          src="/Animations/3D Animation/4.mp4"
          controls
          muted
          loop
          preload="auto"
        >
          Your browser does not support video tag
        </video>
      </div>
    </div>
  );
};

export default ThreeDanimation;

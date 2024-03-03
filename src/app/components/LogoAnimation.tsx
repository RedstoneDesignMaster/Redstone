import React from "react";

const LogoAnimation = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-8">
      <div className="shadow-lg rounded-sm hover:border-violet-200 border-2">
        <video
          src="/Animations/Logo Animation/1.mp4"
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
          src="/Animations/Logo Animation/2.mp4"
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
          src="/Animations/Logo Animation/3.mp4"
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
          src="/Animations/Logo Animation/4.mp4"
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
          src="/Animations/Logo Animation/5.mp4"
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
          src="/Animations/Logo Animation/6.mp4"
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

export default LogoAnimation;

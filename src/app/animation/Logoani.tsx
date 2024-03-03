"use client";
// components/VideoGrid.tsx

import React, { useState } from "react";

interface Video {
  src: string;
  poster: string;
}

const Logoani: React.FC = () => {
  const [playingVideo, setPlayingVideo] = useState("");

  const videos: Video[] = [
    { src: "/Animations/Logo Animation/1.mp4", poster: "/poster1.webp" },
    { src: "/Animations/Logo Animation/2.mp4", poster: "/poster1.webp" },
    { src: "/Animations/Logo Animation/3.mp4", poster: "/poster1.webp" },
    { src: "/Animations/Logo Animation/4.mp4", poster: "/poster1.webp" },
    { src: "/Animations/Logo Animation/5.mp4", poster: "/poster1.webp" },
    { src: "/Animations/Logo Animation/6.mp4", poster: "/poster1.webp" },
  ];

  const playVideo = (src: string) => {
    setPlayingVideo(src);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-black">
      {videos.map((video, index) => (
        <div key={index} className="relative border-2 border-violet-200">
          <video
            className="w-full rounded-lg cursor-pointer"
            preload="metadata"
            muted
            onClick={() => playVideo(video.src)}
            poster={video.poster}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {playingVideo === video.src && (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-75">
              <video
                className="max-w-full max-h-full"
                autoPlay
                controls
                onClick={() => setPlayingVideo("")}
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Logoani;

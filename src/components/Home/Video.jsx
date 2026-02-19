import React from "react";
import vid from "../../assets/video/bg.mp4"

const Video = () => {
  return (
    <div>
      <div className="bg-zinc-800 w-full h-screen  sticky overflow-hidden">
        <video
          src={vid}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Video;

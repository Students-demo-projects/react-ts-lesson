import { useRef, useState, useEffect } from "react";
import myVideo from "../../assets/3814951-hd_1906_1080_30fps.mp4";

function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleForward = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.min(video.currentTime + 5, video.duration);
  };

  const handleBackward = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = Math.max(video.currentTime - 5, 0);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * video.duration;
    video.currentTime = newTime;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      <div className="relative w-[800px] max-w-[90%] bg-black rounded-xl overflow-hidden shadow-2xl">
        {/* Video */}
        <video ref={videoRef} className="w-full" preload="metadata">
          <source src={myVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Progress Bar */}
        <div
          className="absolute bottom-12 left-0 right-0 h-[6px] bg-white/20 cursor-pointer group hover:h-[8px] transition-all duration-200"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-red-600 rounded-sm transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-6 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <button
            onClick={handleBackward}
            className="text-white text-2xl hover:text-red-500 transition-transform duration-150 hover:scale-125"
          >
            ⏪
          </button>
          <button
            onClick={handlePlayPause}
            className="text-white text-3xl hover:text-red-500 transition-transform duration-150 hover:scale-125"
          >
            {isPlaying ? "⏸" : "▶️"}
          </button>
          <button
            onClick={handleForward}
            className="text-white text-2xl hover:text-red-500 transition-transform duration-150 hover:scale-125"
          >
            ⏩
          </button>
        </div>
      </div>
    </div>
  );
}

export default Video;

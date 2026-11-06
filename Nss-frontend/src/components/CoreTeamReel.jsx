import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaExpand, FaArrowDown, FaCrown } from "react-icons/fa";
import "./CoreTeamReel.css";

const CoreTeamReel = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
      setHasStarted(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleFullScreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    }
  };

  const scrollToLeadership = () => {
    const el = document.getElementById("leadership-roster");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="core-reel-showcase" id="core-reveal" data-aos="fade-up">
      {/* Header Badge & Title */}
      <div className="core-reel-header">
        <div className="core-reel-badge">
          <FaCrown className="crown-icon" />
          <span>Official Leadership Reveal · Batch 2025–26</span>
        </div>
        <h2 className="core-reel-title">Core Team Reveal Reel</h2>
        <p className="core-reel-subtitle">
          Unveiling the passionate student leaders elected to helm NSS VIIT Pune for the 2025–2026 tenure.
        </p>
      </div>

      {/* Cinematic Theater Card */}
      <div className="core-reel-theater">
        <div className="core-reel-glow" />
        <div className="core-reel-viewport">
          <video
            ref={videoRef}
            src="/videos/core_team_reveal.mp4"
            poster="/videos/core_team_reveal_poster.jpg"
            preload="metadata"
            playsInline
            controls
            onPlay={() => {
              setIsPlaying(true);
              setHasStarted(true);
            }}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              setIsPlaying(false);
              setHasStarted(false);
            }}
            className="core-reel-video"
          >
            Your browser does not support the video tag.
          </video>

          {/* Custom Cinematic Overlay when video hasn't started or is paused */}
          {!isPlaying && !hasStarted && (
            <div className="core-reel-splash-overlay" onClick={togglePlay} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && togglePlay()}>
              <div className="splash-play-btn">
                <FaPlay className="play-triangle" />
              </div>
              <span className="splash-label">Watch Reveal Reel</span>
              <span className="splash-duration">0:32 · Full HD · H.264</span>
            </div>
          )}
        </div>

        {/* Quick Toolbar */}
        <div className="core-reel-toolbar">
          <div className="reel-toolbar-left">
            <button
              type="button"
              className="reel-btn play-btn"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
              <span>{isPlaying ? "Pause" : "Play"}</span>
            </button>
            <button
              type="button"
              className="reel-btn mute-btn"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              <span>{isMuted ? "Unmute" : "Mute"}</span>
            </button>
          </div>

          <div className="reel-toolbar-right">
            <button
              type="button"
              className="reel-btn fs-btn"
              onClick={handleFullScreen}
              aria-label="Full Screen"
            >
              <FaExpand />
              <span>Full Screen</span>
            </button>
            <button
              type="button"
              className="reel-btn scroll-btn"
              onClick={scrollToLeadership}
              aria-label="Scroll to Leadership Roster"
            >
              <span>View Roster</span>
              <FaArrowDown />
            </button>
          </div>
        </div>
      </div>

      {/* Leadership Snapshot Ribbon */}
      <div className="core-reel-stats-ribbon">
        <div className="stat-pill">
          <strong>1</strong>
          <span>President</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-pill">
          <strong>3</strong>
          <span>Vice Presidents</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-pill">
          <strong>5</strong>
          <span>Core Representatives</span>
        </div>
        <div className="stat-divider" />
        <div className="stat-pill">
          <strong>20+</strong>
          <span>Domain Directors</span>
        </div>
      </div>
    </div>
  );
};

export default CoreTeamReel;

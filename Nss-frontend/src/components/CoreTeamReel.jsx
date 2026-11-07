import { useState, useRef } from "react";
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaExpand, FaArrowDown, FaCrown, FaInstagram } from "react-icons/fa";
import { toAssetUrl } from "../utils/assetHelper";
import "./CoreTeamReel.css";

const CoreTeamReel = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [playbackError, setPlaybackError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasStarted(true);
            setPlaybackError(false);
          })
          .catch((err) => {
            console.warn("Unmuted autoplay restricted, attempting muted playback:", err);
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setHasStarted(true);
                  setPlaybackError(false);
                })
                .catch((e) => {
                  console.error("Direct playback error:", e);
                  setPlaybackError(true);
                });
            }
          });
      }
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
            src={toAssetUrl("/videos/core_team_reveal.mp4")}
            poster={toAssetUrl("/videos/core_team_reveal_poster.jpg")}
            preload="none"
            playsInline
            controls
            onPlay={() => {
              setIsPlaying(true);
              setHasStarted(true);
              setPlaybackError(false);
            }}
            onPause={() => setIsPlaying(false)}
            onEnded={() => {
              setIsPlaying(false);
              setHasStarted(false);
            }}
            onError={() => {
              console.warn("Video failed to decode or load.");
              setPlaybackError(true);
            }}
            className="core-reel-video"
          >
            Your browser does not support the video tag.
          </video>

          {/* Custom Cinematic Overlay when video hasn't started or is paused */}
          {!isPlaying && !hasStarted && !playbackError && (
            <div
              className="core-reel-splash-overlay"
              onClick={togglePlay}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && togglePlay()}
            >
              <div className="splash-play-btn">
                <FaPlay className="play-triangle" />
              </div>
              <span className="splash-label">Watch Reveal Reel</span>
              <span className="splash-duration">0:32 · Full HD · H.264 FastStart</span>
            </div>
          )}

          {/* Fallback banner if browser blocks local video */}
          {playbackError && (
            <div className="core-reel-error-fallback" style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.92)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              padding: '2rem',
              textAlign: 'center',
              zIndex: 15
            }}>
              <p style={{ color: '#F1F5F9', fontSize: '1.4rem', margin: 0 }}>
                Unable to stream in your browser directly.
              </p>
              <a
                href="https://www.instagram.com/nss.a_70/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  color: '#FFFFFF',
                  padding: '0.8rem 1.6rem',
                  borderRadius: '30px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '1.3rem'
                }}
              >
                <FaInstagram /> Watch on Official Instagram ↗
              </a>
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

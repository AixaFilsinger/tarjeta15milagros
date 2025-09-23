import { useState, useRef, useEffect } from "react";

const ReproductorMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  // 👉 Detecta primer clic/tap y arranca la música
  useEffect(() => {
    const startMusic = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
        document.removeEventListener("click", startMusic);
        document.removeEventListener("touchstart", startMusic);
      }
    };

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
      document.removeEventListener("touchstart", startMusic);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const progressPercent =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progressPercent || 0);
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value * audioRef.current.duration) / 100;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  return (
    <section className="container text-center mt-5" data-aos="fade-up">
      <h3 className="dalePlay">Dale Play a mi canción favorita</h3>
      <div className="music-player-card text-center my-4">
        <p className="song-title">Clocks - Coldplay</p>

        <div className="controls d-flex justify-content-center gap-3">
          <button className="btn-music" onClick={togglePlay}>
            {isPlaying ? (
              <i className="bi bi-pause-fill"></i>
            ) : (
              <i className="bi bi-play-fill"></i>
            )}
          </button>
        </div>

        <input
          type="range"
          className="progress-bar"
          value={progress}
          onChange={handleProgressChange}
        />

        <audio
          ref={audioRef}
          src="/music/Clocks.mp3"
          onTimeUpdate={handleTimeUpdate}
          preload="auto"
        ></audio>
      </div>
    </section>
  );
};

export default ReproductorMusic;





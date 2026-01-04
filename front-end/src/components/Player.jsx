import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const [minutes, seconds] = timeString.split(":").map(Number);
  return minutes * 60 + seconds;
};

const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef(null);
  const progressBar = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    if (!audioPlayer.current) return;

    isPlaying
      ? audioPlayer.current.pause()
      : audioPlayer.current.play();

    setIsPlaying((prev) => !prev);
  };

  // Atualiza tempo e barra
  useEffect(() => {
    const audio = audioPlayer.current;
    if (!audio) return;

    const updateTime = () => {
      const current = audio.currentTime;
      setCurrentTime(formatTime(current));

      progressBar.current?.style.setProperty(
        "--_progress",
        `${(current / durationInSeconds) * 100}%`
      );
    };

    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, [durationInSeconds]);

  // Clique na barra
  const handleSeek = (e) => {
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();

    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;

    const newTime = percentage * durationInSeconds;

    audioPlayer.current.currentTime = newTime;

    progressBar.current.style.setProperty(
      "--_progress",
      `${percentage * 100}%`
    );

    setCurrentTime(formatTime(newTime));
  };

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon icon={faBackwardStep} className="player__icon" />
        </Link>

        <FontAwesomeIcon
          icon={isPlaying ? faCirclePause : faCirclePlay}
          className="player__icon player__icon--play"
          onClick={playPause}
        />

        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon icon={faForwardStep} className="player__icon" />
        </Link>
      </div>

      <div className="player__progress">
        <p className="player__time">{currentTime}</p>

        <div className="player__bar" onClick={handleSeek}>
          <div
            ref={progressBar}
            className="player__bar--progress"
          />
        </div>

        <p className="player__time">{duration}</p>
      </div>

      <audio ref={audioPlayer} src={audio} />
    </div>
  );
};

export default Player;

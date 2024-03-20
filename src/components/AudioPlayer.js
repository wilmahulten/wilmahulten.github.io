import React, { useRef, useEffect, useState } from "react";
import "../styles/audioplayer.css";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(new Audio());
  const [isPlaying, setPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState(null);

  useEffect(() => {
    // Create a new audio element for each instance of AudioPlayer
    audioRef.current = new Audio();
    audioRef.current.src = audioSrc;

    // If AudioContext doesn't exist, create it
    if (!audioContext) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(context);
    }

    return () => {
      // Clean up the AudioContext
      if (audioContext) {
        audioContext.close();
        setAudioContext(null);
      }
    };
  }, [audioSrc, audioContext]);

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      fadeOut(audioElement, 1000); // 1000 milliseconds (1 second) fade out duration
    } else {
      // If AudioContext exists, resume playback
      if (audioContext) {
        audioContext.resume().then(() => {
          fadeIn(audioElement, 1000); // 1000 milliseconds (1 second) fade in duration
          audioElement.play();
          setPlaying(true);
        });
      } else {
        // If AudioContext doesn't exist, play the audio normally
        audioElement.play();
        setPlaying(true);
      }
    }
  };

  const fadeIn = (audioElement, duration) => {
    const finalVolume = 1; // Final volume level
    const increment = 0.05; // Volume increment per step
    const interval = duration / (finalVolume / increment);

    let volume = audioElement.volume;
    const fadeInterval = setInterval(() => {
      if (volume < finalVolume) {
        volume = Math.min(finalVolume, volume + increment); // Clamp volume between 0 and 1
        audioElement.volume = volume;
      } else {
        clearInterval(fadeInterval);
      }
    }, interval);
  };

  const fadeOut = (audioElement, duration) => {
    const finalVolume = 0; // Final volume level
    const decrement = 0.05; // Volume decrement per step
    const interval = duration / (audioElement.volume / decrement);

    let volume = audioElement.volume;
    const fadeInterval = setInterval(() => {
      if (volume > finalVolume) {
        volume = Math.max(finalVolume, volume - decrement); // Clamp volume between 0 and 1
        audioElement.volume = volume;
      } else {
        clearInterval(fadeInterval);
        audioElement.pause();
        setPlaying(false);
      }
    }, interval);
  };

  return (
    <div className="audio-player">
      <button
        className="play-button"
        onClick={togglePlay}
        role="switch"
        aria-checked={isPlaying}
      >
        <span className="play-icon">{isPlaying ? '❚❚' : '▶'}</span>
        <span className="play-text"><i>Svällverk/Swellbox</i></span>
      </button>
    </div>
  );
};

export default AudioPlayer;

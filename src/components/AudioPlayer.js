import React, { useRef, useEffect, useState } from "react";
import "../styles/audioplayer.css";

const AudioPlayer = ({ audioSrc }) => {
  const audioRef = useRef(new Audio());
  const [isPlaying, setPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [initialPlay, setInitialPlay] = useState(true);

  useEffect(() => {
    // Create a new audio element for each instance of AudioPlayer
    audioRef.current = new Audio();
    audioRef.current.src = audioSrc;
    audioRef.current.loop = true;

    // If AudioContext doesn't exist, create it
    if (!audioContext) {
      const context = new (window.AudioContext || window.webkitAudioContext)();
      setAudioContext(context);
    }

    // Load metadata and set random start when available
    audioRef.current.addEventListener('loadedmetadata', handleMetadataLoaded);

    // Initialize volume to 0
    audioRef.current.volume = 0;

    return () => {
      // Clean up the AudioContext and event listener
      if (audioContext) {
        audioContext.close();
        setAudioContext(null);
      }
      audioRef.current.removeEventListener('loadedmetadata', handleMetadataLoaded);
    };
  }, [audioSrc, audioContext]);

  const handleMetadataLoaded = () => {
    if (initialPlay && audioRef.current.duration !== Infinity) {
      const randomStart = Math.random() * audioRef.current.duration;
      audioRef.current.currentTime = randomStart;
      setInitialPlay(false);
    }
  };

  const togglePlay = () => {
    const audioElement = audioRef.current;
    const fadeDur = 2000;

    if (isPlaying) {
      fadeOut(audioElement, fadeDur); // 1000 milliseconds (1 second) fade out duration
    } else {
      // If AudioContext exists, resume playback
      if (audioContext) {
        audioContext.resume().then(() => {
          fadeIn(audioElement, fadeDur); // 1000 milliseconds (1 second) fade in duration
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

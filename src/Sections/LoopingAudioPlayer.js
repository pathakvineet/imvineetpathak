import React, { useState, useEffect } from "react";
import audioFile from "../assets/audio/bgm.mp3";

const LoopingAudioPlayer = () => {
  const [audio] = useState(new Audio(audioFile));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audio.loop = true;
    audio.volume = 0.5;
    audio.load();
    audio.play();

    const playAudio = () => {
      if (!playing) {
        audio.play();
        setPlaying(true);
      }
    };

    const timeoutId = setTimeout(playAudio, 3000);

    return () => {
      clearTimeout(timeoutId);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, playing]);

  return null;
};

export default LoopingAudioPlayer;

"use client";

import { PauseIcon, PlayIcon, RepeatIcon } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import TempoSlider from "./TempoSlider";
import { Button } from "./ui/button";

type Props = {
  defaultTempo: number;
  audioUrl: string;
};

export default function MusicController(props: Props) {
  const { defaultTempo, audioUrl } = props;
  const [isPlay, setIsPlay] = useState(false);
  const [tempo, setTempo] = useState(defaultTempo);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    const playbackRate = tempo / defaultTempo;
    audioRef.current.preservesPitch = true;
    audioRef.current.playbackRate = playbackRate;
  }, [defaultTempo, tempo]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    setIsPlay(!isPlay);
    if (isPlay) {
      audioRef.current.pause();
    } else {
      audioRef.current.preservesPitch = true;
      audioRef.current.play();
    }
  };

  return (
    <div className="flex space-x-2 p-2 border-2 rounded-xl">
      <audio ref={audioRef} src={audioUrl} />
      <Button variant="outline" className="h-16 w-16" onClick={togglePlay}>
        {isPlay ? <PauseIcon /> : <PlayIcon />}
      </Button>
      <TempoSlider defaultTempo={defaultTempo} tempo={tempo} setTempo={setTempo} />
      <Button variant="outline" className="flex flex-col justify-center items-center h-16 w-24">
        <RepeatIcon />
        <span className="text-xs text-muted-foreground">Loop</span>
      </Button>
    </div>
  );
}

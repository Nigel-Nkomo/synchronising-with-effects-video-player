import { useEffect, useRef } from "react";

export default function VideoPlayer({ src, isPlaying }) {
  const ref = useRef();

  // synchronise isPlaying with play() and pause() i.e. when the value of isPlaying changes, change the method (play() or pause())
  //specify the dependencies array
  //the code inside useEffect depends on the value of isPlaying
  //if isPlaying's value is the same, useEffect won't rerun
  useEffect(() => {
    if (isPlaying) {
      console.log("calling video.play()");
      ref.current.play();
    } else {
      console.log("calling video.pause()");
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      <video ref={ref} src={src} loop playsInline muted />
    </>
  );
}

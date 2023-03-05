import { useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import VideoPlayer from "./VideoPlayer";
import "./App.css";

function App() {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>Synchronising with effects </h1>

        {/* The input updates the parent component's state. Typing causes useEffect to rerun because without the dependencies array, useEffect reruns after every rerender. */}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        {/* Video player element */}
        <VideoPlayer
          src="https://joy1.videvo.net/videvo_files/video/free/video0471/small_watermarked/_import_618a60f421e389.11686272_preview.webm"
          isPlaying={isPlaying}
        />

        {/* Button */}
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? (
            <PauseRoundedIcon viewBox="0 0 24 24" />
          ) : (
            <PlayArrowRoundedIcon viewBox="0 0 24 24" />
          )}
        </button>
      </div>
    </>
  );
}

export default App;

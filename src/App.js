import { useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";
import VideoPlayer from "./VideoPlayer";
import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="container">
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <PauseRoundedIcon /> : <PlayArrowRoundedIcon />}
      </button>

      <VideoPlayer
        src="https://joy1.videvo.net/videvo_files/video/free/2012-07/small_watermarked/Transit%20of%20Venus_preview.webm"
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;

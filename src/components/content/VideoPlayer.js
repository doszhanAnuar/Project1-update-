import React from "react";
import { useWindowSize } from "../../hooks/useWindowsSize";
const VideoPlayer = ({ videoId }) => {
  const { width } = useWindowSize();
  if (!videoId) {
    return (
      <p
        style={{
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Search for a video
      </p>
    );
  }
  return (
    <div className="video-player" style={{}}>
      {width >= 720 ? (
        <iframe
          title={videoId}
          style={{ height: "400px", width: "600px" }}
          className="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      ) : (
        <iframe
          title={videoId}
          style={{ height: "200px", width: "400px" }}
          className="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}`}
        />
      )}
    </div>
  );
};

export default VideoPlayer;

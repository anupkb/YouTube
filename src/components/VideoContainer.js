import React from "react";
import VideoCard from "./VideoCard";
import useFetchYoutubeData from "../hooks/useFetchYoutubeData";

const VideoContainer = () => {
  const data = useFetchYoutubeData();

  return (
    <div className="flex flex-wrap">
      {data.map((video, index) => (
        <VideoCard key={index} videoInfo={video} />
      ))}
    </div>
  );
};

export default VideoContainer;

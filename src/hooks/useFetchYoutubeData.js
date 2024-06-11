import React, { useState, useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import axios from "axios";

export const useFetchYoutubeData = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(YOUTUBE_VIDEOS_API);
      setVideos(data.items);
    } catch (error) {
      console.log(`Failed in fetching data: ${error}`);
    }
  };

  return videos;
};

export default useFetchYoutubeData;

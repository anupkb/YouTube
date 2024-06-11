import React from "react";
import { USER_ICON } from "../utils/constants";
import { formatViewCount, formatPublishedAt } from "../utils/formatters";

const VideoCard = ({ videoInfo }) => {
  if (!videoInfo || videoInfo.length <= 4) {
    return <div>Loading...</div>;
  }

  console.log(videoInfo);

  const { title, channelTitle, publishedAt } = videoInfo.snippet;
  const { viewCount } = videoInfo.statistics;
  const thumbnail = videoInfo.snippet.thumbnails;
  const { url } = thumbnail.medium;

  const formattedViewCount = formatViewCount(viewCount);
  const formattedPublishedAt = formatPublishedAt(publishedAt);

  return (
    <div className="w-96 m-3">
      <div className="">
        <img
          src={url}
          alt="thumbnail"
          className="w-full rounded-xl cursor-pointer"
        />
      </div>
      <div className="flex">
        <div>
          <div>
            <img
              src={USER_ICON}
              alt="profileAvatar"
              className="h-8 cursor-pointer m-2"
            />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 m-1">{title}</h4>
          <h2 className="text-sm font-semibold text-gray-500 m-1">
            {channelTitle}
          </h2>

          <p className="text-sm font-semibold text-gray-500 m-1">
            {formattedViewCount} ● {formattedPublishedAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

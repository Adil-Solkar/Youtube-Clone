import React from "react";
import { Link } from "react-router";
import { timeAgo } from "../utils/publishedDate";

const VideoCard = ({ info }) => {
  const { snippet, statistics, id } = info;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;

  return (
    <>
      <div className="m-3 w-72 rounded-t-xl shadow">
        <Link to={"/watch?v=" + id}>
          <div>
            <img
              className="block w-full rounded-xl"
              src={thumbnails?.medium?.url}
              alt="thumbnail"
            />
          </div>
          <div className="p-3">
            <h2 className="font-bold mb-2 line-clamp-2">{title}</h2>
            <h3>{channelTitle}</h3>
            <h3>
              {statistics?.viewCount} . {timeAgo(publishedAt)}
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default VideoCard;

import React, { useEffect, useState } from "react";
import {timeAgo} from "../utils/publishedDate" 

const Comments = ({ videoId, videoData }) => {
  const [comments, setComments] = useState([]);
  const { statistics } = videoData;

  const commentApi = import.meta.env.VITE_YOUTUBE_COMMENTS_API;
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  useEffect(() => {
    async function fetchComments() {
      const response = await fetch(
        `${commentApi}&videoId=${videoId}&key=${apiKey}`
      );
      const data = await response.json();
      setComments(data?.items);
    }
    fetchComments();
  }, [apiKey, commentApi, videoId]);

  if (comments.length === 0) return null;
  return (
    <>
      <h1 className="text-2xl font-bold m-2">
        {statistics?.commentCount} Comments
      </h1>

      {comments && comments.length
        ? comments.map((comment) => {
            const{id} = comment
            // eslint-disable-next-line no-unsafe-optional-chaining
            const{authorDisplayName,authorProfileImageUrl,publishedAt,textOriginal,likeCount} = comment?.snippet?.topLevelComment?.snippet
            return (
              <div key={id} className="flex border p-2 m-2 rounded-2xl w-[914px]">
                <div className="w-12">
                  <img
                    alt="profile image"
                    src={authorProfileImageUrl}
                    className="w-full block rounded-full"
                  />
                </div>
                <div className="ml-5 leading-[1.6]">
                  <h3>
                    {authorDisplayName} <span>{timeAgo(publishedAt)}</span>
                  </h3>
                  <h2>{textOriginal}</h2>
                  <p>👍 {likeCount}</p>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Comments;

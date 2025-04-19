import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const videosApi = import.meta.env.VITE_YOUTUBE_VIDEOS_API;
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch(videosApi + apiKey);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setVideos(data.items);
      } catch (err) {
        console.error("Error fetching :", err);
      }
    }
    fetchVideos();
  }, [apiKey, videosApi]);

  //add Shimmer UI
  if (videos.length === 0) return null;
    return (
    <>
      <div className="flex flex-wrap justify-center items-stretch gap-1">
        {videos.map((video) => {
          return (
              <VideoCard key={video?.id} info={video}/>
          );
        })}
      </div>
    </>
  );
};

export default VideoContainer;

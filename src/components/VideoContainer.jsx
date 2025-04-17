import { useEffect } from "react";
import VideoCard from "./VideoCard";


const VideoContainer = () => {
  const videosApi = import.meta.env.VITE_YOUTUBE_VIDEOS_API
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY
  
  useEffect(()=>{
     async function fetchVideos(){
      try{
        const response = await fetch(videosApi+apiKey)
        if(!response.ok){
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        // console.log(data)
      }
      catch(err){
        console.error('Error fetching :', err);
      }
    }
    fetchVideos()
  },[apiKey, videosApi]);

  return (
    <>
      <div>VideoContainer</div>
      <VideoCard />
    </>
  );
};

export default VideoContainer;

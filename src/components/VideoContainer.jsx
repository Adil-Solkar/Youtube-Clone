import { useContext } from "react";
import {AppContext} from "../context/AppContext"
import VideoCard from "./VideoCard";

const VideoContainer = () => {

  const [videos] = useContext(AppContext)
 // add Shimmer UI
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

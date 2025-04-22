import React, { useEffect, useContext } from "react";
import {AppContext} from "../context/AppContext"
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";
import Comments from "./Comments";

const WatchPage = () => {
  const [videos] = useContext(AppContext)
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch();

  const videoData = videos.find(video => video.id === searchParams.get("v"))

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  // add shimmer
if(typeof videoData === "undefined") return null
  return (
    <>
    <div className="p-10 flex flex-col">
    <iframe 
      className="rounded-2xl mb-6"
       width="914"
       height="514" 
       src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; 
       autoplay; 
       clipboard-write; 
       encrypted-media; 
       gyroscope; 
       picture-in-picture; 
       web-share" 
       referrerPolicy="strict-origin-when-cross-origin" 
       allowFullScreen>
       </iframe>
       <Comments videoId={searchParams.get("v")} videoData={videoData}/>
    </div>
    </>
  )
};
// want total no of comments in this component to pass it down as props to Comments component

export default WatchPage;

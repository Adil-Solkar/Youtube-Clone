import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router";

const WatchPage = () => {
  
  const [searchParams] = useSearchParams()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <>
    <div className="p-10 ml-5 mt-20">
    <iframe width="914"
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
    </div>
    </>
  )
};

export default WatchPage;

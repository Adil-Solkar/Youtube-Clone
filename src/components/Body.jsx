import { useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import Head from "./Head";
import Sidebar from "./Sidebar";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
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

  return (
    <>
      <Head />
      <div className="flex min-h-screen mt-20">
        {isMenuOpen && <Sidebar />}
        <AppContext.Provider value={[ videos,setVideos ]}>
            <Outlet />
        </AppContext.Provider>
      </div>
    </>
  );
};

export default Body;

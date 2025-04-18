import Head from "./Head";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const Body = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <>
      <Head />
      <div className="flex min-h-screen ">
        {isMenuOpen && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
};

export default Body;

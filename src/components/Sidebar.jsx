import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  // Early return pattern
  if (!isMenuOpen) return null;
  return (
    <div className=" p-2 shadow-lg border ">
      <h2 className="font-bold ">Subscriptions</h2>
      <ul className="mb-2">
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h2 className="font-bold">Subscriptions</h2>
      <ul className="mb-2">
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h2 className="font-bold">Subscriptions</h2>
      <ul className="mb-2">
        <li>Sports</li>
        <li>Movies</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  );
};

export default Sidebar;

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.side.isMenuOpen);

  // if (!isMenuOpen) return null;

  return !isMenuOpen ? null : (
    <div className="sticky top-16 p-4 w-[196px] h-[calc(100vh-4rem)] overflow-y-auto scrollbar-webkit">
      <div className="space-y-4 mb-5">
        <h1 className="font-bold text-lg">
          <Link to="/">Home</Link>
        </h1>
        <h1 className="font-bold text-lg">Shorts</h1>
        <h1 className="font-bold text-lg">Subscriptions</h1>
        <h1 className="font-bold text-lg">YouTube Music</h1>
      </div>
      <hr className="my-5 border-gray-300" />
      <div className="space-y-3 mb-5">
        <h1 className="font-bold text-lg">Explore</h1>
        <ul className="space-y-2 text-sm">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
        </ul>
      </div>
      <hr className="my-5 border-gray-300" />
      <div className="space-y-3 mb-5">
        <h1 className="font-bold text-lg">Setting</h1>
        <h1 className="font-bold text-lg">Report History</h1>
        <h1 className="font-bold text-lg">Help</h1>
        <h1 className="font-bold text-lg">Feedback</h1>
      </div>
      <hr className="my-5 border-gray-300" />
      <div className="text-xs text-gray-500 leading-relaxed break-words whitespace-normal">
        <p>
          About Press Copyright Contact us Creators Advertise Developers Terms
          Privacy Policy & Safety How YouTube works Test new features &copy;{" "}
          {currentYear} Google LLC
        </p>
      </div>
      <hr className="my-5 border-gray-300" />
    </div>
  );
};

export default Sidebar;

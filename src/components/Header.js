import { GrMenu } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <div>
      <div className="grid grid-flow-col items-center ml-2 p-2 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex col-span-1 mt-2">
          <GrMenu
            className="text-xl cursor-pointer"
            onClick={() => handleToggleMenu()}
          />
          <a href="/">
            <img
              alt="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/2560px-YouTube_Premium_logo.svg.png"
              className="w-24 h-5 ml-4"
            />
          </a>
        </div>
        <div className="flex col-span-10 justify-center items-center relative">
          <input
            className={`border border-black rounded-l-full w-[550px] p-1`}
            name="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className={`p-2 w-10 flex items-center justify-center border border-black rounded-r-full hover:bg-gray-200`}
          >
            <IoIosSearch />
          </button>
          {showSuggestions && (
            <div className="absolute top-8 left-[250px] w-[550px] shadow-lg border rounded-md mt-1 z-10 bg-white text-black border-gray-300">
              <ul>
                {suggestions.map((s) => (
                  <li className="p-2  cursor-pointer hover:bg-gray-200" key={s}>
                    🔍 {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="flex col-span-1 items-center justify-end space-x-4">
          <MdOutlineVideoCall className="text-3xl" />
          <IoMdNotificationsOutline className="text-2xl" />
          <FaRegUserCircle className="text-xl cursor-pointer" />
        </div>
      </div>
      <div className="pt-16">
        {/* Main content goes here - Giving some space for Body */}
      </div>
    </div>
  );
};

export default Header;

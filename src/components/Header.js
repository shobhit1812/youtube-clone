import { GrMenu } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/sidebarSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

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
          />
          <button
            className={`p-2 w-10 flex items-center justify-center border border-black rounded-r-full `}
          >
            <IoIosSearch />
          </button>
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

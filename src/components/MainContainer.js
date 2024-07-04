import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer ";

const MainContainer = () => {
  return (
    <div>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;

// import { GrMenu } from "react-icons/gr";
// import { IoIosSearch } from "react-icons/io";
// import { MdOutlineVideoCall } from "react-icons/md";
// import { IoMdNotificationsOutline } from "react-icons/io";
// import { FaRegUserCircle } from "react-icons/fa";

// const Header = () => {
//   return (
//     <div>
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <div className="grid grid-flow-col items-center m-3 p-2">
//           <div className="flex col-span-1 items-center">
//             <GrMenu className="font-bold h-5 cursor-pointer text-2xl rounded-full" />
//             <a href="/">
//               <img
//                 alt="logo"
//                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/YouTube_Premium_logo.svg/2560px-YouTube_Premium_logo.svg.png"
//                 className="h-5 mx-4"
//               />
//             </a>
//           </div>
//           <div className="flex col-span-10 justify-center items-center relative">
//             <input
//               className={`h-8 w-[550px] rounded-l-full border border-black p-2`}
//             />
//             <button
//               className={`h-8 w-12 flex items-center justify-center rounded-r-full border border-black`}
//             >
//               <IoIosSearch className="text-xl" />
//             </button>
//           </div>
//           <div className="flex col-span-1 items-center justify-end space-x-4">
//             <MdOutlineVideoCall className="h-8 text-3xl" />
//             <IoMdNotificationsOutline className="h-8 text-2xl" />
//             <FaRegUserCircle className="h-8 text-xl cursor-pointer" />
//           </div>
//         </div>
//       </div>
//       <div className="pt-16">
//         {/* Main content goes here - Giving some space for Body */}
//       </div>
//     </div>
//   );
// };

// export default Header;

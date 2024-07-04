import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;

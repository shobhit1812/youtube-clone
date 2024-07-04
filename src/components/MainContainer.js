import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer ";

const MainContainer = () => {
  return (
    <div>
      <div className="flex w-[1150px] h-full overflow-x-auto scrollbar-hide">
        <ButtonList />
      </div>
      <div>
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;

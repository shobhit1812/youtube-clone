import Button from "./Button";
import { list } from "../utils/helper";

const ButtonList = () => {
  return (
    <div className="flex px-4 overflow-x-scroll ">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;

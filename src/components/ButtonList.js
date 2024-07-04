import Button from "./Button";
import { list } from "../utils/helper";

const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => {
        return <Button key={index} name={item} />;
      })}
    </div>
  );
};

export default ButtonList;

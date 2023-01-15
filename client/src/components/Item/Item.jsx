import { useState } from "react";
import Countdown from "../Countdown/CountDown";

const Item = ({ item, time }) => {
  const [editing, setEditing] = useState(false);
  const handleClick = (event) => {
    console.log(event.detail);
    switch (event.detail) {
      case 1: {
        console.log("single click");
        break;
      }
      case 2: {
        console.log("double click");
        setEditing(true);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleFocusLoss = () => {
    setEditing(false);
  };
  return (
    <div className="">
      {editing === false ? (
        <button
          className="btn  text-[#dbdbdb]
                hover:bg-[#ffffff] normal-case w-full h-24 m-1
                "
        >
          <div>
            <div>
              <Countdown date={time} />
            </div>
            <div className="text-lg">{item.name}</div>
          </div>
        </button>
      ) : (
        <input
          autoFocus
          type="text"
          placeholder={item.name}
          className="btn bg-[#ffffff] text-[#2d2d2d] w-full m-2
                hover:bg-[#ffffff] normal-case
                border-transparent focus:border-transparent focus:ring-0
                "
          onBlur={handleFocusLoss}
          defaultValue={item.name}
        />
      )}
    </div>
  );
};

export default Item;

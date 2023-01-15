import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFocus, selectItem } from "../../features/item/itemSlice";
import Countdown from "../Countdown";

const Item = ({ item, time }) => {
  // const item = useSelector(selectItem)
  // const dispatch = useDispatch()
  const [editing, setEditing] = useState(false);

  const handleClick = (event) => {
    console.log(event.detail);
    switch (event.detail) {
      case 1: {
        //change details's item
        console.log("single click");

        // dispatch(changeName("did the name change?"))
        break;
      }
      case 2: {
        //change details's item
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

  //... when it's too long, max preview count?
  return (
    <div className="">
      {editing === false ? (
        <button
          onClick={handleClick}
          className="btn bg-[#ffffff] text-[#2d2d2d]
                hover:bg-[#ffffff] normal-case w-full h-24 m-1
                "
        >
          <div className="text-3xl">
            <div>
              <Countdown date={time} />
            </div>
            <div>{item.name}</div>
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

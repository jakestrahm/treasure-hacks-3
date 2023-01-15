import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFocus, selectItem } from "../../features/item/itemSlice";
import Countdown from "../Countdown";

const Item = ({ item }) => {
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
                    className="btn  text-[#dbdbdb]
                hover:bg-[#ffffff] normal-case w-full h-24 m-1
                "
                >
                    <div className="text-xl">
                        <div>
                            <Countdown time={item.dueBy} />
                        </div>
                        <div className="text-sm">{item.name}</div>
                    </div>
                </button>
            ) : (
                <input
                    autoFocus
                    type="text"
                    placeholder={item.name}
                    className="btn  text-[#dbdbdb] w-full p-5 pt-8 pb-8 
                 normal-case border-transparent focus:border-transparent focus:ring-0"
                    onBlur={handleFocusLoss}
                    defaultValue={item.name}
                />
            )}
        </div>
    );
};

export default Item;

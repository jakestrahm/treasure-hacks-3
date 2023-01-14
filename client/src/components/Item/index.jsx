import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeName, selectItem } from '../../features/item/itemSlice'
import Countdown from '../Countdown'

const Item = ({ item }) => {
    // const item = useSelector(selectItem)
    // const dispatch = useDispatch()

    const [editing, setEditing] = useState(false);


    const handleClick = event => {
        console.log(event.detail);
        switch (event.detail) {
            case 1: {
                //change details's item
                console.log('single click');

                // dispatch(changeName("did the name change?"))
                break;
            }
            case 2: {
                //change details's item
                console.log('double click');
                setEditing(true);
                break;
            }
            default: {
                break;
            }
        }
    }

    const handleFocusLoss = () => {
        setEditing(false);
    }

    //... when it's too long, max preview count?
    return (
        <div className="pb-1 pl-1 mr-4">
            {
                editing === false ?
                    <button
                        onClick={handleClick}
                        className="btn w-full bg-[#ffffff] text-[#2d2d2d]
                hover:bg-[#ffffff] normal-case
                max-w-md">
                        <div>
                            <div><Countdown time={item.dueDate} /></div>
                            <div>{item.name}</div>
                        </div>
                    </button>
                    :
                    <input
                        autoFocus
                        type="text"
                        placeholder={item.name}
                        className="btn w-full  bg-[#ffffff] text-[#2d2d2d]
                hover:bg-[#ffffff] normal-case
                border-transparent focus:border-transparent focus:ring-0
                max-w-md
                "
                        onBlur={handleFocusLoss}
                        defaultValue={item.name}
                    />
            }
        </div >
    );

}

export default Item;


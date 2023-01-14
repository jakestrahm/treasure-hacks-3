import { dividerClasses } from "@mui/material";
import { useState } from "react";

const Item = ({ item }) => {

    const [editing, setEditing] = useState(false);
    const [myItem, setItem] = useState(item);


    const handleClick = event => {
        console.log(event.detail);
        switch (event.detail) {
            case 1: {
                //change details's item
                console.log('single click');
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
        <div>
            {
                editing === false ?
                    <button
                        onClick={handleClick}
                        className="btn w-full max-w-xs"
                    >{item.name} - {item.dueDate}
                    </button>
                    :
                    <input
                        autoFocus
                        type="text"
                        placeholder={item.name}
                        className="btn w-full max-w-xs"
                        onBlur={handleFocusLoss}
                        defaultValue={item.name}
                    />
            }
        </div>
    );

}

export default Item;


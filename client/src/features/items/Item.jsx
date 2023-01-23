import { useSelector, useDispatch } from "react-redux"
import { focusOnItem, addItem, updateItem, deleteItem, getItemsStatus } from "./itemsSlice";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Item({ item }) {
    const dispatch = useDispatch();
    const itemsStatus = useSelector(getItemsStatus);

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id));
    }

    const handleFocusOnItem = (id) => {
        dispatch(focusOnItem(id))
    }
    return (
        <div onClick={() => handleFocusOnItem(item.id)}>
            <ul key={item.id}>
                <li key={uuidv4()}>{item.name} -
                    <button onClick={() => handleDeleteItem(item.id)}>
                        {item.id}
                    </button>
                </li>
            </ul>
        </div>
    )
}

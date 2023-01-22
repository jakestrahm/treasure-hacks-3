import { useSelector, useDispatch } from "react-redux"
import { addItem, updateItem, deleteItem } from "./itemsSlice";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Item({ item }) {
    const dispatch = useDispatch();

    const handleDeleteItem = (id) => {
        dispatch(deleteItem(id));
    }
    return (
        <>
            <ul key={item.id}>
                <li key={uuidv4()}>{item.name} -
                    <button onClick={() => handleDeleteItem(item.id)}>
                        {item.id}
                    </button>
                </li>
            </ul>
        </>
    )
}

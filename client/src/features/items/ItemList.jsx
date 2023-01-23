import { useSelector, useDispatch } from "react-redux"
import { selectAllItems, getItemsStatus, getItemsError, fetchItems, addItem } from "./itemsSlice";
import { useEffect } from "react";
import Item from './Item'
import ItemForm from "./ItemForm";

import axios from "axios";

export default function ItemList() {
    const dispatch = useDispatch();
    const items = useSelector(selectAllItems);
    const itemsStatus = useSelector(getItemsStatus);
    const error = useSelector(getItemsError);

    useEffect(() => {
        if (itemsStatus === 'idle') {
            dispatch(fetchItems())
        }

    }, [itemsStatus, dispatch])


    return (
        <div>
            <ItemForm />
            {items.map((item) => <Item key={item.id} item={item} />)}
        </div>
    )
}

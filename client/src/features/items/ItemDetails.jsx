import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { selectAllItems, getFocusedItemId, getItemsError } from "./itemsSlice";

export default function ItemDetails() {
    const dispatch = useDispatch();
    const items = useSelector(selectAllItems);
    const focusedItemId = useSelector(getFocusedItemId);
    const [focusedItem, setFocusedItem] = useState({});
    console.log(focusedItem)


    useEffect(() => {
        let tmpArr = items.filter((item) => item.id === focusedItemId)
        setFocusedItem(tmpArr[0])

    }, [focusedItemId])


    return (
        <>
            {Object.keys(focusedItem).length === 0 ? <p>...</p> : focusedItem.name}
        </>
    )

}

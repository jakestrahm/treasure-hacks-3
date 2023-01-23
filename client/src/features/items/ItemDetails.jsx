import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { selectAllItems, getFocusedItemId, getItemsError } from "./itemsSlice";

export default function ItemDetails() {
    const dispatch = useDispatch();
    const items = useSelector(selectAllItems);
    const focusedItemId = useSelector(getFocusedItemId);
    const [focusedItem, setFocusedItem] = useState();

    useEffect(() => {
        let tmpArr = items.filter((item) => item.id === focusedItemId)
        setFocusedItem(tmpArr[0])

    }, [focusedItemId])


    /* ItemObject {
id: string
userId: string
name: string required
complete: boolean
categories: List[string]
description: optional(string)
dueBy: integer
createdAt: integer
updatedAt: integer
} */


    return (
        <div style={{ background: "lightpink" }}>
            {focusedItem && <p>{focusedItem.name}</p>}
        </div>
    )

}

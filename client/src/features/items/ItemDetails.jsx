import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllItems, getFocusedItemId } from './itemsSlice'

export default function ItemDetails() {
    const dispatch = useDispatch()
    const items = useSelector(selectAllItems)
    const focusedItemId = useSelector(getFocusedItemId)
    const [focusedItem, setFocusedItem] = useState()

    useEffect(() => {
        const tmpArr = items.filter((item) => item.id === focusedItemId)
        setFocusedItem(tmpArr[0])
    }, [focusedItemId, items])

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
        <div style={{ background: 'lightpink' }}>
            {focusedItem &&
                <div>
                    <p>{focusedItem.name}</p>
                    <p>{focusedItem.description}</p>
                    <p>{focusedItem.dueBy}</p>
                </div>}
        </div>
    )
}

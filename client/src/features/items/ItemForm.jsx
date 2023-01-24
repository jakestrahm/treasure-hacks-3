import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllItems, getItemsStatus, getItemsError, fetchItems, addItem } from './itemsSlice'

const DAY_IN_MILLI = 86400000

export default function ItemForm() {
    const dispatch = useDispatch()
    const [itemName, setItemName] = useState('')

    const handleAddItem = () => {
        const newItem = {
            name: itemName,
            description: 'try?',
            dueBy: Date.now() + DAY_IN_MILLI
        }

        console.log('newItem: ', newItem)

        if (itemName !== '') {
            setItemName('')
            dispatch(addItem(newItem))
        }
    }
    return (
        <div style={{ background: 'lightgreen' }}>
            <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
            <button onClick={handleAddItem}>add {itemName}</button>
        </div>
    )
}

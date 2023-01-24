import { useSelector, useDispatch } from 'react-redux'
import { selectAllItems, getItemsStatus, fetchItems } from './itemsSlice'
import { selectAllFilters } from '../filters/filtersSlice'
import { useEffect, useState } from 'react'
import Item from './Item'
import ItemForm from './ItemForm'

export default function ItemList() {
    const dispatch = useDispatch()
    const itemsFetched = useSelector(selectAllItems)
    const [items, setItems] = useState()
    const itemsStatus = useSelector(getItemsStatus)
    const filters = useSelector(selectAllFilters)

    // initial fetch
    useEffect(() => {
        if (itemsStatus === 'idle') {
            dispatch(fetchItems())
        }
        setItems(itemsFetched)
    }, [dispatch, itemsFetched, itemsStatus])

    // aplying filters
    useEffect(() => {
        filters.map(filter => console.log(filter))

        /* check if any filter is present in an item's categories */

        const filteredItems = itemsFetched.filter(function(item) {
            /* console.log(item)
            filters.forEach((filter) => {
                if (item.categories[filter] !== null) {
                    //
                    return item
                }
            })
            return null */
            return item
        })
        setItems(filteredItems)
    }, [filters, itemsFetched])

    return (
        <div style={{ background: 'lightgray' }}>
            <ItemForm />
            {items && items.map((item) => <Item key={item.id} item={item} />)}
        </div>
    )
}

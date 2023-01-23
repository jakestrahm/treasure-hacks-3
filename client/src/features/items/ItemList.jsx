import { useSelector, useDispatch } from "react-redux"
import { selectAllItems, getItemsStatus, getItemsError, fetchItems, addItem } from "./itemsSlice";
import { selectAllFilters } from '../filters/filtersSlice'
import { useEffect, useState } from "react";
import Item from './Item'
import ItemForm from "./ItemForm";

import axios from "axios";

export default function ItemList() {
    const dispatch = useDispatch();
    const itemsFetched = useSelector(selectAllItems);
    const [items, setItems] = useState();
    const itemsStatus = useSelector(getItemsStatus);
    const error = useSelector(getItemsError);
    const filters = useSelector(selectAllFilters)

    //initial fetch
    useEffect(() => {
        if (itemsStatus === 'idle') {
            dispatch(fetchItems())
        }
        setItems(itemsFetched);



    }, [itemsStatus, dispatch])

    //aplying filters
    useEffect(() => {
        console.log("from second useEffect")
        console.log(filters[0])

        const filteredItems = itemsFetched.filter((item) => {
            if (item.name !== filters[1]) {
                return item
            }
        })
        setItems(filteredItems);
        // itemsFetched.map((item) => console.log(item.name))
        // filters.map((filter) => console.log(filter))

    }, [selectAllFilters, itemsFetched, dispatch])


    return (
        <div style={{ background: "lightgray" }}>
            <ItemForm />
            {items && items.map((item) => <Item key={item.id} item={item} />)}
        </div>
    )
}

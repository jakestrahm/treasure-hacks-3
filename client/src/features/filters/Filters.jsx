import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addFilter, removeFilter } from "./filtersSlice";

export default function filters() {
    const dispatch = useDispatch();
    const filters = useSelector((state) => state.filters.filters);
    const [filter, setFilter] = useState('')
    // const [remove, setRemove] = useState('')

    const handleAddFilter = () => {
        if (filter !== '') {
            dispatch(addFilter(filter))
            setFilter('')
        }
    }

    const handleRemoveFilter = (f) => {
        console.log(f)
        dispatch(removeFilter(f))
        // setRemove('')
    }

    return (
        <div>
            <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
            <button onClick={handleAddFilter}>add</button>
            <ul>
                {filters.map(f =>
                    <li key={uuidv4()}><button onClick={() => handleRemoveFilter(f)}>{f}</button></li>
                )}
            </ul>
        </div>
    )
}

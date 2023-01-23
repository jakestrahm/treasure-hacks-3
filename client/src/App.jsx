import Counter from "./features/counter/Counter"
import Filters from "./features/filters/Filters"
import ItemDetails from "./features/items/ItemDetails"
import ItemList from "./features/items/ItemList"

function App() {

    return (
        <div>
            <Filters />
            <ItemList />
            <ItemDetails />
        </div>
    )
}

export default App

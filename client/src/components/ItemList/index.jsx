import Item from '../Item/'
const ItemList = ({ items }) => {

    return (
        <div>
            <ul>
                {items.map(item =>
                    <Item item={item} />

                )}
            </ul>

        </div>
    )
}

export default ItemList;

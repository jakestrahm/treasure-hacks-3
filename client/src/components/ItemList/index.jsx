import Item from "../Item";
const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;

import Item from "../Item";
const ItemList = ({ items, timeList }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ItemList;

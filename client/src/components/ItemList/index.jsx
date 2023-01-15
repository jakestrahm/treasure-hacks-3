import Item from "../Item";
const ItemList = ({ items, timeList,indexFinder }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => {
          indexFinder(index);
          return <Item key={item.id} item={item} />;
        })}
      </ul>
    </div>
  );
};

export default ItemList;

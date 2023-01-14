//hover tooltip that says click to remove
//
const Category = ({ category }) => {
    const handleClick = () => {
        //TODO call to patch itself out of categories array (api call)
        console.log("clicked")
    }
    return (
        <div>
            <button className="btn btn-outline" onClick={handleClick} >{category}</button>
        </div>
    )
}

export default Category;


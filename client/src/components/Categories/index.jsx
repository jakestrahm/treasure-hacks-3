import Category from '../Category'
const Categories = ({ categories }) => {
    return (
        categories.map(category =>
            <Category category={category} />
        )
    )
}

export default Categories;

import Category from '../Category'
const Categories = ({ categories }) => {
    return (
        categories.map(category =>
            <Category key={category.id} category={category} />
        )
    )
}

export default Categories;

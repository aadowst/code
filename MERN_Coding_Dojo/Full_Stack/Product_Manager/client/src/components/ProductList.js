
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { products } = props

    return (
        <div>
            {products.map((product, i) => {
                const { title, _id } = product

                return (
                    <div key={i}>
                        <Link to={`/products/${_id}`}><h4>{title}</h4></Link>
                    </div>
                )
            })}
        </div>
    )
}
export default ProductList;
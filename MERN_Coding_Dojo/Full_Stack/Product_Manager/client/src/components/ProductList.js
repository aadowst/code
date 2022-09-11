import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { products, removeFromDom } = props

    const deleteProduct = (productId) => {

        axios.delete('http://localhost:8000/api/products/' + productId)
        .then(res => {
            removeFromDom(productId)
        })
        .catch(err => console.error(err));
    }

    return (
        <div>
            {products.map((product, i) => {
                const { title, _id } = product

                return (

                    <div key={i} style={{display: 'flex', width: 300, justifyContent: 'space-between', alignItems: 'center'}}>
                        <Link to={`/products/${_id}`}><h4>{title}</h4></Link>
                        
                        <button style={{height: 20}}onClick={(e) => {deleteProduct(_id)}}>Delete</button>
                    </div>

                )
            })}
        </div>
    )
}
export default ProductList;
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {setProducts(res.data)})


    }, [])



    const removeFromDom = (productId) => {

        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            {products.map((product, i) => {
                const { title, _id } = product

                return (

                    <div key={i} style={{ display: 'flex', width: 300, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Link to={`/products/` + _id}><h4>{title}</h4></Link>
                        |
                        <Link to={'/products/' + _id + "/edit"}>Edit</Link>
                        |
                        <DeleteButton productId={_id} successCallback={() => removeFromDom(_id)} />
                    </div>

                )
            })}
        </div>
    )
}

export default ProductList;
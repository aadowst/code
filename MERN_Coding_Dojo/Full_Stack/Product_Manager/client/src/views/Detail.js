import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Detail = (props) => {
    const [product, setProduct] = useState ({})
    const {id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => setProduct(res.data))
        .catch(err => console.log(err))
    }, [id] );

    return (
        <div>
            <h3>Title:  {product.title}</h3>
            <h4>Price:  {product.price}</h4>
            <h5>Description:  {product.description}</h5>
        </div>
    )
}

export default Detail;
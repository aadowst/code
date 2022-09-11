import { useEffect, useState} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList'

const Main = (props)=> {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(res => {
            setProducts(res.data);
            setLoaded(true)
        })
        .catch(err => console.error(err))
    }, []);

    const removeFromDom = productId => {
        console.log("removeFromDom");
        setProducts(products.filter(product => product._id !== productId));
    }

    return(
        <div>
            <ProductForm/>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
            </div>
        </div>
    )
}
export default Main;
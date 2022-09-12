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
    }, [loaded]);

    const removeFromDom = productId => {

        setProducts(products.filter(product => product._id !== productId));
    }

    const createProduct = product => {
        axios.post('http://localhost:8000/api/products', product)
        .then(res=> {
            setLoaded(false)
            setProducts([...products, res.data])
        // .catch(err => console.error(err))
        })
    }

    return(
        <div>
            <ProductForm onSubmitProp={createProduct} initialTitle="" initialPrice="" initialDescription=""/>
            <hr/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

            {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
            </div>
        </div>
    )
}
export default Main;
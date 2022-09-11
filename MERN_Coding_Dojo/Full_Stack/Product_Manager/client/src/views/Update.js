import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Update = (props) => {
    const {id} = useParams();
    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ description, setDescription ] = useState ('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description)
        })
    }, [id]);

    const updateProduct = (e) => {

        e.preventDefault();
        axios.put('http://localhost:8000/api/products/' + id, {
            title, price, description
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <form onSubmit={updateProduct}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title}></input>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e) => setPrice(e.target.value)} value={price}></input>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input>
            </p>
            <input type="submit"/>
            </form>
        </div>
    )
}

export default Update;
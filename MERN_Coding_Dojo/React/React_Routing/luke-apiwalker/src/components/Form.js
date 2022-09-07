import { useNavigate } from "react-router-dom";
import { useState } from 'react'


const Form = () => {
    const navigate = useNavigate();
    const [resource, setResource]= useState("");
    const [id, setId] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    // TODO:  call the api
    
    //resource is person, planet, etc
    navigate(`/${resource}/${id}`);
}

    return(
        <form onSubmit={handleSubmit}>
            <label>Search for:  </label>
            <select value={resource} onChange={e => setResource(e.target.value)}>
                <option value="">select a resource</option>
                <option value="films">films</option>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="species">species</option>
                <option value="starships">starships</option>
            </select>

            <label>Enter id:  </label>
            <input type="number" value={id} onChange={e => setId(e.target.value)}></input>
            <input type="submit" value="Search"></input>
        </form>
    )
}

export default Form;
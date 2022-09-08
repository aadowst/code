import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from 'react'

const Display = () => {
    const navigate = useNavigate();
    const { resource, id } = useParams();
    const [resourceSearched, setResourceSearched] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true);
        axios.get(`https://swapi.dev/api/${resource}/${id}`)
            .then(res => {
                console.log(res.data)
                setResourceSearched(res.data);

            }).catch(err => {
                console.log(err);
                navigate('/error');
            }).finally(() =>
                {console.log("finally")
                    setIsLoading(false)}
            )

    }, [resource, id, navigate])

    const handleClick = (e, url) => {
        const splitUrl = url.split("/");
        // extract the id number from the homeworld url and call the api again
        navigate(`/planets/${splitUrl[5]}`)

    }

    if (!isLoading) {
        if(resourceSearched === null) return "no data";
        switch (resource) {
            case "people":
                return (
                    <div>
                        <h1>{resourceSearched.name}</h1>
                        <h2>Birth Year: <span style={{ fontWeight: "lighter" }}>{resourceSearched.birth_year}</span></h2>
                        <h2>Height: <span style={{ fontWeight: "lighter" }}>{resourceSearched.height} cm</span></h2>
                        <h2>Mass: <span style={{ fontWeight: "lighter" }}>{resourceSearched.mass} kg</span></h2>
                        <h2>Homeworld: <span style={{ fontWeight: "lighter" }} onClick={(e) => handleClick(e, resourceSearched.homeworld)}>Click Here</span></h2>

                    </div>
                )
            case "planets":
                return (
                    <div>
                        <h1>{resourceSearched.name}</h1>
                        <h2>Gravity: <span style={{ fontWeight: "lighter" }}>{resourceSearched.gravity}</span></h2>
                        <h2>Climate: <span style={{ fontWeight: "lighter" }}>{resourceSearched.climate}</span></h2>
                        <h2>Population: <span style={{ fontWeight: "lighter" }}>{resourceSearched.population}</span></h2>
                    </div>
                )

            default:
                return (<p>you searched for a  {resource} with an id of {id}</p>)
        }
    } else {
        return "Loading"
    }
}

export default Display;
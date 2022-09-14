import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { getAuthorById, updateAuthorById } from '../services/internalApiService';

export const EditAuthor = (props) => {
    const { id } = useParams()
    // return <h2> EditAuthor (id: {id})</h2>

    // USE STATE FOR ALL ATTRIBUTES
    const [name, setName] = useState("");
    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                // SET ALL NameS
                setName(data.name);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id])

    const handleEditClick = (event) => {
        event.preventDefault();

        // initializse new object with all model attributes
        const editedAuthor = {
            // shorthand if key name is attribute name
            name
        };

        updateAuthorById(id, editedAuthor)
            .then((updatedAuthor) => {
                navigate(`/authors/`);
            })
            .catch((error) => {
                console.log(error);
                setErrors(error?.response?.data?.errors);
            });
    };

    return (
        <div>
            <h2>Favorite Authors</h2>
            <Link style={{ margin: 10 }} to={`/authors/`}>Home</Link>
            <p>Edit this author...</p>
            <form >
                {/* Add fields for all attributes */}
                <div>
                    <label style={{ margin: 10 }}>Name</label>
                    {errors?.name &&
                        <span>{errors?.name?.message}</span>}
                    <br />
                    <input style={{ margin: 10 }} onChange={(event) => {
                        setName(event.target.value)
                    }}
                        value={name} />
                </div>
                <button style={{ margin: 10 }} onClick={() => navigate(`/authors`)}>Cancel</button>
                <input style={{ margin: 10 }} type="submit" value="Submit" onClick={handleEditClick} />

            </form>
            {/* display data here */}
        </div>
    )


}

export default EditAuthor;
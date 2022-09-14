import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { createAuthor } from '../services/internalApiService';

export const NewAuthor = (props) => {


    // USE STATE FOR ALL ATTRIBUTES
    const [name, setName] = useState("");

    const [errors, setErrors] = useState(null)

    const navigate = useNavigate();


    const handleSubmitClick = (event) => {
        event.preventDefault();

        // initializse new object with all model attributes
        const newAuthor = {
            // shorthand if key name is attribute name
            name
        };

        createAuthor(newAuthor)
            .then((createdAuthor) => {
                // Navigate to created Author or to all Authors

                navigate(`/authors`);
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
            <p>Add a new author...</p>
            <form onSubmit={handleSubmitClick}>
                {/* Add fields for all attributes */}
                <div>
                    <label style={{ margin: 10 }}>Name</label>
                    {errors?.name &&
                        <span>{errors?.name?.message}</span>}
                    <br />
                    <input style={{ margin: 10 }} onChange={(event) => {
                        setName(event.target.value)
                    }}
                        // is the value still needed
                        value={name} />
                </div>
                <button style={{ margin: 10 }} onClick={() => navigate(`/authors`)}>Cancel</button>
                <input style={{ margin: 10 }} type="submit" value="Submit" onClick={handleSubmitClick} />
            </form>
            {/* display data here */}
        </div>
    )
}

export default NewAuthor;
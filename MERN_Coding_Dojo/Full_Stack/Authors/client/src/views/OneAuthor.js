import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { deleteAuthorById, getAuthorById } from '../services/internalApiService';

export const OneAuthor = (props) => {
    const { id } = useParams()
    // return <h2> OneAuthor (id: {id})</h2>

    //LOWERCASE
    const [author, setAuthor] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAuthorById(id)
            .then((data) => {
                setAuthor(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id]);

    if (author === null) return null;

    const handleDeleteClick = (id) => {
        deleteAuthorById(id)
            .then((deletedAuthor) => {
                navigate('/authors');
            })
            .catch((error) => {
                console.log(error);
            })
    }

    // Destructure model here, if desired

    return (
        <div>
            {/* display data here */}

            <div>
                <button onClick={(e) => { handleDeleteClick(id) }}>Delete</button>

                <Link to={`/authors/${id}/edit`}>Edit</Link>
                /                   </div>
        </div>
    )


}

export default OneAuthor;
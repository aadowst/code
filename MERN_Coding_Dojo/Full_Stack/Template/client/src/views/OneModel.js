import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { deleteModelById, getModelById } from '../services/internalApiService';

export const OneModel = (props) => {
    const { id } = useParams()
    // return <h2> OneModel (id: {id})</h2>

    //LOWERCASE
    const [model, setModel] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getModelById(id)
            .then((data) => {
                setModel(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id]);

    if (model === null) return null;

    const handleDeleteClick = (id) => {
        deleteModelById(id)
            .then((deletedModel) => {
                navigate('/models');
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

                <Link to={`/models/${id}/edit`}>Edit</Link>
                /                   </div>
        </div>
    )


}

export default OneModel;
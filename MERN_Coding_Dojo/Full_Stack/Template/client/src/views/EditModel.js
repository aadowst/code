import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import { deleteModelById, getModelById, updateModelById } from '../services/internalApiService';

export const EditModel = (props) => {
    const { id } = useParams()
    // return <h2> EditModel (id: {id})</h2>

    // USE STATE FOR ALL ATTRIBUTES
    const [attribute, setAttribute] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        getModelById(id)
            .then((data) => {
                // SET ALL ATTRIBUTES
                setAttribute(data.attribute);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id])

    const handleEditClick = (event) => {
        event.preventDefault();

        // initializse new object with all model attributes
        const editedModel = {
            // shorthand if key name is attribute name
            attribute
        };

        updateModelById(id, editedModel)
            .then((updatedModel) => {
                navigate(`/models/${id}`);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <form onSubmit={handleEditClick}>
                {/* Add fields for all attributes */}
                <div>
                    <label>Attribute</label>
                    <input onChange={(event) => {
                        setAttribute(event.target.value)
                    }}
                    value={attribute}/>
                </div>
            <input type="submit" value="submit"/>
            </form>
            {/* display data here */}
        </div>
    )


}

export default EditModel;
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createModel } from '../services/internalApiService';

export const NewModel = (props) => {


        // USE STATE FOR ALL ATTRIBUTES
        const [attribute, setAttribute] = useState("");

        const [errors, setErrors] = useState(null)

        const navigate = useNavigate();


        const handleSubmitClick = (event) => {
            event.preventDefault();
    
            // initializse new object with all model attributes
            const newModel = {
                // shorthand if key name is attribute name
                attribute
            };
    
            createModel(newModel)
                .then((createdModel) => {
                    // Navigate to created model or to all models
                    const { _id } = createdModel;
                    navigate(`/models/${_id}`);
                })
                .catch((error) => {
                    console.log(error);
                    setErrors(error?.response?.data?.errors);
                });
        };

        return(
            <div>
            <form onSubmit={handleSubmitClick}>
                {/* Add fields for all attributes */}
                <div>
                    <label>Attribute</label>
                    {errors?.attribute && 
                        <span>{errors?.attribute?.message}</span>}

                    <input onChange={(event) => {
                        setAttribute(event.target.value)
                    }}
                    // is the value still needed
                    value={attribute}/>
                </div>
            <input type="submit" value="submit"/>
            </form>
            {/* display data here */}
        </div>
        )
}

export default NewModel;
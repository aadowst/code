import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    deleteModelById,
    getAllModels
} from '../services/internalApiService'



export const AllModels = (props) => {
    return <h2>AllModels</h2>

    // // UNCOMMENT BELOW WHEN READY
    // // **LOWERCASE**
    // const [models, setModels] = useState([])

    // useEffect(() => {
    //     getAllModels()
    //         .then((data) => {
    //             setModels(data);
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }, []);

    // const handleDeleteClick = (id) => {
    //     deleteModelById(id)
    //         .then((deletedModel) => {
    //             // **LOWERCASE**
    //             const filteredModels = models.filter((model) => {
    //                 return model._id != id
    //             })
    //         })
    // }

    // return (
    //     <div>
    //         <h2>All Models</h2>

    //         {models.map((model) => {
    //             //destructure more here if desired
    //             const { _id } = model
    //             return (
    //                 <div key={_id}>

    //                     {/* Display data here */}

    //                     <div>
    //                         <button onClick={(e) => { handleDeleteClick(_id) }}>Delete</button>
    //                         {/* choose link to match as appropriate */}
    //                         <Link to={`/models/${_id}/edit`}>Edit/View</Link>
    //                     </div>
    //                 </div>

    //             )
    //         })}
    //     </div>
    // );


};

export default AllModels;
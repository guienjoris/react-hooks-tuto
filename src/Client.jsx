import React from 'react';

const Client = ({details, onDelete, onEdit})=>{
    return(
        <div>
        <li key={details.id}>
            {details.nom}{' '}
        <button onClick={()=>onDelete(details.id)}>X</button>
        <button onClick = {()=>onEdit(details.id)}>Edit</button>
        </li>
        
</div>
    )
}

export default Client;

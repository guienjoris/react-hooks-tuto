import React from 'react';

const Client = ({details, onDelete, onEdit})=>{
    console.log(details)
    return(
        <li>
            {details.nom}{' '}
        <button onClick={()=>onDelete(details.id)}>X</button>{' '}
        <button onClick = {()=>onEdit(details.id)}>Edit</button>
        </li>
    )
}

export default Client;

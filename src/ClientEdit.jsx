import React,{useState} from 'react'

const ClientEdit = ({clientToEdit,editStatus,onClientUpdate,cancel})=>{
    const [updateClient,setUpdateClient] = useState({
        nom: clientToEdit.nom,
        id: clientToEdit.id
    });
    let result ='';
    const handleChange = event =>{
        setUpdateClient({nom: event.currentTarget.value , id:clientToEdit.id})
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const nom = updateClient.nom;
        const id = updateClient.id;
        onClientUpdate({nom,id})
        setUpdateClient({nom:'',id:0})
        cancel();
    };
    if(editStatus === true){
        result =<form onSubmit={handleSubmit}>
        Nouvelle valeur:
        <input onChange={handleChange} 
        type="text" />
        <button>Editer</button>
        <button onClick={cancel}>Annuler</button>
        </form>
    }else{
        result='';
    }
    return(result)

}

export default ClientEdit;
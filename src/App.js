import React , {useState} from 'react';
import './App.css';
import Client from './Client';
import ClientForm from './ClientForm';
import ClientEdit from './ClientEdit';

const App= ()=> {
  const [clients , setClients]= useState([
    {id:1, nom:"Joris Guien"},
    {id:2, nom: "Smaelle Lefort"},
    {id:3, nom: "Gramos Imeri"}
  ])
  const [editStatus, setEditStatus]= useState(false)
  const [clientToEdit, setclientToEdit]= useState({})
  const handleDelete = id =>{
    const updatedClients = [...clients];
    const index = updatedClients.findIndex(client=> client.id === id)
    updatedClients.splice(index,1);
    setClients(updatedClients);
  }
  const handleAdd = client =>{
    const updatedClients = [...clients];
        updatedClients.push(client);
        setClients(updatedClients)
  }
  const handleEdit = id=>{
    const updatedClients = [...clients];
    const index = updatedClients.findIndex(client => client.id === id);
    setclientToEdit(updatedClients[index])
    setEditStatus(true)
  }
  const handleUpdate = (client) =>{
    const updatedClients = [...clients];
    const index = updatedClients.findIndex(element => element.id === client.id);
    updatedClients[index] = client;
    setClients(updatedClients)
  }
  const cancel = ()=>{
    setEditStatus(false)
  }
  
  
    const title = " Liste des clients";
  return (
    <div className="App">
      <h1>{title}</h1>
      <ul>
      {clients.map(client=>
      <Client details={client} 
      onDelete={handleDelete}
      onEdit ={handleEdit}
      key= {client.id}
      />
    )}
      </ul>
      
      <ClientForm onClientAdd = {handleAdd} />
      <ClientEdit editStatus={editStatus} 
      clientToEdit={clientToEdit}
      onClientUpdate = {handleUpdate}
      cancel ={cancel}  
      />
      
    </div>
  );
}


export default App;

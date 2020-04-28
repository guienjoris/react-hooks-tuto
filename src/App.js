import React , {useState} from 'react';
import './App.css';
import Client from './Client';
import ClientForm from './ClientForm';
  
const App= ()=> {
  const [clients , setClients]= useState([
    {id:1, nom:"Joris Guien"},
    {id:2, nom: "Smaelle Lefort"},
    {id:3, nom: "Gramos Imeri"}
  ])
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
  
  
  
    const title = " Liste des clients";
  return (
    <div className="App">
      <h1>{title}</h1>
      <ul>
      {clients.map(client=>
      <Client details={client} 
      onDelete={handleDelete}
      />
    )}
      </ul>
      <ClientForm onClientAdd = {handleAdd} />
      
    </div>
  );
}


export default App;

import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [contacts, setContacts]=useState([]);

  useEffect(()=>{
    getData();
  }, [])

  function getData(){
    fetch('http://localhost:3000/contacts')
    .then(res=> res.json())
    .then(res=>setContacts([...res]))
  }


  return (
    <div className="App">
      <header className="App-header">
        {
          contacts.map(contact=>{
            return(
              <div className='contactCard' key={contact.id}>
                <h3>{contact.name}</h3>
                <p>{contact.email_address}</p>
                <p>{contact.age}</p>
              </div>
            )
          })
        }
      </header>
    </div>
  );
}

export default App;

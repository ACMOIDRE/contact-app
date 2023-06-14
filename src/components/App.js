import React, {useState} from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";


function App() {

  const [contacts,setContacts] = useState([]);

  const AddContactHandler = (contact)=>{
      
  setContacts([...contacts,contact]);

    console.log(contact);
  }

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Amir",
  //     email: "amir@gmail.com",
  //   },

  //   {
  //     id: "2",
  //     name: "neha",
  //     email: "neha@gmail.com",
  //   },

  //   {
  //     id: "3",
  //     name: "gaffar",
  //     email: "gaffar@gmail.com",
  //   },
  // ];

  return (
    <div className="ui container">
      <Header />
      <AddContact AddContactHandler = {AddContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;

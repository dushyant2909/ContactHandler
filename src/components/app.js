import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from './EditContact';
import "./App.css"
import { useState } from "react";
import { useEffect } from "react";


function App()
{
    const [allContacts,addContacts] = useState([])
    const [searchResults, filterSearchContact] = useState([]);

    const LocalStorageKey = "contacts"; //For local Storage

    useEffect(()=>{// Always put it before set wala use effect
        const retrievedContacts = JSON.parse(localStorage.getItem(LocalStorageKey));
        if (retrievedContacts)
        addContacts(retrievedContacts);
    },[])

    useEffect(()=>{ //This way we add items to local storage
        localStorage.setItem(LocalStorageKey,JSON.stringify(allContacts))
    },[allContacts])

    // To add new contact
    const addContactHandler = (contact) =>{
        addContacts(()=>{
            return ([...allContacts,{id:uuidv4(),...contact}]);
        })
    }

    //To delete a contact
    const deleteHandler = (id) =>{
        const dummyContactList = allContacts.filter((contact)=>{
            return (contact.id !== id);
        })
        addContacts(dummyContactList);
    }

    //To handle edited contact
    const editHandler = (editedContact) => {
        addContacts((prevContacts) =>
          prevContacts.map((contact) =>
            contact.id === editedContact.id ? editedContact : contact
          )
        );
      };

    //To handle search of contact
    const searchHandler =(searchValue) =>{
        // filterSearchContact(searchValue);
        console.log(searchValue);
        const filteredResults = allContacts.filter((contact) =>
            contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchValue.toLowerCase()) ||
            contact.phone.toLowerCase().includes(searchValue.toLowerCase())
            );
        filterSearchContact(filteredResults);
        console.log(filterSearchContact);
    } 

    // To handle make call
    const handleCall = (phoneNumber) => {
        window.location.href = `tel:${phoneNumber}`;
      };

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="ContactHandler/" element={<AddContact addNewContact = {addContactHandler} />} />
                <Route path="ContactHandler/allContacts" element={<ContactList contacts={searchResults.length > 0 ? searchResults.sort((a, b) => a.name.localeCompare(b.name)) : allContacts.sort((a, b) => a.name.localeCompare(b.name))} deleteHandler = {deleteHandler} searchHandler ={searchHandler} callHandler = {handleCall} />} />
                <Route path="ContactHandler/editContact/:id" element={<EditContact saveChangesHandler={editHandler} />} />
            </Routes>
        </Router>
    )
}

export default App;
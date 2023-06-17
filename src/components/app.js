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
    const LocalStorageKey = "contacts"; //For local Storage

    useEffect(()=>{// Always put it before set wala use effect
        const retrievedContacts = JSON.parse(localStorage.getItem(LocalStorageKey));
        if (retrievedContacts)
        addContacts(retrievedContacts);
    },[])

    useEffect(()=>{ //This way we add items to local storage
        localStorage.setItem(LocalStorageKey,JSON.stringify(allContacts))
    },[allContacts])

    const addContactHandler = (contact) =>{
        addContacts(()=>{
            return ([...allContacts,{id:uuidv4(),...contact}]);
        })
        // addContacts([...allContacts,contact]);
    }

    const deleteHandler = (id) =>{
        const dummyContactList = allContacts.filter((contact)=>{
            return (contact.id !== id);
        })
        addContacts(dummyContactList);
        // console.log(dummyContactList);
    }

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="ContactHandler/" element={<AddContact addNewContact = {addContactHandler} />} />
                <Route path="ContactHandler/allContacts" element={<ContactList contacts = {allContacts} deleteHandler = {deleteHandler} />} />
                <Route path="ContactHandler/editContact/:id" element={<EditContact />} />
            </Routes>
        </Router>
    )
}

export default App;
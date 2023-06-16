import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";
import "./App.css"

function app()
{
    const contacts = [
        {
            id:1,
            name:"Dushyant Bhutiyani",
            email:"dushyantb2003@gmail.com",
            phone:"8103599894"
        },
        {
            id:2,
            name:"Ansh Agrawal",
            email:"anshAgrawal@gmail.com",
            phone:"8103599894"
        },
        {
            id:3,
            name:"Jainul Hashmi",
            email:"hashmee.com",
            phone:"8103599894"
        },
        {
            id:4,
            name:"Vivekanand Rewapati",
            email:"ihateMangoes@gmail.com",
            phone:"8103599894"
        },
        {
            id:1,
            name:"Dushyant Bhutiyani",
            email:"2021it8du@mitsgwl.ac.in",
            phone:"8103599894"
        },
        {
            id:2,
            name:"Ansh Agrawal",
            email:"anshAgrawal@gmail.com",
            phone:"8103599894"
        },
        {
            id:3,
            name:"Jainul Hashmi",
            email:"hashmee.com",
            phone:"8103599894"
        },
        {
            id:4,
            name:"Vivekanand Rewapati",
            email:"ihateMangoes@gmail.com",
            phone:"8103599894"
        }
    ]
    return (
        <div>
            <Header />
            <AddContact />
            <ContactList contacts = {contacts} />
        </div>
    )
}

export default app;
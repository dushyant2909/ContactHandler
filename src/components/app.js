import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function app()
{
    const contacts = [
        {
            id:1,
            name:"Dushyant Bhutiyani",
            email:"dushyantb2003@gmail.com"
        },
        {
            id:2,
            name:"Ansh Agrawal",
            email:"anshAgrawal@gmail.com"
        },
        {
            id:3,
            name:"Jainul Hashmi",
            email:"hashmee.com"
        },
        {
            id:4,
            name:"Vivekanand Rewapati",
            email:"ihateMangoes@gmail.com"
        }
    ]
    return (
        <div className="ui container">
        <Header />
        <AddContact />
        <ContactList contacts = {contacts} />
        <ContactCard />
        </div>
    )
}

export default app;
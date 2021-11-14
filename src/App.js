import { Fragment } from "react";

import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import Filter from './components/Filter';
import ContactList from "./components/ContactList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {

    return (
        <Fragment>
            <Section>
                <h1 className="">Phonebook</h1>
                <ContactForm />
            </Section>
            <Section>
                <h2 className="">Contacts</h2>
                <Filter />
                <ContactList />
            </Section>
          <ToastContainer autoClose={3000}/>
        </Fragment>
    );
}

export default App;

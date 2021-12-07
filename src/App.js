import React from "react";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import "./styles/shared.scss";



const App = ()=> {
  return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2 className="title__contacts">Contacts</h2>
          <Filter />
          <ContactList/>
        </Section>
      </>
    );
}



export default App;

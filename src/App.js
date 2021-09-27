import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import "./styles/shared.scss";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContacts = (name, number) => {
    this.searchContact(name)
      ? this.messageAlert(name)
      : this.setState((prevState) => ({
          contacts: [
            ...prevState.contacts,
            { id: uuidv4(), name: name, number: number },
          ],
        }));
  };

  messageAlert(name) {
    alert(`${name} is already in contacts`);
  }

  searchContact(name) {
    const { contacts } = this.state;
    const normolizedName = name.toLowerCase();
    const contact = contacts.find(
      ({ name }) => name.toLowerCase() === normolizedName
    );
    return contact;
  }

  filteredName = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteFriend = (id) => {
    this.setState((PrevState) => ({
      contacts: PrevState.contacts.filter((item) => item.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normolizedFilter = filter.toLowerCase();

    const visibleName = contacts.filter((item) =>
      item.name.toLowerCase().includes(normolizedFilter)
    );

    return (
      <>
        <Section>
          <h1>Phonebook</h1>
          <ContactForm addContacts={this.addContacts} />
          <h2 className="title__contacts">Contacts</h2>
          <Filter onChange={this.filteredName} />
          <ContactList visibleName={visibleName} onClick={this.deleteFriend} />
        </Section>
      </>
    );
  }
}

export default App;

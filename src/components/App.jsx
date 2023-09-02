import { Component } from 'react';
import { Phonebook } from './Phonebook/Phonebook';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { FindContact } from './FindContact/FindContact';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: 'Annie Copeland',
  };

  addState = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  nameFilter = name => {
    this.setState({ filter: name });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.getFilteredContacts();
    return (
      <div>
        <Phonebook onAdd={this.addState} />
        <FindContact
          filter={visibleContacts}
          onFilterName={this.nameFilter}
          onFindContact={this.getFilteredContacts}
        />
        <Contacts
          onContactsDelete={this.deleteContacts}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

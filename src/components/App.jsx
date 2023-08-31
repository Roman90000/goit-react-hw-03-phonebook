import { Component } from 'react';
import { Phonebook } from './Phonebook';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addState = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...newContact }],
    }));
  };

  render() {
    return <Phonebook onAdd={this.addState} />;
    <Contacts options={} />;
  }
}

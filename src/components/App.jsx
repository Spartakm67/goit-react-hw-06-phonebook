import { useState, useEffect } from 'react';
import { Container, IfEmpty, DefaultButton } from "./App.styled"; 
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsFormList } from './ContactsFormList/ContactsFormList';
import { Filter } from './Filter/Filter';
import Notiflix from 'notiflix';

export const App = () => {

  const defaultContacts =
    [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  
  const [filter, setFilter] = useState('');
  
  const [contacts, setContacts] = useState(() => {
  
    const actualContacts = localStorage.getItem('contacts');
  
    if (actualContacts === null) {
      return defaultContacts;
    }

    const parsedContacts = JSON.parse(actualContacts);
    console.log('Parsed Contacts', parsedContacts);
    
    return parsedContacts;
  }
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const handleInputChange = event => {
    setFilter(event.target.value);
  };

  const addContact = newContact => {
    
    const isNameExists = contacts.find(contact =>
      contact.name.toLowerCase() === newContact.name.toLowerCase());
    
    if (isNameExists) {
      Notiflix.Notify.failure(`${newContact.name} is already in contacts`);
      return;
    }
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(
      contact => contact.id !== id));
  };

  const showContacts = () => {
    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  
  const addDefaultContacts = () => {
        
    setTimeout(() => {
      setContacts(defaultContacts);
    }, 2000);
    
    Notiflix.Notify.failure(`Really??? :)`);
    return;
  };
  
  return (
    <Container>
        
      <h1>Phonebook</h1>
      <ContactsForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleInputChange} />
      {contacts.length > 0 ? (
        <ContactsFormList
          items={showContacts()}
          onDelete={deleteContact}
        />
      ) : (
        <><IfEmpty> Phonebook is empty</IfEmpty>
          <DefaultButton type='button' onClick={addDefaultContacts}>
            Click to Add Default Contacts
          </DefaultButton>
        </>
      )}
        
    </Container>);
};

Notiflix.Notify.init({
  position: 'right-top',
  width: '400px',
  distance: '10px',
  opacity: 1,
  rtl: false,
  timeout: 2000,
});

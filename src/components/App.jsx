import { Container, IfEmpty, DefaultButton } from "./App.styled"; 
import { ContactsForm } from "./ContactsForm/ContactsForm";
import { ContactsFormList } from './ContactsFormList/ContactsFormList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getContacts } from 'redux/selectors';
import { addInitialContacts } from '../redux/contactsSlice';
import Notiflix from 'notiflix';

export const App = () => {

const contacts = useSelector(getContacts);
const dispatch = useDispatch();
    
  const addDefaultContacts = () => {
        
    setTimeout(() => {
      dispatch(addInitialContacts());
    // localStorage.clear();
    // window.location.reload()  

    }, 2000);
    
    Notiflix.Notify.failure(`Really??? :)`);
    return;
  };
  
  return (
    <Container>
        
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? (
        <ContactsFormList />
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

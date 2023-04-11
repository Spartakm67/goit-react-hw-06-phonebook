import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage, FormButton } from './ContactsForm.styled';
import * as Yup from 'yup';
// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

const phoneSchema = Yup.object().shape({
  nameContact: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required('Required, please Add Name!!!'),

  number: Yup.string()
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,`Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`)
    .required('Required, please Add Number!!!'),
});


export const ContactsForm = () => {

  const initialValue = {
  nameContact: '',
  number: '',
  };
  
const dispatch = useDispatch();
const contacts = useSelector(getContacts);
  
  
  function handleSubmit(values, { resetForm }) {

    console.log("Hello");
    
    const isName = contacts.some(
      contact => contact.name.toLowerCase() === values.nameContact.toLowerCase()
    );

    if (isName) {
      Notiflix.Notify.info(`Hey, ${values.nameContact} is already in contacts!`);
      return;
    } else {
      dispatch(addContact(values));
      resetForm();
    }
  }
  
  return (
    <Formik
      initialValues={initialValue}
      validationSchema={phoneSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="nameContact" />
          <ErrorMessage name="nameContact" component="div" />
        </FormField>

        <FormField>
          Number
          <Field type="tel" name="number"/>
          <ErrorMessage name="number" component="div" />
        </FormField>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};

Notiflix.Notify.init({
  position: 'right-top',
  width: '400px',
  distance: '10px',
  opacity: 1,
  rtl: false,
  timeout: 2000,
});
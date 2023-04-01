import { Formik, Field } from 'formik';
import { Form, FormField, ErrorMessage, FormButton } from './ContactsForm.styled';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const phoneSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      `Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan`
    )
    .required('Required'),

  number: Yup.string()
    .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,`Phone number must be digits and can contain spaces, dashes, parentheses and can start with +`)
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactsForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={phoneSchema}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
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

ContactsForm.propTypes={
   onSubmit:PropTypes.func.isRequired
   }
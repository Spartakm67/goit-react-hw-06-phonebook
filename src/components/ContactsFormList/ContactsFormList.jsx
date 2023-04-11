// import PropTypes from 'prop-types';
// import { ContactsList, FeedbackButton } from './ContactsFormList.styled'

// export const ContactsFormList = ({ items, onDelete }) => {
//   return (
//     <ul>
//       {items.map(item => (
//         <ContactsList key={item.id}>
//           <span>
//             {' '}
//             {item.name} : {item.number}{' '}
//           </span>
//           <FeedbackButton
//             onClick={() => {
//               onDelete(item.id);
//             }}
//           >
//             Delete
//           </FeedbackButton>
//         </ContactsList>
//       ))}
//     </ul>
//   );
// };

// // export const DefaultContacts = (onAddDefaultContacts) =>

// ContactsFormList.propTypes={
//   items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})).isRequired,
//   onDelete:PropTypes.func.isRequired,
// }

import { ContactsList, FeedbackButton } from './ContactsFormList.styled'
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsFormList = () => {

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactsList key={contact.id}>
          <span>
            {' '}
            {contact.name} : {contact.number}{' '}
          </span>
          <FeedbackButton
            onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
          >
            Delete
          </FeedbackButton>
        </ContactsList>
      ))}
    </ul>
  );
};


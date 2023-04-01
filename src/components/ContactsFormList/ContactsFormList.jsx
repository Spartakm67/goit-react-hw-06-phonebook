import PropTypes from 'prop-types';
import { ContactsList, FeedbackButton } from './ContactsFormList.styled'

export const ContactsFormList = ({ items, onDelete }) => {
  return (
    <ul>
      {items.map(item => (
        <ContactsList key={item.id}>
          <span>
            {' '}
            {item.name} : {item.number}{' '}
          </span>
          <FeedbackButton
            onClick={() => {
              onDelete(item.id);
            }}
          >
            Delete
          </FeedbackButton>
        </ContactsList>
      ))}
    </ul>
  );
};

// export const DefaultContacts = (onAddDefaultContacts) => 

ContactsFormList.propTypes={
  items:PropTypes.arrayOf(PropTypes.shape({id:PropTypes.string.isRequired})).isRequired,
  onDelete:PropTypes.func.isRequired,
}
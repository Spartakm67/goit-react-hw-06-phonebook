import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialState = [...initialContacts];

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            name: values.nameContact,
            number: values.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    addInitialContacts(state) {
      state.push(...initialContacts);
    },
  },
});

export const { addContact, deleteContact, addInitialContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;




// import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlice = createSlice({
//   name: 'contact',
//   initialState: initialContacts,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(values) {
//         return {
//           payload: {
//             name: values.nameContact,
//             number: values.number,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       return state.filter(contact => contact.id !== action.payload);
//     },

//     addInitialContacts(state) {
//       state.push(initialContacts);
      
//     },

//   },
// });

// export const { addContact, deleteContact, addInitialContacts } = contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
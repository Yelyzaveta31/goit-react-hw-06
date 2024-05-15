import { ADD_CONTACT, DELETE_CONTACT } from "./constants";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactsReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts.items, action.payload] };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

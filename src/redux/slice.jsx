import { createSlice } from "@reduxjs/toolkit";
const filterContacts  =  createSlice({

  name:'filter',
  initialState: '',
  reducers:{
    changeFilter(state,action){
       state = action.payload
    }
  }
})


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  reducers: {
    addContact: (state, action) => {
      const { id, name, number } = action.payload;
      state.push({ id, name, number });
    },
    deleteContact: (state, action) => {
      const contactIdToDelete = action.payload;
      return state.filter(contact => contact.id !== contactIdToDelete);
    },
    // filterContactsByName: (state, action) => {
      
    //   return state.status = action.payload
    // },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const {changeFilter} = filterContacts.actions;
export const contactsReducer =  contactsSlice.reducer;
export const  changeFilterReducer =  filterContacts.reducer;
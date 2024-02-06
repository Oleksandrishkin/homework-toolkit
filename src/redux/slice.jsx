import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addContacts, addNumber, fetchContacts, deleteContact } from "./operation";
const filterContacts  =  createSlice({

  name:'filter',
  initialState: '',
  reducers:{
    changeFilter(state,action){
       return state = action.payload.trim()
    }
  }
})


const contactsSlice = createSlice({
  name: "contacts", 
  initialState: {
    items: [], 
    isLoading: false,
    error: null
  },
  extraReducers(builder){
    builder
    .addCase(fetchContacts.fulfilled, (state, action)=>{
       
      state.items = action.payload
    })
    .addCase(addContacts.fulfilled, (state, action)=>{
   
      state.items.push(action.payload)
    })
   
    .addCase(deleteContact.fulfilled, (state, action)=>{

   const idx = state.items.findIndex((item)=>item.id === action.payload.id) 
      state.items.splice(idx, 1)
    })
 
    .addMatcher(isAnyOf(fetchContacts.pending,
       addContacts.pending, 
        deleteContact.pending), (state)=>{
          state.isLoading = true
    })
    .addMatcher(isAnyOf(fetchContacts.rejected,
      addContacts.rejected, 
       deleteContact.rejected), (state, action)=>{
        state.error = action.payload
   })

   .addMatcher(isAnyOf(fetchContacts.fulfilled,
    addContacts.fulfilled,
     deleteContact.fulfilled), (state)=>{
      state.isLoading = false
      state.error = null
 })


  }

  // name: 'contacts',
  // initialState: [
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ],
  // reducers: {
  //   addContact: (state, action) => {
  //     const { id, name, number } = action.payload;
  //     state.push({ id, name, number });
  //   },
  //   deleteContact: (state, action) => {
  //     const contactIdToDelete = action.payload;
  //     return state.filter(contact => contact.id !== contactIdToDelete);
  //   },
  //   filterContactsByName: (state, action) => {
      
  //     return state.status = action.payload
  //   },
  // },
})


export const {changeFilter} = filterContacts.actions;
export const contactsReducer =  contactsSlice.reducer;
export const  changeFilterReducer =  filterContacts.reducer;
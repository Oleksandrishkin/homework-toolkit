import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items
export const selectFilterValue = (state) => state.filter




export const selectVisibleContacts = createSelector([selectContacts ,selectFilterValue ], (contacts, filterValue)=>{
  return  contacts.filter((contact )=>{
        console.log(contact);
            return  contact.name.toLowerCase().includes(filterValue)
          })
}) 
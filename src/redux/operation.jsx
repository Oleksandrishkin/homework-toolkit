import  { createAsyncThunk } from "@reduxjs/toolkit"

import axios from 'axios'

// axios.defaults.baseURL = 'https://65b92f2bb71048505a8a615f.mockapi.io/'


export const fetchContacts = createAsyncThunk('contacts/fetchTasks', async(_, thunkApi)=>{
    try{
        const res = await axios.get('/contacts')
        return res.data
            } catch (error) {
        thunkApi.rejectWithValue('Упс Помилка')
            }
})

export const addContacts = createAsyncThunk('contacts/addName', async(contact,  thunkApi)=>{
    try{
const res = await axios.post('/contacts', contact)
return res.data
    } catch (error) {
thunkApi.rejectWithValue('Упс Помилка')
    }
})



export const deleteContact = createAsyncThunk('contacts/delete', async  (taskId, thunkAPI)=>{
    try{
const res = await axios.delete(`contacts/${taskId}`)
return res.data
    }catch(error){
thunkAPI.rejectWithValue(error.message)
    }
})

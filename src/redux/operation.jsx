import  { createAsyncThunk } from "@reduxjs/toolkit"

import axios from 'axios'

axios.defaults.baseURL = 'https://65b92f2bb71048505a8a615f.mockapi.io/'


export const fetchContacts = createAsyncThunk('contacts/fetchTasks', async(_, thunkApi)=>{
    try{
        const res = await axios.get('/contacts')
        return res.data
            } catch (error) {
        thunkApi.rejectWithValue('Упс Помилка')
            }
})

export const addName = createAsyncThunk('contacts/addName', async(text,  thunkApi)=>{
    try{
const res = await axios.post('/contacts', {text})
return res.data
    } catch (error) {
thunkApi.rejectWithValue('Упс Помилка')
    }
})

export const addNumber = createAsyncThunk('contacts/addNumber', async(text,  thunkApi)=>{
    try{
const res = await axios.post('/contacts', {text})
return res.data
    } catch (error) {
thunkApi.rejectWithValue('Упс Помилка')
    }
})

export const deleteContact = createAsyncThunk('contacts/delete', async (task, thunkAPI)=>{
    try{
const res = await axios.delete(`contacts/${task.id}`)
return res.data
    }catch(error){
thunkAPI.rejectWithValue(error.message)
    }
})

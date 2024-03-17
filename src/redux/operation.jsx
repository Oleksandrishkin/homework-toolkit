import  { createAsyncThunk } from "@reduxjs/toolkit"



import axios from './axiosConfig'; // Імпортуйте axios з вашого файлу з налаштуванням базового URL

export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (_, thunkApi) => {
  try {
    const res = await axios.get('/contacts');
    return res.data;
  } catch (error) {
    thunkApi.rejectWithValue('Упс Помилка');
  }
});

export const addContacts = createAsyncThunk('contacts/addName', async (contact, thunkApi) => {
  try {
    const res = await axios.post('/contacts', contact);
    return res.data;
  } catch (error) {
    thunkApi.rejectWithValue('Упс Помилка');
  }
});

export const deleteContact = createAsyncThunk('contacts/delete', async (taskId, thunkAPI) => {
  try {
    const res = await axios.delete(`contacts/${taskId}`);
    return res.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});
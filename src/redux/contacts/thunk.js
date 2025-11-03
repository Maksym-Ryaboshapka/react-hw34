import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { v4 as uuid } from "uuid";

const API_URL = process.env.REACT_APP_API_URL;

export const getContacts = createAsyncThunk("contacts/getContacts", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

export const addContact = createAsyncThunk("contacts/addContact", async ({ name, phone }) => {
  const res = await axios.post(API_URL, { id: uuid(), name, phone });
  return res.data;
});

export const removeContact = createAsyncThunk("contacts/removeContact", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});
import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, removeContact } from "./contacts/thunk";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers(builder) {
    builder
        .addCase(getContacts.pending, (state) => {
          state.loading = true;
        })
        .addCase(getContacts.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })

        .addCase(addContact.fulfilled, (state, action) => {
          state.items.push(action.payload);
        })

        .addCase(removeContact.fulfilled, (state, action) => {
          state.items = state.items.filter(c => c.id !== action.payload);
        });
  }
});

export default contactsSlice.reducer;
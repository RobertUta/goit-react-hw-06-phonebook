import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./phonebook-actions";
const initialItems = JSON.parse(localStorage.getItem("contacts"))
  ? JSON.parse(localStorage.getItem("contacts"))
  : [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
const initialFilter = "";
const itemReducer = createReducer(initialItems, {
  [actions.addContact]: (state, { payload }) => {
    let repeat = false;
    state.forEach((e) => {
      if (e.name.toLowerCase().includes(payload.name.toLowerCase())) {
        alert("this contact has already been added to the phonebook");
        return (repeat = true);
      }
    });
    if (repeat === true) {
      return state;
    }
    return [...state, payload];
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});
const filterReducer = createReducer(initialFilter, {
  [actions.filterContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

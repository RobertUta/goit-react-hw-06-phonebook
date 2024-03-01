import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contacts/ADD", ({ number, name }) => ({
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
}));
export const deleteContact = createAction("contacts/DELETE");

export const filterContact = createAction("contacts/CHANGE_FILTER");
export default { deleteContact, filterContact, addContact };

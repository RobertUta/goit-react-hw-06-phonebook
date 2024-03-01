import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../../redux/phonebook/phonebook-actions";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles({
  TextField: {
    display: "block",
    marginBottom: 10,
  },
});
export default function Filter({ onFilterInputChange }) {
  const dispatch = useDispatch();
  const [contacts, setContacts] = useState(null);
  useEffect(() => {
    const arr = fetch("http://localhost:3000/contacts").then((r) =>
      r.json().then((r) => setContacts(r))
    );
  }, []);
  console.log(contacts);
  const classes = useStyles();
  const filter = useSelector((state) => state.contacts.filter);
  return (
    <TextField
      value={filter}
      onChange={(e) => dispatch(actions.filterContact(e.currentTarget.value))}
      required
      fullWidth
      className={classes.TextField}
      id="filter"
      label="Find contact by name "
      type="text"
      variant="outlined"
      placeholder="enter  contact's name"
    />
  );
}

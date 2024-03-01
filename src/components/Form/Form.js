import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/phonebook/phonebook-actions";
const useStyles = makeStyles({
  TextField: {
    display: "block",
    marginBottom: 10,
  },
  Form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: 30,
  },
  Button: {
    display: "block",
  },

  Alert: {
    marginTop: 20,
    marginBottom: 30,
  },
});
export default function Form({ onPhoneFormSubmit }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const onSubmit = (data) => {
    dispatch(actions.addContact(data));
    setName("");
    setNumber("");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.Form}>
      <TextField
        {...register("name", {
          required: true,
        })}
        fullWidth
        className={classes.TextField}
        id="name"
        label="name"
        onChange={(e) => setName(e.currentTarget.value)}
        type="text"
        value={name}
        variant="outlined"
        placeholder="enter  contact's name"
        helperText="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
      />
      {errors.name && (
        <Alert className={classes.Alert} severity="error">
          This field is required
        </Alert>
      )}
      <TextField
        value={number}
        {...register("number", {
          required: true,
          minLength: 10,
        })}
        onChange={(e) => setNumber(e.currentTarget.value)}
        required
        placeholder="enter  contact's number"
        fullWidth
        className={classes.TextField}
        id="number"
        label="number"
        type="phone"
        variant="outlined"
        helperText="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      />
      {errors.number && (
        <Alert className={classes.Alert} severity="error">
          This field is required, it must be at least 10 characters long and
          include numbers, spaces, + and parentheses
        </Alert>
      )}
      <Button
        type="submit"
        disableElevation
        variant="contained"
        color="primary"
        size="large"
      >
        Add contact
      </Button>
    </form>
  );
}


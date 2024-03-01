import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { connect, useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/phonebook/phonebook-actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  List: {
    marginTop: 20,
  },
});
export default function ContactsList({ onDeleteButtonClick }) {
  const dispatch = useDispatch();

  const classes = useStyles();
  const items = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);
  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = items.filter((item) =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <List className={classes.List}>
      {visibleContacts ? (
        visibleContacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar>
                <AccountCircleIcon aria-label="person" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
            <ListItemText color="primary" primary={number} />
            <ListItemSecondaryAction>
              <IconButton
                id={id}
                onClick={(e) => {
                  const { id } = e.currentTarget;
                  return dispatch(actions.deleteContact(id));
                }}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))
      ) : (
        <></>
      )}
    </List>
  );
}

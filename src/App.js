import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Filter from "./components/Filter";
import ContactsList from "./components/ContactsList";
import Form from "./components/Form";
const useStyles = makeStyles({
  Container: {
    width: 400,
    padding: 15,
  },
  Typography: {
    marginBottom: 20,
  },
});
function App() {
  const classes = useStyles();

  return (
    <Container className={classes.Container} maxWidth="sm">
      <Typography
        className={classes.Typography}
        color="primary"
        align="left"
        variant="h1"
        component="h1"
      >
        Phonebook
      </Typography>
      <Form />
      <Typography
        className={classes.Typography}
        color="primary"
        align="left"
        variant="h3"
        component="h2"
      >
        Phonebook
      </Typography>
      <Filter />
      <ContactsList />
    </Container>
  );
}

export default App;

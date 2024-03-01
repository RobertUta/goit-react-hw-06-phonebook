import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors.js';
import { getFilterValue } from '../../redux/selectors.js';
import { deleteContact } from '../../redux/contactsSlice.js';
import styles from './ContactsList.module.scss';

function filterContacts(allContacts, filterValue) {
  if (filterValue !== '') {
    return allContacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  }
  return allContacts;
}

const ContactsList = () => {
  const dispatch = useDispatch();
  const allContacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const filteredContacts = filterContacts(allContacts, filterValue);

  const handleDeleteBtn = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ name, number, id }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            className={styles.button}
            type="button"
            onClick={() => {
              handleDeleteBtn(id);
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

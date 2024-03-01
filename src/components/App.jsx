import ContactsList from './ContactsList/ContactsList.jsx';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors.js';

import PhonebookEditor from './PhonebookEditor/PhonebookEditor.jsx';
import Section from './Section/Section.jsx';
import Filter from './Filter/Filter.jsx';

function App() {
    const contacts = useSelector(getContacts);

    return (
        <>
            <Section title="Phonebook">
                <PhonebookEditor />
            </Section>
            {contacts.length > 0 && (
                <Section title="Contacts">
                    <Filter />
                    <ContactsList />
                </Section>
            )}
        </>
    );
}

export default App;

import { useDispatch, useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
  updateFilter,
} from 'Store/contactSlice';
import {
  addContact,
  deleteContactbyId,
  getContacts,
} from 'Store/contactSliceOperations';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactList/ContactList';
import css from '../../components/ContactForm/ContactForm.module.scss';

function filterByString(field, filterValue) {
  return field.toLowerCase().trim().includes(filterValue.toLowerCase().trim());
}

const HomePage = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const onDeleteContact = contactId => {
    dispatch(deleteContactbyId(contactId));
  };

  const onAddContact = ({ name, number }) => {
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number.toLowerCase() === number.toLowerCase()
      )
    ) {
      alert(`${name} or entered number is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number, id: nanoid() }));
  };

  const onChangeFilter = ({ target: { value } }) => {
    dispatch(updateFilter(value.toString()));
  };

  const filteredContacts = contacts.filter(
    contact =>
      filterByString(contact.name, filter) ||
      filterByString(contact.number, filter)
  );

  return (
    <div className={css.contact_div}>
      {error && <p>error</p>}
      {isLoading && <p>Loading...</p>}
      <h1>Phonebook</h1>
      <ContactForm onAddContact={onAddContact} />

      <h2>Contacts</h2>

      <ContactFilter filter={filter} onChangeFilter={onChangeFilter} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </div>
  );
};

export default HomePage;

import React from 'react';
import css from './ContactList.module.scss';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={css.contact_list}>
        {contacts.map(contact => {
          return (
            <li key={nanoid()} className={css.contact__item}>
              {contact.name}: {contact.number}
              <button
                onClick={() => onDeleteContact(contact.id)}
                className={css.button_30}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;

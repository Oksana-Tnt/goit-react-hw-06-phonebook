import Contact from 'components/Contact/Contact';
import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="list-group">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className="list-group-item justify-content-md-center">
        <Contact
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);

export default ContactList;

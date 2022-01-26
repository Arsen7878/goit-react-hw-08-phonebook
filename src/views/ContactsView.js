import React from 'react';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactsView = () => {
  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;

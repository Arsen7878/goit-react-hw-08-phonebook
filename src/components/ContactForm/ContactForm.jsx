import Button from 'components/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import c from './ContactForm.module.css';
import { contactsOperations, contactsSelectors } from 'redux/contatcs';
import { authSelectors } from 'redux/auth';

const ContactForm = () => {
  const [name, setName] = useState('');

  const [number, setNumber] = useState('');

  const contacts = useSelector(contactsSelectors.getContacts);

  const token = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();

  const handleInput = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const isOldContact = contacts.find(contact => contact.name === name);

    if (isOldContact) {
      alert(`${name} is already in contacts`);
      setName('');
      return;
    }

    dispatch(contactsOperations.addContact({ user: { name, number }, token }));

    reset();
  };

  const reset = () => {
    setName('');

    setNumber('');
  };

  return (
    <form className={c.form} onSubmit={handleSubmit}>
      <label className={c.label}>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          className={c.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={c.label}>
        Number:
        <input
          type="number"
          name="number"
          value={number}
          onChange={handleInput}
          className={c.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <Button type="submit" title="Add" />
    </form>
  );
};

export default ContactForm;

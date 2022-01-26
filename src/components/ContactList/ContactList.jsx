import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from '../ContactListItem';
import { contactsOperations, contactsSelectors } from 'redux/contatcs';
import { authSelectors } from 'redux/auth';
import c from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const token = useSelector(authSelectors.getToken);

  const dispatch = useDispatch();

  // помнить, что при выходе токен меняется на null, ф-ция useEffect отрабатывает, в параметр token прилетает null, поєтому проверка
  useEffect(() => {
    if (token) {
      dispatch(contactsOperations.getContacts(token));
    }
  }, [dispatch, token]);

  return (
    <ul className={c.list}>
      {contacts &&
        contacts.map(({ name, number, id }) => (
          <li key={id} className={c.item}>
            <ContactListItem
              name={name}
              number={number}
              id={id}
              token={token}
            />
          </li>
        ))}
    </ul>
  );
};

export default ContactList;

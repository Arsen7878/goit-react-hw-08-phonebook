import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

import Button from '../Button';
import { contactsOperations } from 'redux/contatcs';
import c from './ContactListItem.module.css';

const ContactListItem = ({ name, number, id, token }) => {
  const dispatch = useDispatch();

  const location = useLocation();

  const deleteContactUser = id => {
    dispatch(contactsOperations.deleteContact({ id, token }));
  };

  const openModal = () => {
    dispatch(contactsOperations.stateModal(true));
  };

  return (
    <div className={c.description}>
      <div className={c.box}>
        <p>{name}:</p>
        <span className={c.number}>{number}</span>
      </div>
      <div className={c.boxButton}>
        <ul className={c.list}>
          <li className={c.item}>
            <Button
              type="button"
              title="Delete"
              onClick={() => deleteContactUser(id)}
            />
          </li>
          <li className={c.item}>
            <Link
              to={{
                pathname: `${location.pathname}/${id}`,
                state: { id, from: location },
              }}
            >
              <Button type="button" title="Update" onClick={openModal} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactListItem;

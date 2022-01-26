import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../Button';
import c from './UserMenu.module.css';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = () => {
  const token = useSelector(authSelectors.getToken);

  const email = useSelector(authSelectors.getEmail);

  const dispatch = useDispatch();

  return (
    <div className={c.boxMenu}>
      <p className={c.userName}>{email}</p>
      <Button
        type="button"
        title="Logout"
        onClick={() => dispatch(authOperations.logOut(token))}
      />
    </div>
  );
};

export default UserMenu;

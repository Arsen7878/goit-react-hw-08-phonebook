import React from 'react';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import c from './AppBar.module.css';
import { navigationData } from 'utils';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const AppBar = () => {
  const isAuth = useSelector(getIsLoggedIn);
  return (
    <header className={c.header}>
      <Navigation navigation={navigationData.navigationSite} />

      {isAuth ? (
        <UserMenu />
      ) : (
        <Navigation navigation={navigationData.navigationUser} />
      )}
    </header>
  );
};

export default AppBar;

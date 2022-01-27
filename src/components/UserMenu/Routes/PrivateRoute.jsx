import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

import PropTypes from 'prop-types';
import { any } from 'prop-types';

// если пользователь залогинен его пускает на "/contacts" , если нет - перенаправляет на "/login"
const PrivateRoute = ({ children, redirectTo, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

PrivateRoute.propT = {
  children: PropTypes.number.isRequired,
  redirectTo: PropTypes.string.isRequired,
  routeProps: any,
};

export default PrivateRoute;

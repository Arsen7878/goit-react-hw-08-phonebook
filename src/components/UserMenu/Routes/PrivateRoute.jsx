import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import { routes } from 'routes';

// если пользователь залогинен его пускает на "/contacts" , если нет - перенаправляет на "/login"
const PrivateRoute = ({ children, redirectTo, ...routeProps }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
};

export default PrivateRoute;

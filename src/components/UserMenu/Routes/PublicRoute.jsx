import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';
import { any } from 'prop-types';

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  restricted: PropTypes.bool.isRequired,
  redirectTo: PropTypes.string.isRequired,
  routeProps: any,
};

export default PublicRoute;

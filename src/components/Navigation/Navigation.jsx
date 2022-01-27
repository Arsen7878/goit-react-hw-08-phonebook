import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import PropTypes from 'prop-types';
import c from './Navigation.module.css';
import { arrayOf } from 'prop-types';

const Navigation = ({ navigation }) => {
  const isAuth = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={c.navBox}>
      <ul className={c.list}>
        {isAuth
          ? navigation.map(({ route, title }) => (
              <li className={c.item} key={route}>
                <NavLink exact activeClassName={c.activeLink} to={route}>
                  {title}
                </NavLink>
              </li>
            ))
          : navigation
              .filter(({ privateRoute }) => privateRoute === isAuth)
              .map(({ route, title }) => (
                <li className={c.item} key={route}>
                  <NavLink exact activeClassName={c.activeLink} to={route}>
                    {title}
                  </NavLink>
                </li>
              ))}
      </ul>
    </div>
  );
};

Navigation.propTypes = {
  navigation: arrayOf(
    PropTypes.shape({
      route: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      privateRoute: PropTypes.bool.isRequired,
    }),
  ),
};

export default Navigation;

import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import c from './Navigation.module.css';

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

export default Navigation;

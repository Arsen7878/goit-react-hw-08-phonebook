import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { routes } from './routes';
import { authOperations } from 'redux/auth';
import { contactsSelectors, contactsOperations } from 'redux/contatcs';
import PrivateRoute from 'components/UserMenu/Routes/PrivateRoute';
import PublicRoute from 'components/UserMenu/Routes/PublicRoute';

import AppBar from './components/AppBar';
import Container from './components/Container';
import Modal from 'components/Modal';
import UpdateForm from 'components/UpdateForm';
import MyLoader from 'components/MyLoader';

import './styles/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LoginView = lazy(() =>
  import('./views/LoginView.js' /* webpackChunkName: "login-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView.js' /* webpackChunkName: "register-page" */),
);
const ContactsView = lazy(() =>
  import('./views/ContactsView.js' /* webpackChunkName: "contacts-page" */),
);

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-page"*/),
);

const App = () => {
  const isModalOpen = useSelector(contactsSelectors.getStateModal);

  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const onCloseModal = () => {
    history.push(location?.state?.from);
    dispatch(contactsOperations.stateModal(false));
  };

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <Container>
        <Suspense fallback={<MyLoader />}>
          <Switch>
            <PublicRoute
              path={routes.register}
              exact
              restricted
              redirectTo={routes.contacts}
            >
              <RegisterView />
            </PublicRoute>

            <PublicRoute
              path={routes.login}
              exact
              restricted
              redirectTo={routes.contacts}
            >
              <LoginView />
            </PublicRoute>

            <PrivateRoute path={routes.contacts} redirectTo={routes.login}>
              <ContactsView />
            </PrivateRoute>

            <PublicRoute path={routes.home} exact>
              <HomeView />
            </PublicRoute>

            <Route component={HomeView} />
          </Switch>
        </Suspense>
      </Container>
      {isModalOpen && (
        <Modal onCloseModal={onCloseModal}>
          <UpdateForm onCloseModal={onCloseModal} />
        </Modal>
      )}

      <ToastContainer />
    </>
  );
};

export default App;

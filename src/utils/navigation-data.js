import { routes } from 'routes';

export const navigationSite = [
  {
    route: routes.home,
    title: 'Home',
    privateRoute: false,
  },
  {
    route: routes.contacts,
    title: 'Contacts',
    privateRoute: true,
  },
];

export const navigationUser = [
  {
    route: routes.register,
    title: 'Registration',
    privateRoute: false,
  },
  {
    route: routes.login,
    title: 'Login',
    privateRoute: false,
  },
];

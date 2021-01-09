/* eslint-disable import/no-duplicates */
/*!
*/
import Dashboard from '../src/containers/Dashboard';
// import DevicesList from '../src/containers/DevicesList';
// import UsersList from './containers/UsersList';
// import Settings from '../src/containers/Settings';
// import Login from '../src/containers/Login';

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    layout: '/admin',
    icon: 'pe-7s-graph',
    component: Dashboard,
  },
  {
    path: '/deviceslist',
    name: 'Restaurant',
    layout: '/admin',
    icon: 'pe-7s-plugin',
    component: Dashboard,
  },
  {
    path: '/userslist',
    name: 'Menu',
    layout: '/admin',
    icon: 'pe-7s-note2',
    component: Dashboard,
  },
  {
    path: '/settings',
    name: 'Order List',
    layout: '/admin',
    icon: 'pe-7s-news-paper',
    component: Dashboard,
  },
  {
    path: '',
    name: 'Customer Review',
    layout: '/admin',
    icon: 'pe-7s-moon',
    component: Dashboard,
  },
  {
    collapse: true,
    path: '/maps',
    name: 'Report',
    state: 'openMaps',
    icon: 'pe-7s-map-marker',
    views: [
      {
        path: '/google-maps',
        layout: '/admin',
        name: 'Google Maps',
        mini: 'GM',
        component: Dashboard,
      },
      {
        path: '/full-screen-maps',
        layout: '/admin',
        name: 'Full Screen Map',
        mini: 'FSM',
        component: Dashboard,
      },
      {
        path: '/vector-maps',
        layout: '/admin',
        name: 'Vector Map',
        mini: 'VM',
        component: Dashboard,
      },
    ],
  },
  {
    path: '/charts',
    layout: '/admin',
    name: 'Support',
    icon: 'pe-7s-graph1',
    component: Dashboard,
  },
  {
    path: '/calendar',
    layout: '/admin',
    name: 'Promo',
    icon: 'pe-7s-date',
    component: Dashboard,
  },
  {
    collapse: true,
    path: '/pages',
    name: 'Service Request',
    state: 'openPages',
    icon: 'pe-7s-gift',
    views: [
      {
        path: '/user-page',
        layout: '/admin',
        name: 'User Page',
        mini: 'UP',
        component: Dashboard,
      },
      {
        path: '/login-page',
        layout: '/auth',
        name: 'Login Page',
        mini: 'LP',
        component: Dashboard,
      },
      {
        path: '/register-page',
        layout: '/auth',
        name: 'Register',
        mini: 'RP',
        component: Dashboard,
      },
      {
        path: '/lock-screen-page',
        layout: '/auth',
        name: 'Lock Screen Page',
        mini: 'LSP',
        component: Dashboard,
      },
    ],
  },
];

export default routes;

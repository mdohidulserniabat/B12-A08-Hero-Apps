import { createBrowserRouter } from 'react-router';
import { Component } from 'react';
import App from '../App';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Error from '../Pages/Error';
import Allapps from '../Pages/Allapps';
import AppDetails from '../Pages/AppDetails';
import install from '../Pages/install';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('../data.json'),
        Component: Home,
      },
    ],
  },
  {
    path: '/apps',
    loader: () => fetch('../data.json'),
    Component: Allapps,
  },
  {
    path: '/app/:id',
    loader: () => fetch('../data.json'),
    Component: AppDetails,
  },
  {
    path: '/install',
    Component: install,
  },
]);
export default router;

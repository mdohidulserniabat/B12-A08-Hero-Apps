import { createBrowserRouter } from 'react-router';
import { Component } from 'react';
import App from '../App';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Error from '../Pages/Error';
import Allapps from '../Pages/Allapps';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: '/',
        loader: () => fetch('data.json'),
        Component: Home,
      },
    ],
  },
  {
    path: '/apps',
    Component: Allapps,
  },
]);
export default router;

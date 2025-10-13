import { createBrowserRouter } from 'react-router';
import App from '../App';
import Apps from '../Pages/Apps';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
  },
  {
    path: '/about',
    Component: Apps,
  },
]);
export default router;

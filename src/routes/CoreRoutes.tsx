import Home from '../components';

interface CoreRoutes {
  path: string;
  exact: boolean;
  auth: boolean;
  title: string;
  component: React.FC;
}
const mainRoutes: Array<CoreRoutes> = [
  {
    path: '/',
    exact: true,
    auth: false,
    title: 'Home',
    component: Home,
  },
];

const coreRoutes = [mainRoutes];
export default coreRoutes;

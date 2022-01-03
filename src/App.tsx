import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import configureStore from './redux/store/configureStore';
import MainRoutes from './routes';

const store = configureStore();
const App: React.FC = (): JSX.Element => (
  <Provider store={store}>
    <Router>
      <MainRoutes />
    </Router>
  </Provider>
);

export default App;

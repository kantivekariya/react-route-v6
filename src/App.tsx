import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './redux/store/configureStore';
import MainRoutes from './routes';

const store = configureStore();
const App = () => (
  <Provider store={store}>
    <MainRoutes />
  </Provider>
);

export default App;

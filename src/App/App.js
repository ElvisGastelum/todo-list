import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

import Todos from '../pages/Todos';

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export { App };

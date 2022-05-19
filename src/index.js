import React from 'react';
import store from './redux/store'
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

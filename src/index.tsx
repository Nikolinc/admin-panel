import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { Provider } from 'react-redux';
import store from 'store';
import Loader from 'pages/loader/loader';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

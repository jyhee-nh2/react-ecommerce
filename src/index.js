import React from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './redux-state/CartState';
import { ChakraProvider } from '@chakra-ui/react';

const root = render.createRoot(document.getElementById('root'));

render(
  <App/>,
  document.getElementById('root')
);

/*
root.render(
  <React.StrictMode>
    <ChakraProvider>

      <Provider store={store}>
        <App />
      </Provider>

    </ChakraProvider>
  </React.StrictMode>
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

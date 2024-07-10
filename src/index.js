import React from 'react';
import { hydrate, render } from "react-dom";
import ReactDOM from 'react-dom/client';
// import { render } from 'react-snapshot';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './redux-state/CartState';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
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

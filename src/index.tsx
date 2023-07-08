import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from '@view/main-page';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from '@store/index';
import { ThemeProvider } from '@mui/material';

import theme from '@utils/material-ui-theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


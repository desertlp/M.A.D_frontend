import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

// Themes (Material-UI)
import theme from './components/MatUI/theme';
import { ThemeProvider } from '@material-ui/core/styles';


ReactDOM.render(
  // StrictMode is a tool for highlighting potential problems in an application. Like Fragment, StrictMode does not render any visible UI. It activates additional checks and warnings for its descendants.
  <React.StrictMode>  
    <Router>  
      <ThemeProvider theme={ theme }>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

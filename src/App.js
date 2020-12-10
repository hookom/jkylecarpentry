import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './assets/theme';
import Header from './components/Header';
import ContentContainer from './components/ContentContainer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <ContentContainer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

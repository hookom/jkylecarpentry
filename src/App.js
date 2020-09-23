import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import ContentContainer from './components/ContentContainer';

const App = () => {
  return (
    <Router>
      <Header />
      <ContentContainer />
    </Router>
  );
}

export default App;

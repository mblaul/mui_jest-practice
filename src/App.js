import React, { Component } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './constants/theme';

import Navbar from './components/Navbar';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Container />
      </MuiThemeProvider>
    );
  }
}

export default App;

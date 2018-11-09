import React, { Component } from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../constants/theme';

import renderer from 'react-test-renderer';

export function withTheme(Component) {
  return <MuiThemeProvider theme={theme}>{Component}</MuiThemeProvider>;
}

export function createTree(wrapper) {
  return renderer.create(wrapper).toJSON();
}

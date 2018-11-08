import React from 'react';
import { createShallow, createMount } from '@material-ui/core/test-utils/';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../constants/theme';

import Landing from '../components/landing/Landing';

describe('<Landing />', () => {
  const withTheme = Componenet => {
    return <MuiThemeProvider theme={theme}>{Componenet}</MuiThemeProvider>;
  };

  let wrapper;
  wrapper = createShallow(withTheme(Landing));

  // beforeAll(() => {

  // });

  it('renders', () => {
    console.log(wrapper.debug());
  });
});

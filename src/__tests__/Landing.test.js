import React from 'react';
import { shallow, mount } from 'enzyme';
import { createShallow, createMount } from '@material-ui/core/test-utils/';

import { withTheme, createTree } from '../helpers/helpers';

import Landing from '../components/landing/Landing';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

describe('<Landing />', () => {
  let shallow;
  let shallowWrapper;
  let mount;
  let mountWrapper;
  let wrapper;

  beforeAll(() => {
    shallow = createShallow();
    shallowWrapper = shallow(withTheme(<Landing />));

    mount = createMount();
    mountWrapper = mount(withTheme(<Landing />));
  });

  it('renders without crashing', () => {
    shallow(withTheme(<Landing />));
  });

  it('has a Paper element', () => {
    expect(mountWrapper.containsMatchingElement(Paper)).toEqual(true);
  });

  it('has a Typography element', () => {
    expect(createTree(mountWrapper)).toMatchSnapshot();
    expect(mountWrapper.containsMatchingElement(Typography)).toEqual(true);
  });
});

import React from 'react';
import { shallow } from enzyme;
import App from './App';

describe('App', () => {
  test('should render App component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper).toBeTruthy();
    expect(wrapper.length).toBe(1);
  })
})
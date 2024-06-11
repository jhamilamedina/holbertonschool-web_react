// import { render, screen } from '@testing-library/react';
import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';

describe('App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('Renderizar son romperse.', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('Renderiza con un elemento con clase App-header', () => {
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  it('Renderiza con un elemento con clase App-body', () => {
    expect(wrapper.find('.App-body').length).toBe(1);
  });

  it('Renderiza con un elemento con clase App-footer', () => {
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
});
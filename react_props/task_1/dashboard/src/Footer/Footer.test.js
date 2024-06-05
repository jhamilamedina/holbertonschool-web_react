import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer'; // Asegúrate de que esta ruta sea correcta según tu estructura de proyecto

describe('Footer Component', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text().includes('Copyright')).toBe(true);
  });
});
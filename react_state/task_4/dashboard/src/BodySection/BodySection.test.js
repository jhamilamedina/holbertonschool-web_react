import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';

describe('BodySection component', () => {
  it('should render correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title="test title">
        <p>test children node</p>
      </BodySection>
    );

    // Verificar que hay un h2 y contiene el texto "test title"
    const h2 = wrapper.find('h2');
    expect(h2).toHaveLength(1);
    expect(h2.text()).toEqual('test title');

    // Verificar que hay un p y contiene el texto "test children node"
    const p = wrapper.find('p');
    expect(p).toHaveLength(1);
    expect(p.text()).toEqual('test children node');
  });
});

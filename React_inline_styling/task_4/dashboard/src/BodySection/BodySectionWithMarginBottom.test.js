import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('BodySectionWithMarginBottom component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('should render correctly a BodySection component and pass the correct props', () => {
    const wrapper = shallow(
      <BodySectionWithMarginBottom title="test title">
        <p>test children node</p>
      </BodySectionWithMarginBottom>
    );

    // Verificar que el componente BodySection está presente
    const bodySection = wrapper.find(BodySection);
    expect(bodySection).toHaveLength(1);

    // Verificar que las props se pasen correctamente al componente BodySection
    expect(bodySection.prop('title')).toEqual('test title');
    expect(bodySection.prop('children').type).toEqual('p');
    expect(bodySection.prop('children').props.children).toEqual('test children node');
  });
});

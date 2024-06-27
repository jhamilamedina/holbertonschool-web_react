import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  // When isHeader is true
  describe('When isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
      const thElement = wrapper.find('th');

      expect(thElement).toHaveLength(1);
      expect(thElement.props().colSpan).toEqual(2);
      // Verificar estilo
      expect(thElement.hasClass('headerStyle')).toBe(true);
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);
      const thElements = wrapper.find('th');

      expect(thElements).toHaveLength(2);
      // Verificar estilo
      expect(thElements.at(0).hasClass('headerStyle')).toBe(true);
      expect(thElements.at(1).hasClass('headerStyle')).toBe(true);
    });
  });

  // When isHeader is false
  describe('When isHeader is false', () => {
    it('renders correctly two td elements within a tr element', () => {
      const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="Data1" textSecondCell="Data2" />);
      const trElement = wrapper.find('tr');
      const tdElements = trElement.find('td');

      expect(trElement).toHaveLength(1);
      expect(tdElements).toHaveLength(2);
      // Verificar estilo
      expect(tdElements.at(0).hasClass('rowStyle')).toBe(true);
      expect(tdElements.at(1).hasClass('rowStyle')).toBe(true);
    });
  });
});

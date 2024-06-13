import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  // When isHeader is true
  describe('When isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header" />);
      const thElement = wrapper.find('th');
  
    });

    it('renders two cells when textSecondCell is present', () => {
      const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />);
      const thElements = wrapper.find('th');

      expect(thElements).toHaveLength(2);
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
    });
  });
});
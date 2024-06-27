import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import React from 'react';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('CourseList component', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  describe('When listCourses is empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders correctly', () => {
      expect(wrapper.find(CourseListRow).length).toBe(3); // Header rows + No course available row
      expect(wrapper.text()).toContain('No course available yet');
    });
  });

  describe('When listCourses contains elements', () => {
    let wrapper;

    beforeEach(() => {
      const courses = [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ];
      wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it('renders correctly', () => {
      expect(wrapper.find(CourseListRow).length).toBe(5); // 2 Header rows + 3 Course rows
    });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('Test para el componente CourseListRow', () => {
  const courseName = 'Course name';
  const cred = 'Creditos';

  it('Renderiza con una celda y colspan cuando isHeader = true y textSecondCell = null', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell={courseName} />
    );
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').prop('colSpan')).toBe(2);
    expect(wrapper.find('th').text()).toBe(courseName);
  });

  it('Renderiza con 2 celdas cuando isHeader = y textSecondCell esta presente', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell={courseName}
        textSecondCell={cred}
      />
    );
    expect(wrapper.find('th').length).toBe(2);
    expect(wrapper.find('th').at(0).text()).toBe(courseName);
    expect(wrapper.find('th').at(1).text()).toBe(cred);
  });

  it('Renderiza con 2 celdas cuando isHeader es false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell={courseName}
        textSecondCell={cred}
      />
    );
    expect(wrapper.find('td').length).toBe(2);
    expect(wrapper.find('td').at(0).text()).toBe(courseName);
    expect(wrapper.find('td').at(1).text()).toBe(cred);
  });
});

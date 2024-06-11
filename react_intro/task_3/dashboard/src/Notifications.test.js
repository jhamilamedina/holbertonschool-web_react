// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component tests', () => {
    it('Notifications renders without crashing', () => {
        shallow(<Notifications />);
    });

    it('Notifications renders three list items', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li').length).toBe(3);
    });

    it('Notifications renders the text "Here is the list of notifications"', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
    });
});
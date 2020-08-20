import React from 'react';
import { shallow } from 'enzyme';
import MockDate from 'mockdate';

import Timeago from './index';

const getNowDate = () => new Date('Tue Sep 17 2018 12:58:43 GMT+0000');

beforeAll(() => {
    MockDate.set(getNowDate());
});

afterAll(() => {
    MockDate.reset();
});

describe('Timeago', () => {
    describe('now', () => {
        const date = getNowDate();
        const dataSet = [
            date,
            `${date}`,
        ];

        test('should render default string', () => {
            dataSet.forEach(datetime => {
                const component = shallow(<Timeago datetime={datetime} />);

                expect(component.text()).toEqual('now');
                expect(component).toMatchSnapshot();
            });
        });

        dataSet.forEach(datetime => {
            test('should render custom string', () => {
                const customMessage = 'customMessage';
                const renderNow = () => customMessage;
                const component = shallow(<Timeago datetime={datetime} renderNow={renderNow} />);

                expect(component.text()).toEqual(customMessage);
                expect(component).toMatchSnapshot();
            });
        });
    });

    describe('minutes ago', () => {
        const date = getNowDate();
        date.setMinutes(date.getMinutes() - 5);

        const dataSet = [
            date,
            `${date}`,
        ];

        dataSet.forEach(datetime => {
            test('should render default string', () => {
                const component = shallow(<Timeago datetime={datetime} />);

                expect(component.text()).toEqual('5m');
            });
        });

        dataSet.forEach(datetime => {
            test('should render custom string', () => {
                const renderMinutes = (minutes) => `${minutes} minutes ago`;

                const component = shallow(<Timeago datetime={datetime} renderMinutes={renderMinutes} />);

                expect(component.text()).toEqual('5 minutes ago');
            });
        });
    });

    describe('hours ago', () => {
        const date = getNowDate();
        date.setHours(date.getHours() - 8);

        const dataSet = [
            date,
            `${date}`,
        ];

        dataSet.forEach(datetime => {
            test('should render default string', () => {
                const component = shallow(<Timeago datetime={datetime} />);

                expect(component.text()).toEqual('8h');
            });
        });

        dataSet.forEach(datetime => {
            test('should render custom string', () => {
                const renderHours = (hours) => `${hours} hours ago`;

                const component = shallow(<Timeago datetime={datetime} renderHours={renderHours} />);

                expect(component.text()).toEqual('8 hours ago');
            });
        });
    });

    describe('days ago', () => {
        const date = getNowDate();
        date.setDate(date.getDate() - 2);

        const dataSet = [
            date,
            `${date}`,
        ];

        dataSet.forEach(datetime => {
            test('should render default string', () => {
                const component = shallow(<Timeago datetime={datetime} />);

                expect(component.text()).toEqual('2d');
            });
        });

        dataSet.forEach(datetime => {
            test('should render custom string', () => {
                const renderDays = (days) => `${days} days ago`;

                const component = shallow(<Timeago datetime={datetime} renderDays={renderDays} />);

                expect(component.text()).toEqual('2 days ago');
            });
        });
    });

    describe('date', () => {
        const date = getNowDate();
        date.setMonth(date.getMonth() - 3);

        const dataSet = [
            date,
            `${date}`,
        ];

        dataSet.forEach(datetime => {
            test('should render default string', () => {
                const component = shallow(<Timeago datetime={datetime} />);

                expect(component.text()).toEqual(date.toLocaleDateString());
            });
        });

        dataSet.forEach(datetime => {
            test('should render custom string', () => {
                const renderDate = (dateString) => `created on ${dateString}`;

                const component = shallow(<Timeago datetime={datetime} renderDate={renderDate} />);

                expect(component.text()).toEqual(`created on ${date.toLocaleDateString()}`);
            });
        });
    });
});

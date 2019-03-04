import { convertToIsoString, convertToTimestamp } from './isoTime';

test('convertToIsoString works properly', () => {
    expect(convertToIsoString(1551451606)).toBe('2019-03-01T14:46:46.000Z');
});

test('convertToTimestamp works properly for strings', () => {
    expect(convertToTimestamp('2019-03-01T14:46:46.000Z')).toBe(1551451606);
});

test('convertToTimestamp works properly for objects', () => {
    expect(convertToTimestamp({ epochSecond: 10 })).toBe(10);
});

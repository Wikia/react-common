import { List } from 'immutable';

import Model from './index';

const testSchema = {
    id: 0,
    foo: undefined,
};

class Test extends Model(testSchema, 'Test') {
}

test('Test.build works for undefined, false and null', () => {
    const recordUndefined = Test.build();
    const recordFalse = Test.build(false);
    const recordNull = Test.build(null);

    expect(recordUndefined).toEqual(undefined);
    expect(recordFalse).toEqual(undefined);
    expect(recordNull).toEqual(undefined);
});

test('Test.empty returns empty object', () => {
    const record = Test.empty();
    const newTestInstance = new Test();

    expect(record).toEqual(newTestInstance);
});

test('Test.build works for object', () => {
    const record = Test.build({
        id: 1,
    });

    expect(record.id).toEqual(1);
    expect(record.foo).toEqual(undefined);
});

test('Test.build works for instance of the same class', () => {
    const source = Test.build({
        id: 1,
    });
    const destination = Test.build(source);

    expect(destination.id).toEqual(1);
    expect(destination.foo).toEqual(undefined);
});

test('Test.build fails for instance of different class', () => {
    class Source extends Model({ bar: undefined }, 'SourceTest') {
    }
    const source = Source.build();
    const destination = Test.build(source);

    expect(destination).toEqual(undefined);
});

test('Test.build fails for non-objects', () => {
    const destination = Test.build('foo');

    expect(destination).toEqual(undefined);
});

test('Test.buildList should know how to build a list', () => {
    const data = [
        {
            id: 1,
            foo: 'foo',
        },
        {
            id: 2,
            foo: 'bar',
        },
    ];
    const recordList = Test.buildList(data);

    expect(recordList).toBeInstanceOf(List);
    expect(recordList.size).toBe(2);
});

test('Test.buildList should return empty list for empty data', () => {
    const recordsUndefined = Test.buildList();
    const recordsFalse = Test.buildList(false);
    const recordsNull = Test.buildList(null);

    expect(recordsUndefined).toEqual(undefined);
    expect(recordsFalse).toEqual(undefined);
    expect(recordsNull).toEqual(undefined);
});

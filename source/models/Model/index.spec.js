import { List } from 'immutable';

import Model from './index';

const testSchema = {
    id: 0,
    foo: undefined,
};

class TestModel extends Model(testSchema, 'TestModel') {
}

test('TestModel.build works for undefined, false and null', () => {
    const recordUndefined = TestModel.build();
    const recordFalse = TestModel.build(false);
    const recordNull = TestModel.build(null);

    expect(recordUndefined).toEqual(undefined);
    expect(recordFalse).toEqual(undefined);
    expect(recordNull).toEqual(undefined);
});

test('TestModel.empty returns empty object', () => {
    const record = TestModel.empty();
    const newTestModelInstance = new TestModel();

    expect(record).toEqual(newTestModelInstance);
});

test('TestModel.build works for object', () => {
    const record = TestModel.build({
        id: 1,
    });

    expect(record.id).toEqual(1);
    expect(record.foo).toEqual(undefined);
});

test('TestModel.build works for instance of the same class', () => {
    const source = TestModel.build({
        id: 1,
    });
    const destination = TestModel.build(source);

    expect(destination.id).toEqual(1);
    expect(destination.foo).toEqual(undefined);
});

test('TestModel.build fails for instance of different class', () => {
    class Source extends Model({ bar: undefined }, 'SourceTestModel') {
    }
    const source = Source.build();
    const destination = TestModel.build(source);

    expect(destination).toEqual(undefined);
});

test('TestModel.build fails for non-objects', () => {
    const destination = TestModel.build('foo');

    expect(destination).toEqual(undefined);
});

test('TestModel.buildList should know how to build a list', () => {
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
    const recordList = TestModel.buildList(data);

    expect(recordList).toBeInstanceOf(List);
    expect(recordList.size).toBe(2);
});

test('TestModel.buildList should return empty list for empty data', () => {
    const recordsUndefined = TestModel.buildList();
    const recordsFalse = TestModel.buildList(false);
    const recordsNull = TestModel.buildList(null);

    expect(recordsUndefined).toEqual(undefined);
    expect(recordsFalse).toEqual(undefined);
    expect(recordsNull).toEqual(undefined);
});

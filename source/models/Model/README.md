`Model` is a simple wrapper on top of immutable.js' [Record](https://facebook.github.io/immutable-js/docs/#/Record) in order to simplify Record's usage.

## Usage

```js static
import Model from '@react-common/models/Model';

export const MY_MODEL_KEYS = Object.freeze({
    type: 'type',
    name: 'name',
});

const myModelSchema = {
    [MY_MODEL_KEYS.type]: '',
    [MY_MODEL_KEYS.name]: '',
};

export default class MyModel extends Model(myModelSchema, 'MyModel') {
    // ...
}
```

Model provides few APIs:

### `Model.empty()`

This always returns an empty instance of model (with fields set to what's defined in the schema). It's most useful when generating Redux reducers.

```js static
export default function MyStoreReducer(state = MyModel.empty(), action = {}) {
    const { type } = action;

    switch (type) {
        // ...
        default:
            return state;
    }
}
```

### `Model.build(...)`

This builds Model from POJO (or Model instance) param. If the param is anything but Object or Model it will return `undefined` instead.

```js static
const data = {
    name: 'foo',
    type: 'bar',
};

const instance = MyStore.build(data);
```

### `Model.buildList(...)`

This builds a immutable.js [List](https://facebook.github.io/immutable-js/docs/#/List) of Models from an array of POJO.

```js static
const data = [
    {
        name: 'foo',
        type: 'bar',
    },
    {
        name: 'another one',
        type: 'another one too'
    }
];

const list = MyStore.buildList(data);
```

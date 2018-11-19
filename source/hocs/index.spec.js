// we're checking here if we can import the index
// eslint-disable-next-line no-unused-vars
import hocs from './index';

const foo = 'foo';

test('importing index.js works', () => {
    expect(foo).toEqual('foo');
});

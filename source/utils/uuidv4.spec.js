import uuidv4 from './uuidv4';

const UUIDV4_REGEX = /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/;

Array
    .from(Array(10).keys())
    .forEach((el, index) => {
        test(`Generates valid uuid ${index}`, () => {
            expect(uuidv4()).toEqual(expect.stringMatching(UUIDV4_REGEX));
        });
    });

import { isSandbox } from './environment';

// Unit tests for isSandbox() in multiple environments
describe('Tests for is Sandbox: ', () => {
    test('It should return false when window object property is undefined', () => {
        expect(isSandbox()).toEqual(false);
    });

    test('It should return false if on production', () => {
        // simulate window object that is not on a sandbox
        global.window.fandom = {
            config: {
                environment: {
                    env: 'production',
                },
            },
        };

        expect(isSandbox()).toEqual(false);
    });

    test('It should return true if sandbox on fepo', () => {
        // simulate fepo's window object with sandbox environment
        global.window.fandom = {
            environment: {
                environment: 'sandbox',
            },
        };

        expect(isSandbox()).toEqual(true);
    });

    test('It should return true if sandbox is on mediawiki', () => {
        // simulate mw's window object with sandbox environment
        global.window = {
            wgTransactionContext: {
                env: 'sandbox',
            },
        };

        expect(isSandbox()).toEqual(true);
    });

    test('It should return true if sandbox is on upstream', () => {
        // simulate upstream's window object with sandbox environment
        global.window.fandom = {
            config: {
                environment: {
                    env: 'sandbox',
                },
            },
        };

        expect(isSandbox()).toEqual(true);
    });
});

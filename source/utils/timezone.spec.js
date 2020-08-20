describe('Timezone', () => {
    test('should be UTC', () => {
        expect(new Date().getTimezoneOffset()).toBe(0);
    });
});

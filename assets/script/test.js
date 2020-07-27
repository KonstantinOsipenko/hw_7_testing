describe('test my function', () => {
    it('should show max depth in object', () => {
        expect(maxDepth()).to.equal(2);
    });
    describe('noCoincidence', () => {
        it('should show no coincidence', () => {
            expect(comparsionKey()).to.equal(3);
        });
    });
});

describe('test my function', () => {
    it('should show max depth in object', () => {
        expect(maxDepth(witcher)).to.equal(2);
    });
    describe('noCoincidence', () => {
        it('should show no coincidence', () => {
            expect(comparsionKey(witcher, witcher2)).to.equal(3);
        });
    });
});

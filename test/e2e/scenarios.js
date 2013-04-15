describe('Search Angular App', function() {
    
    beforeEach(function() {
        browser().navigateTo('../../app/index.html');
    });
    
    it('Default test', function() {
        expect(repeater('#container').count()).toEqual(1);
    });
    
});

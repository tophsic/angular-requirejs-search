describe('Search Angular App', function() {
    
    beforeEach(function() {
        browser().navigateTo('/index.html');
    });
    
    it('Test submit', function() {
        expect(repeater('#field1').count()).toEqual(1);
        
        element('#form1 input[type=submit]').click();
        
        expect(repeater('ul li').count()).toEqual(4);
        
        expect(element('li.message').css('display')).toEqual('none');
        expect(element('li.next').css('display')).toEqual('list-item');
    });
    
});

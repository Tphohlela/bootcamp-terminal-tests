let assert = require("assert");
let regCheck = require("../regCheck");

describe('This unit test is for the regCheck function' , function(){
    it('should return true if a registration number ends with or starts with location' , function(){
        

        assert.equal(regCheck('DV 23 NB GP', 'GP'), true);
    });


   it('should return false if a registration number doesnt start or end with location' , function(){
    assert.equal(regCheck('DV 23 LP GP', 'L'), false);
});

it('should return empty array if a registration number doesnt have location' , function(){
    assert.equal(regCheck('123 456 78', '123'), []);
});

});
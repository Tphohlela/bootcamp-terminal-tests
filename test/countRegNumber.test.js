let assert = require("assert");
let countRegNumber = require("../countRegNumber");

describe('This unit test is for the countRegNumber function' , function(){
    it('should return number of registrations which is 3' , function(){
        assert.equal((countRegNumber('CA 182736,CY 523519,CJ 812328')), 3);

    });

    it('should return number of registrations which is 4' , function(){
        assert.equal((countRegNumber('CA 182736,CY 523519,CJ 812328,CA 123546')), 4);

        
    });


   

});
let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('This unit test is for the yearsAgo function' , function(){
    it('should return how many years ago that year is from the current year' , function(){
        assert.equal((yearsAgo(1976)), 45);
        
    });

    it('should return how many years ago that year is from the current year' , function(){
        assert.equal(yearsAgo((2000)), 21);
    
    });

});

let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('This unit test is for the isWeekday function' , function(){
    it('should return false if input is not a weekday' , function(){
        assert.equal(isWeekday('Saturday'), false);
        // assert.equal(isWeekday('Monday'), true);
    });

    it('should return true if input is a weekday' , function(){
        assert.equal(isWeekday('Wednesday'), true);
        // assert.equal(isWeekday('Monday'), true);
    });

});

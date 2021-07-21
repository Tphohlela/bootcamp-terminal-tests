let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('This unit test is for the isFromBellville function' , function(){
    it('should return true if a registration number is for Bellville/starts with CY' , function(){
        assert.equal((isFromBellville("CY")), true);

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return false if a registration number is not for Bellville/starts with CY' , function(){
        assert.equal((isFromBellville("CA")), false);

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return false if a registration number is not for Bellville/starts with CY' , function(){
        assert.equal((isFromBellville("MP")), false);

        // assert.deepEqual([2,2],[2,2]);
    });

});
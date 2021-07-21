let assert = require("assert");
let transportFee = require("../transportFee")

describe('This unit test is for the transportFee function' , function(){
    it('should return R20 if it is morning shift' , function(){
        assert.equal((transportFee("morning")), 'R20');

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return R10 if it is afternoon shift' , function(){
        assert.equal((transportFee("afternoon")), 'R10');

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return free if it is night shift' , function(){
        assert.equal((transportFee("nightshift")), 'free');

        // assert.deepEqual([2,2],[2,2]);
    });


    // it('should return false if a registration number is not for Bellville/starts with CY' , function(){
    //     assert.equal((isFromBellville("CA")), false);

    //     // assert.deepEqual([2,2],[2,2]);
    // });

});
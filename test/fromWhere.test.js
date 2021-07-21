let assert = require('assert');
let fromWhere = require('../fromWhere')

describe('This unit test is for the fromWhere function' , function(){
    it('should return Bellville if it starts with CY' , function(){
        assert(fromWhere("CY")), 'Bellville';

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return Paarl if it starts with CJ' , function(){
        assert(fromWhere("CJ")), 'Paarl';

        // assert.deepEqual([2,2],[2,2]);
    });

    it('should return Cape Town if it starts with CA' , function(){
        assert(fromWhere("CA")), 'Cape Town';

        // assert.deepEqual([2,2],[2,2]);
    });


    

});
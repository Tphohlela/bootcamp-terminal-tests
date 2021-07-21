let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20")

describe('This unit test is for the findItemsOver20 function' , function(){
    it('should return items higher than 20 ' , function(){
    

        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3}]),
        
        [{name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
    ]);

    });

    it('should return nothing if items are lower than 20 ' , function(){
    

        assert.deepEqual(findItemsOver20([{name : 'apples', qty : 10},
        {name : 'apples', qty : 3}]),[]);
    });

    

});
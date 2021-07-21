let assert = require("assert");
let findItemsOver = require("../findItemsOver")

describe('This unit test is for the findItemsOver function' , function(){
    it('should return the items that have quantities over 30' , function(){
        

        assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'peaches', qty : 18},
            {name : 'apples', qty : 3}],30),
            [{name : 'pears', qty : 37}]);
    });

    it('should return the items that have quantities over 20' , function(){
        

        assert.deepEqual(findItemsOver([{name : 'apples', qty : 10},
            {name : 'bananas', qty : 27} ,
            {name : 'peaches', qty : 18},           
            {name : 'apples', qty : 3}],20),
           [{name : 'bananas', qty : 27}]);
    });

});
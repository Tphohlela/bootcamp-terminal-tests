let assert = require("assert");
let greet = require("../greet");

describe('This unit test is for the greet function' , function(){
    it('should say hello followed by Karen' , function(){
        assert.equal((greet('Karen')), 'Hello, Karen');
    });

    it('should say hello followed by Thato' , function(){
        assert.equal((greet('Thato')), 'Hello, Thato');
    });

});

let assert = require("assert");
let paarl = require("../countAllPaarl");


describe('This unit test is for the countAllPaarl function' , function(){
    it('should return registrations from Paarl' , function(){
        assert.equal((paarl("CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864")), "CJ 678 543,CJ 67890");

       
    });  

    it('should return nothing since there is no registration from Paarl' , function(){
        assert.equal((paarl("CL 900, CA 34567,CN 7864")), "");

       
    });  
  

});
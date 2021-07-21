let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('This unit test is for the countAllFromTown function' , function(){
    it('should return 3 if it is from Stellies' , function(){
        assert.equal((countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL')), 3);

       
    });  

    it('should return 2 if it is from Cape Town' , function(){
        assert.equal((countAllFromTown('CL 124,CY 567,CA 345,CJ 456,CA 678,CL 341','CA')), 2);

       
    });  

    it('should return 0 if location doesnt match registration numbers' , function(){
        assert.equal((countAllFromTown('CL 124,CY 567,CA 345,CJ 456,CA 678,CL 341','GP')), 0);

       
    });  



    

});
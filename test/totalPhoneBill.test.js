let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe('This unit test is for the totalPhoneBill function' , function(){
    it('should return R7.45 for two calls and three sms' , function(){
        var callAndSms= "call, sms, call, sms, sms"
        assert.equal((totalPhoneBill(callAndSms)), 'R7.45');
    });

    it('should return R1.30 for two sms ' , function(){
        var callAndSms= "sms, sms"
        assert.equal((totalPhoneBill(callAndSms)), 'R1.30');
    });

    it('should return empty R0.00 for value mms ' , function(){
        var callAndSms= "mms, mms"
        assert.equal((totalPhoneBill(callAndSms)), 'R0.00');
    });


    
});
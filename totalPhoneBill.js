module.exports=function totalPhoneBill(callAndSms){
  
    var newList = callAndSms.split(', ');
    var count = 0; 
   //console.log(callAndSms);
   //console.log(newList);
    
     var cAS = newList[i];
    for(var i=0; i < newList.length; i++){
        var cAS = newList[i];
      //console.log(cAS);
     if(newList[i].startsWith('c')){
       count += 2.75;
     }
      
      else if(cAS.startsWith('s')){
              count += 0.65;
              }
    }  
  return 'R' + count.toFixed(2);
  }
  
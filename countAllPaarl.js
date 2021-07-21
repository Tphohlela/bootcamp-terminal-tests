module.exports=function allPaarl(regNumbers){
   // console.log(regNumbers)
    var newRegList = regNumbers.split(', ');
  
    var newArray = [];
   
    for(var i=0;i < newRegList.length ;i++){
      
     //console.log(newRegList[i]);
      
      if( newRegList[i].startsWith('CJ')){
        newArray.push(newRegList[i]);
      }
      
    }
    //console.log(newArray);
    return newArray;
  }
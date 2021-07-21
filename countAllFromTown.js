module.exports=function countAllFromTown(regNumbers, townString){
  
    var newList = regNumbers.split(',');
    
    var newArr = [];
    
    //console.log(regNumbers, townString);
    
    for( var i=0; i < newList.length; i++){
      var anotherNewList = newList[i].trim();
      if(anotherNewList.startsWith(townString)){
        
        newArr.push(anotherNewList);
      }
        //return newArr;
      
    
      }
    return newArr.length;
      //console.log([]);
    }
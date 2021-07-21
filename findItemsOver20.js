module.exports=function findItemsOver20(products){
    var arr = [];
    
    for(var i=0;i<products.length;i++){
      
      if(products[i].qty > 20){
        arr.push(products[i]);//.name + products[i].qty ;
      }
    }
    return arr;
  }
  
module.exports = function findItemsOver(products,threshold){
    var arr1=[];
    
    for(var i=0;i<products.length;i++){
      
      if(products[i].qty > threshold){
        arr1.push(products[i]);
      }
    }
    return arr1;
  }
  
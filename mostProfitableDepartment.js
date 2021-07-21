module.exports= function mostProfitableDepartment(items){
    
  const itemsMap = {};
  //This for loop makes the department attributes equal 0;
  for(var i=0;i<items.length;i++){
  
    const product = items[i];
    itemsMap[product.department] = 0;
  }
 //console.log(itemsMap); 
  //This for loop makes 
  for(var i=0;i<items.length;i++){
  const product = items[i];
    var total = itemsMap[product.department];
    total += product.sales
    itemsMap[product.department] = total
  }  
 // console.log(itemsMap);
  
  var maxValue = 0;
  var currentDepartment = '';
  for(const itemsDepartment in itemsMap){
    const currentValue = itemsMap[itemsDepartment];
    if( currentValue > maxValue){
    	maxValue = currentValue;
      currentDepartment = itemsDepartment;
    }
    
  }
  return currentDepartment;
} 

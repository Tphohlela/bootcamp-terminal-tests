module.exports= function mostProfitableDay(items2){
  
    const items2Map = {};
    
    for(var i=0;i<items2.length;i++){
      
        const things = items2[i];
      items2Map[things.day] = 0;
      
    }
    //console.log(items2Map);
    
    for(var i=0;i<items2.length;i++){
    const things = items2[i];
      var total2 = items2Map[things.day];
      total2 += things.sales
      items2Map[things.day] = total2
    }  
    
    var maxValue = 0;
    var currentDay = '';
    for(const itemsDay in items2Map){
      const currentValue = items2Map[itemsDay];
      if( currentValue > maxValue){
          maxValue = currentValue;
        currentDay = itemsDay;
      }
      
    }
   // console.log(currentDay);
    return currentDay;
  }   
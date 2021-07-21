module.exports = function fromWhere(regNumber,town){
  
    if (town = regNumber.startsWith("CY")){
      return "Bellville";
    }
    
    else if( town = regNumber.startsWith("CJ")){
      return "Paarl";
    }
    
    else if ( town = regNumber.startsWith("CA")){
      return "Cape Town";
  }
    
    //else return "Some other place!";
  }
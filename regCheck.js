module.exports=function regCheck(regNumber,locIndicator){
  
	var result = regNumber.endsWith(locIndicator);
  	return result;
}
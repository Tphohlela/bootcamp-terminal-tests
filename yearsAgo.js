module.exports = function yearsAgo(years){
 
  
  const year = new Date().getFullYear();
  var result = year - years;
  
  return result;
}

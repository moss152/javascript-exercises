function removeFromArray(arr, ...val) {
    
  return arr.reduce((acc, curr) => {
   if(!val.includes(curr)) {
       acc.push(curr);
   }
    return acc;
  
       });
   
   }
module.exports = removeFromArray;

function sumAll(x, y) {
    let allSum = 0;

if (x < 0 || y < 0 || typeof x !== 'number' || typeof y !== 'number'){
    return 'ERROR';
}
if (y < x) {
    [x, y] = [y, x];
}
for (let i = x; i <= y; i++){
    allSum += i;
}
return allSum;
    
}
     

// Do not edit below this line
module.exports = sumAll;

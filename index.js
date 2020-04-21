class Test1{
  describe(a,f){
    return console.log(a);
  }
}

function accum(s) {
	// your code
  container = [];
  for (let i = 0; i<s.length ;i++){
    container[i] = [s[i]]
  }
  for (let b = 0; b<s.length; b++){
    container[b][0] = s[b].toUpperCase();
    let j = 1; 
    while  (j <= b){
      container[b][j]= s[b].toLowerCase();
      j++;
    }
  }
  let arr = []
  arr = container.join("-").replace(/,/g,'')
  return arr; 
//   console.log(arr)
//   console.log(container);
  
}

// accum("ZpglnRxqenU")
// // Test1.describe("accum",'b')//{

function assertArraysEqual(actual, expected, testName) {
// your code here
let flag = true; 
if (actual.length === expected.length){
  for (let i =0; i<actual.length; i++){
    if (actual[i]===expected[i]) { flag = true}
    else {flag = false}    
  }
} else {flag = false}
if (flag === true) console.log('passed');
else{
  const actstr = actual.toString();
  const expstr = expected.toString();
  console.log('FAILED [' + testName + '] Expected "' + expstr + '", but got "'  + actstr + '"');}
}


var expected = ['b', 'r', 'o', 'k', 'e', 'n'];
var actual = 'broken'.split('');
assertArraysEqual(actual, expected, 'splits string into array of characters');
// // passed


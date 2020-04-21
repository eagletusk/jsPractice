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

accum("ZpglnRxqenU")
// Test1.describe("accum",'b')//{
// Test.it("Basic tests",function() {    
// 	Test.assertEquals(accum("ZpglnRxqenU"), "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
// 	Test.assertEquals(accum("NyffsGeyylB"), "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
// 	Test.assertEquals(accum("MjtkuBovqrU"), "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
// 	Test.assertEquals(accum("EvidjUnokmM"), "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
// 	Test.assertEquals(accum("HbideVbxncC"), "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");
// })})
let x = 'some words before width="200px" height="100px" some more words';
console.log(x);

// console.log(x);

// let output = s.substring()

// var testURL = "dvuivnhuiv_ew";
// var output = testURL.substring(0, testURL.lastIndexOf('_') + 1);
// console.log(output);


var out2 = x.substring(0, x.lastIndexOf('width="') + 7);
var out3 = out2.concat('100%"');
var out4 = x.substring(x.lastIndexOf('width="') + 7);
var out5 = out4.substring(out4.indexOf('"') + 1);
x = out3.concat(out5);
var out6 = x.substring(0, x.lastIndexOf('height="') + 8);
var out7 = out6.concat('100%"');
var out8 = x.substring(x.lastIndexOf('height="') + 8);
var out9 = out8.substring(out8.indexOf('"') + 1);
x = out7.concat(out9);

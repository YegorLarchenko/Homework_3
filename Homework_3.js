// // №1
var d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);



// №2
var d3 = [45, 78, 10, 3];
d3[7] = 100;
let total = 0;
 function sum3 () {
     
     for (var i in d3) {
         total += d3[i];
     }
    }
    sum3 ();
    console.log (total);
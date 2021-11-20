
// var str= [39,27,11,4,24,32,32,1];
// var stack = [];
// var res = [];
// for (var i=0; i<str.length; i++){
//     while (stack.length!==0 && stack[stack.length-1]>=str[i]){
//         stack.pop();
//     }
//     if (stack.length==0){
//         res.push(-1);
//     }
//     else{    
//         res.push(stack[stack.length-1]);
//     }
//     stack.push(str[i]);
// }
// console.log(res.join(" "));

var str = "aaabccddd";
var data = str.split("");
//console.log(data.length);
var stack =[];

for (var i=0; i<data.length; i++){
if (data[i]===data[i+1] ){
   // console.log(i);
    i+=1; //dd  d

  //  console.log(i);
}
else{
    stack.push(data[i]);
}

}

console.log(stack.join(" "));

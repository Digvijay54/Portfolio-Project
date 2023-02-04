// const radius=[3,1,2,4];
// const calculateArea=function(radius){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(Math.PI*radius[i]*radius[i]);

//     }}
//     const Circumference=function(radius){
//         return 2*Math.PI*radius;
//     }

//     const diameter=function(radius){
//         return 2*radius;

//     }
// Array.prototype.calculate=function(logic){
//     const output=[];
//     for(let i=0;i<radius.length;i++){
//         output.push(logic(radius[i]));
//     }

//     return output;
// }
// console.log(radius.map(area));
//     console.log(radius.calculate(area));
//     // console.log(calculate(radius,circumference));
//     // console.log(calculate(radius,diameter));

// const add=(a,b) =>{
//     return a+b;
// }
// const subs=(a,b) =>{
//     return Math.abs(a-b);
// }
// const mult=(a,b) =>{
//     return Math.abs(a*b);
// }
// //master function hof
// const calculator=(num1,num2,operator) =>{
//     return operator(num1,num2);

// }
// console.log(calculate(5,6,add));
// console.log(calculate(5,6,mult));
// console.log(calculate(5,6,subs));
function add(a,b){
    return a+b;

}
function power(a,b){
    return Math.pow(a,b);
       

    }
//function expression
let addition=function(a,b){
    return a+b;
}
addition.xyz="Random";
console.log(addition.xyz);


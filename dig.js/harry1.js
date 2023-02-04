//console.log('we are in harry1.js and lets discuss about arrays');
//const marks=[34,23,24,93,73,25];
//const fruits=['orange','apple','pineapple'];
//const mixed=['str',89,[3,5]];

const arr=new Array(23,123,21,'orange');
//console.log(arr);
//console.log(mixed);
//console.log(fruits[1]);
//console.log(arr.length);
//console.log(Array.isArray('dfdf'));
arr[0]='harry';
Let arrelement=arr[0];
//console.log('element:',arrelement);
//console.log(arr);

//Let value=marks.indexOf(34);
//console.log(value)
//mutating or modifying arrays
//marks.push(35);
//marks.unshift(100);
//marks.pop();
//marks.shift();
//marks.splice(2,3);
//marks.reverse();
//Let marks2=[1,2,3,7]
//marks=marks.concat(marks2);
//console.log(marks);
/*Let myobj={
    name:'harry';
    channel:'codewithharry';
    isActive:true;
    marks:[1,5,3,6]
}
console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)*/

let x=function(x,y){//first class function
    return x*y;
}

let y=(x,y)=>x*y; //arrow function
console.log(y[3,2]);

let myfunction=(arg1,arg2,...argN)=>{
    statements;
}
*/
function person (){
    this.name='jack';
    this.age=25;
    this.sayName=function (){
        console.log(this.age);
    }
}



//function 
 function fanOffkor(){    //function declare
    console.log('bose theke uthe dara');
    console.log('walk towards the swich');
    console.log('click the swich');
    console.log('to off the fan');
 }

 fanOffkor();    //call the function call kora hocce


 function brush(){
    console.log('pick up brush');
    console.log('add paste');
    console.log('2 min goso');
 }
 brush(); // call kora holo
 console.log('---------');
 console.log('//////');
 console.log('------/////////');
 brush()   // call kora holo


 ///  ---parameter-----


 function squares(a,b){
    const zoge =a *b
    console.log(zoge);
 }
 squares(3,4);


 

 function square(a,b,c,d,e,){
    const A =a +b+c+d+e
    console.log(A);
 }
 // square(3,4,5,4,9);



 function s(able,bkbl,cble,dble,eble){
    const a =able*bkbl*cble*dble*eble
    console.log(a);
 }
 // s(3,4,5,4,9);


 //---------------------------------------------------------



 function doubl(number){
    const D = number *2;
    console.log(number, D);
 }
 console.log('call function');
 doubl(15);
 console.log('----------------');
 doubl(8);
 console.log('----------');
 doubl(52);
 console.log('-------');
 doubl(23);

 const number=55;
 doubl(number);
 const money =112;
 doubl (money);

//--------------------
const fage=50;
const age=15;
function differen (num1, num2){
const diff=num1-num2;
console.log(num1,num2, 'age', diff);
}
differen(fage,age)


//------return..........return babhor korle ar output dakha jai na,,,,,,,,

function time (number){
    const result = number*10;
    return result;
}
time(5);
const out=time(5);
console.log('out:', out);
const bigNumber=time(33);


function cut(number){
    const huf= number/2;
    return huf;
}


function add(price1, price2){
    const total=price1+price2;
    return total;
}
const bill=add(5,85)

function add2(price1, price2){
    return price1+price2;
    
}
const bill2=add(25,185)
console.log(bill,bill2);

function add3(price1, price2){
    const sum= price1+price2;
    const diff= price1-price2;
    const mul= sum*diff;
    const result=mul/2;
    return result;
    
}
const result=add3(10,5)
console.log(result);


function isEven (number){
   if (number%2===0){
      return true;
   }
   else{
      return false;
   }
}
console.log(isEven(5));


// string dea return function babhor


function evenSizeString(str){
   const size=str.length;
   console.log(str,size);
   if(size %2===0){
      console.log('even size');
      return true;
   }
   else{
      console.log('odd size');
      return false;
   }

}
evenSizeString('dhaha');
evenSizeString('faka');

//array return
function sumOfNumber(number){
   console.log(number);
   let sum=0;
   for(const nu of number){
      console.log(nu);
      sum=sum+nu;
   }
   return sum
}
const num=[22,12,21,24];
const sum = sumOfNumber(num);
console.log('sum:', sum);

//-------------------------------------------------------------




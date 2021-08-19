//alert ("test!") ;
//let  vorname= prompt("Как тебя зовут?");
//alert (`Привет ${vorname}!`);
function showMessage(){
    let  vorname= prompt("Как тебя зовут?");
    alert (`Привет ${vorname}!`);
}
//function showMessage2(){
 //  let a= prompt(`выберете чиcло`);
 //  let b=prompt(`выберете следующее чиcло`);
// return a-b;
//}
// alert(showMessage2(`${a}-${b}`))$

let op;
function func(){
  let result;
  let num1=Number(document.getElementById(`num1`).value);
let num2= Number(document.getElementById(`num2`).value)
  switch (op){
case`+`:
result=num1+num2;
break;
case`-`:
result=num1-num2;
break;
case`*`:
result=num1*num2;
break;
case`/`:
if(num2){
  result=num1/num2;
}
else{result=`бесконечность`}
break;
  }

  document.getElementById(`result`).innerHTML=result;


}





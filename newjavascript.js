
function  getValue(id) {
    return document.querySelector(id).value;
}


var btnbtn = document.querySelector("#btnbtn");
btnbtn.addEventListener('click', calculate);


function calculate() {

    let operation = getValue('#operacija');
    let num1 = parseInt(getValue('#broj1'));
    let num2 = parseInt(getValue('#broj2'));
    let suma = document.querySelector("#rezultat");
    let saberi;
    switch (operation) {
        case '+':
            saberi = num1 + num2;
            suma.innerHTML = saberi;
            break;
        case '-':
            saberi = num1 - num2;
            suma.innerHTML = saberi;
            break;
        case '*':
            saberi = num1 * num2;
            suma.innerHTML = saberi;
            break;
        case '/':
            saberi = num1 / num2;
            suma.innerHTML = saberi;
            break;
        default :
           suma.innerHTML = "POGRESNO STE UNELI OPERACIJU";
          
    }
}


/*
 var num1= parseInt(prompt('unesite prvi broj'));
var num2= parseInt(prompt('unesite drugi broj'));

var mat= prompt('izaberite racunsku operaciju \n + - * /' );


function operacija(){
    if(mat==='+'){
        var sab= num1+num2;
        console.log( sab);
    } else if(mat==='-'){
        console.log( num1-num2);
    } 
     else if(mat==='*'){
        console.log( num1*num2);
    } 
     else if(mat==='/'){
        console.log( num1/num2);
    } 
    else {
        console.log('pogresan unos');
    }
    
}

operacija();


/* *************************** SWITCH ******************
 * 
 * 
 let num1 = parseInt(prompt("UNESITE PRVI BROJ : "));
let num2 = parseInt(prompt("UNESITE DRUGI BROJ : "));

let action = prompt("UNESITE ZELJENU OPERACIJU: \n  +  -  * / ");

switch (action) {
    case "+" :
        console.log(num1 + num2);
        break;
    case "-" :
        console.log(num1 - num2);
        break;

    case "*" :
        console.log(num1 * num2);
        break;
    case "/" :
        console.log(num1 / num2);
        break;

    default :
        console.log("pogresan unos") ;
}
 */
 
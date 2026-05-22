const PI = 3.14159;

let radio = 7;

let area = PI * radio * radio;

console.log("El área del círculo es:");
console.log(area);

console.log("hola mundo");


const num1 = 10
const num2 = 3
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2); 
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

console.log(5 == "5);
console.log(=== "5");




let numero = 12; 

let esValido = (numero % 2 === 0) && (numero > 10);
console.log("Es el numero par y mayor que 10");
console.log(esValido);


### COndicionales
if /else if / else
// switch para multiples casos

const nota = 83;
let letra
if(nota >= 90);


const edad = 18



temperatura = 18
if (temperatura < 15) {
    console.log("HAce frio");
}
else if (temperatura >= 15 && temperatura <= 25) {
    console.log("Hace un clima agradable");
} else {
    console.log("Hace calor");  
} 

temperatura = 18
switch (temperatura){
    case 15:
        console.log("Hace frio");
        break;
    case > 25:
        console.log("hace mucho calor");
        break;
    default:
        console.log("Temperatura no estable");
}

const temperatura = 18
const esMayor = temperatura > 25 ? "Hace calor" : "Hace frio";
console.log(esMayor);


const nums = [2,5,7,10,11]
for (const num of nums) {
    if (num % 2 === 0) {
        console.log(num + " es par");
    } else {
        console.log(num + " es impar");
    }
}


function maximo(a,b,c) {
    if (a >= b && a >= c)
        return a;
    else if (b >= a && b >= c)
        return b;
    else
        return c;
}
console.log(maximo(5, 10, 3));

const maximo = (a,b,c) => {
    a >= b && a >= c
        return a;
    else if (b >= a && b >= c)
        return b;
    else
        return c;
}
console.log(maximo(8, 5, 9));


//variable "kelvin" consitantly equal property value of 273. 
const kelvin = 293;

//variable "celsius" consitantly equal variable 'kelvin' less 273. 
const celsius = (kelvin - 273);


console.log(kelvin);
console.log(celsius);

//function "Fahrenheit" = Celsius * (9/5) + 32
//.floor method round the Fahrenheit number down to the lowest integer. 
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);


let newton = Math.floor(celsius * (33/100) );

console.log(newton);

console.log(`The temperature is ${newton} degrees Newton.`);



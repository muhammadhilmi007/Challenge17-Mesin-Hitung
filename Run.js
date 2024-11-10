import Calculator, { PI } from './Calculator.js';

const calc = new Calculator();
calc.add(10).substract(5).result(); 
calc.add(3).multiply(4).divide(6).result();
calc.number = 7;
console.log(`nilai sekarang: ${calc.number}`);
calc.multiply(2).multiply(PI).result()
calc.number = 7;
calc.square().multiply(PI).result()
calc.number = 4;
calc.exponent(3).result()
calc.squareRoot().result()


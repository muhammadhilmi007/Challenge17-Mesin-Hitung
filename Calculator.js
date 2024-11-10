export const PI = 22 / 7;

export default class Calculator {
  constructor() {
    this.number = 1;
  }

  // Penambahan
  add(value) {
    this.number += value;
    return this;
  }

  // Pengurangan
  substract(value) {
    this.number -= value;
    return this;
  }

  // Perkalian
  multiply(value) {
    this.number *= value;
    return this;
  }

  // Pembagian
  divide(value) {
    this.number /= value;
    return this;
  }

  // Akar Pangkat 2
  square() {
    this.number = this.number * this.number;
    return this;
  }

  // SquareRoot
  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
  }

  // Exponent
  exponent(value) {
    this.number = Math.pow(this.number, value);
    return this;
  }

  // Dapat Menghitung keliling dan luas lingkaran
  circle(r) {
    console.log(`Keliling lingkaran: ${2 * PI * r}`);
    console.log(`Luas Lingkaran: ${PI * r * r}`);
    return this;
  }

  // Menampilkan hasil
  result() {
    console.log(this.number);
    return this;
  }
}

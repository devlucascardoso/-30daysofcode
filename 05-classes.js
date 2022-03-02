//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript
//Classes e construtores
class Person {

  name;
  age;

  constructor(name,age) {
    this.name = name;
    this.age = age;
  }

  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in ${this.age} years`);
  }

}
/* EXEMPLO
const lucas = new Person('lucas', 21);
lucas.introduceSelf();
*/

//Herança
class Professor extends Person {

  teaches;

  constructor(name, age, teaches) {
    super(name, age);
    this.teaches = teaches;
  }

  introduceSelf() {
    console.log(`My name is ${this.name}, I will be your ${this.teaches} professor and I'm in ${this.age} years.`);
  }

  grade(paper) {
    const grade = Math.floor(Math.random() * (5 + 1) + 1);
    console.log(grade);
  }

}
/* EXEMPLO
const walsh = new Professor('Walsh', 30, 'Psychology');
walsh.introduceSelf();
walsh.grade(); // some random grade
*/

//Encapsulamento
class Student extends Person {

  #year;

  constructor(name, year) {
    super(name);
    this.#year = year;
  }


  introduceSelf() {
    console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
  }

  canStudyArchery() {
    return this.#year > 1;
  }

}
/* EXEMPLO
const summers = new Student('Summers', 2);

summers.introduceSelf(); // Hi! I'm Summers, and I'm in year 2.
//summers.canStudyArchery(); // true

//summers.#year; // SyntaxError
*/

//Métodos privados
class Example {

  somePublicMethod() {
    this.#somePrivateMethod();
  }

  #somePrivateMethod() {
    console.log('You called me?');
  }

}
/*EXEMPLO
const myExample = new Example();

myExample.somePublicMethod(); // 'You called me?'

myExample.#somePrivateMethod(); // SyntaxError
*/
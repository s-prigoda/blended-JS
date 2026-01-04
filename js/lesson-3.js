// Завдання 1:

// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить
// квадрати кожного елементу вхідного масиву.
// Очікуваний результат: [1, 4, 9, 16, 25].

// const numbers = [1, 2, 3, 4, 5];

// // const newArr = numbers.map(el => el * el);

// // console.log(newArr);

// const powNumber = (arr, pow) => arr.map(el => Math.pow(el, pow));

// console.log(powNumber(numbers, 2));

// Завдання 2:

// Дано масив об'єктів. Створіть новий масив, що містить всі значення
// з масивів values кожного об'єкту, збережених в одному масиві.
// Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const newArr = data.flatMap(el => el.values);
// console.log(newArr);

// const arrValues = arr => arr.flatMap(el => el.values);

// console.log(arrValues(data));

// Завдання 3:

// Дано масив об'єктів.
// Перевірте, чи є хоча б один об'єкт з віком менше 20 років.
// Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// // const userAge = people.some(user => user.age < 20);
// // console.log(userAge);

// const isYoung = (arr, age) => arr.some(el => el.age < age);

// console.log(isYoung(people, 20));

// Завдання 4:

// Дано масив чисел [2, 4, 6, 8, 10].
// Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// // // const numEven = numbers.every(number => number % 2 === 0);
// // // console.log(numEven);

// const isEven = (arr, value) => arr.every(el => el % value === 0);
// console.log(isEven(numbers, 2));

// even number - парне число.

// odd number - не парне число.
// Завдання 5:

// Знайдіть перше непарне число

// const numbers = [2, 1, 6, 8, 9, 10, 12];

// // const oddNumber = numbers.find(el => el % 2 !== 0);
// // console.log(oddNumber);

// const isOddNum = (arr, value) => arr.find(num => num % value !== 0);

// console.log(isOddNum(numbers, 2));

// Завдання 6:

// Відсортуйте масив чисел [4, 2, 5, 1, 3]
// у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// // const num = numbersArray.toSorted((a, b) => a - b);

// // console.log(num);

// const numSorted = arr => arr.toSorted((a, b) => a - b);

// console.log(numSorted(numbersArray));

// Завдання 7:

// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"]
//  у порядку алфавіту.
// Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// // const sortArr = stringArray.toSorted((a, b) => a.localeCompare(b));
// // console.log(sortArr);

// const sortArr = arr => arr.toSorted((a, b) => a.localeCompare(b));
// console.log(sortArr(stringArray));

// Завдання 8:

//  Відсортуйте масив об'єктів за віком у порядку зростання.
// Очікуваний результат: [{name: "Bob", age: 19}, {name: "John", age: 27}, {name: "Jane", age: 31}].

// const users = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const sortArr = users.toSorted((a, b) => a.age - b.age);
// console.log(sortArr);

// const sortArr = arr => arr.toSorted((a, b) => a.age - b.age);
// console.log(sortArr(users));

// Завдання 9:

// Дано масив об'єктів.
// Створіть новий масив, що містить тільки об'єкти, в яких
// вік більше 20 років.
// Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const user = [
  { name: 'John', age: 27 },
  { name: 'Jane', age: 31 },
  { name: 'Bob', age: 19 },
];

// const filterUser = user.filter(obj => obj.age > 20);
// console.log(filterUser);

// const filterUser = arr => arr.filter(obj => obj.age > 20);
// console.log(filterUser(user));

// Завдання 10:

// Дано масив чисел [1, 2, 3, 4, 5].
// Застосуйте метод для обчислення суми елементів масиву.

// const numbers = [1, 2, 3, 4, 5];

// const sumNum = numbers.reduce((acc, el) => (acc += el), 0);
// console.log(sumNum);

// const sumNumFoo = arr => arr.reduce((acc, el) => (acc += el), 0);
// console.log(sumNumFoo(numbers));

// Завдання 11:

// Розроби клас Calculator, який дозволяє виконувати арифметичні
//  операції над числом за допомогою методів класу, підтримуючи
// ланцюжковий виклик (method chaining).
//
// Вимоги до класу Calculator
// - Метод number(value)
// Встановлює початкове значення для наступних обчислень.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод getResult, Повертає поточний результат усіх операцій.
// Не змінює значення, просто повертає його.

// - метод add - Додає value до поточного значення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод subtract - Віднімає value від поточного значення. Повертає this.

// - метод divide - Ділить поточне значення на value, якщо value не дорівнює 0.
// Якщо value === 0, викидає помилку з повідомленням про неможливість ділення.
// Повертає сам об'єкт (this) для підтримки ланцюжкових викликів.

// - метод multiply -Множить поточне значення на value. Повертає this.

// Об'єкт класу може проводити послідовні операції у вигляді ланцюжка

// Приклад використання:

// class Calculator {
//   number(value) {
//     this.result = value;
//     return this;
//   }

//   getResult() {
//     return this.result;
//   }

//   add(value) {
//     this.result += value;
//     return this;
//   }

//   subtract(value) {
//     this.result -= value;
//     return this;
//   }

//   divide(value) {
//     if (value === 0) {
//       throw new Error('Ділення на 0 неможливе');
//     }
//     this.result /= value;
//     return this;
//   }

//   multiply(value) {
//     this.result *= value;
//     return this;
//   }
// }

// const calc = new Calculator();

// const result = calc
//   .number(10) // Встановлюємо початкове значення 10
//   .add(5) // Додаємо 5 (10 + 5 = 15)
//   .subtract(3) // Віднімаємо 3 (15 - 3 = 12)
//   .multiply(4) // Множимо на 4 (12 * 4 = 48)
//   .divide(2) // Ділимо на 2 (48 / 2 = 24)
//   .getResult(); // Отримуємо результат: 24

// console.log(result); // 24

// Завдання 12:
// Напиши клас Client який створює об'єкт з властивостями login email.
// Оголоси приватні властивості #login #email, доступ до яких зроби
// через геттер та сеттер login email

// class Client {
//   #login;
//   #email;

//   constructor(data) {
//     this.#login = data.login;
//     this.#email = data.email;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(newLog) {
//     this.#login = newLog;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const data = {
//   email: 'user@gmail.com',
//   login: 'user',
// };
// const userA = new Client(data);

// console.log(userA);

// Завдання 13:

//  Наслідування у класах!
// Cтворіть клас `Person`, який містить наступні властивості:
//  - `name` - ім'я людини;
//  - `age`- вік людини;
//  - `gender` - стать людини;
//  - `email`- електронна пошта людини.

// Крім того, клас `Person` має мати метод `getDetails()`,
// який повертає об'єкт з ім'ям, віком, статтю
//та електронною поштою людини.

//
// Потім Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
//  - salary - зарплата співробітника;
//  - department - відділ, в якому працює співробітник.
// Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з зарплатою співробітника та відділом, в якому він працює.

// class Person {
//   constructor(data) {
//     this.name = data.name;
//     this.age = data.age;
//     this.gender = data.gender;
//     this.email = data.email;
//   }

//   getDetails() {
//     return {
//       name: this.name,
//       age: this.age,
//       gender: this.gender,
//       email: this.email,
//     };
//   }
// }

// class Employee extends Person {
//   constructor(data) {
//     super(data);
//     this.salary = data.salary;
//     this.department = data.department;
//   }

//   getEmployeeDetails() {
//     return {
//       зарплата: this.salary,
//       відділ: this.department,
//     };
//   }
// }

// const employeeData = {
//   name: 'Іван',
//   age: 30,
//   gender: 'male',
//   email: 'ivan@gmail.com',
//   salary: 2000,
//   department: 'IT',
// };

// const employee = new Employee(employeeData);

// console.log(employee.getDetails());
// console.log(employee.getEmployeeDetails());

// ------------------------------------------------------------

// 1️⃣ Створи клас Vehicle, який має:

// brand — марка транспорту

// year — рік випуску

// метод getInfo() — повертає обʼєкт { brand, year }

// 2️⃣ Створи клас Car, який:

// наслідує Vehicle

// має додаткові властивості:

// fuelType — тип палива

// mileage — пробіг

// має метод drive(km)

// збільшує mileage на km

// повертає this (щоб можна було зробити ланцюжок)

// має метод getCarInfo() — повертає { fuelType, mileage }

// class Vehicle {
//   constructor(data) {
//     this.brand = data.brand;
//     this.year = data.year;
//   }

//   getInfo() {
//     return {
//       brand: this.brand,
//       year: this.year,
//     };
//   }
// }

// class Car extends Vehicle {
//   constructor(data) {
//     super(data);
//     this.fuelType = data.fuelType;
//     this.mileage = data.mileage;
//   }

//   drive(km) {
//     this.mileage += km;
//     return this;
//   }

//   getCarInfo() {
//     return {
//       fuelType: this.fuelType,
//       mileage: this.mileage,
//     };
//   }
// }

// const car = new Car({
//   brand: 'Toyota',
//   year: 2020,
//   fuelType: 'gasoline',
//   mileage: 50000,
// });

// car.drive(150).drive(350);

// console.log(car.getInfo());
// // { brand: 'Toyota', year: 2020 }

// console.log(car.getCarInfo());
// // { fuelType: 'gasoline', mileage: 50500 }

// ----------------------------------------------------------

// Завдання 15 — Наслідування + private + перевірки
// 📌 Умова

// 1️⃣ Створи клас Account, який має:

// private поле #balance

// constructor приймає обʼєкт { owner, balance }

// зберігає:

// owner — публічне

// #balance — приватне

// метод deposit(amount)

// якщо amount <= 0 → помилка

// додає гроші

// повертає this

// метод withdraw(amount)

// якщо amount > balance → помилка

// якщо amount <= 0 → помилка

// знімає гроші

// повертає this

// метод getBalance()

// повертає баланс (число)

// 2️⃣ Створи клас SavingsAccount, який:

// наслідує Account

// constructor приймає той самий обʼєкт

// додає властивість interestRate

// метод addInterest()

// збільшує баланс на balance * interestRate

// повертає this

// class Account {
//   #balance;

//   constructor(data) {
//     this.owner = data.owner;
//     this.#balance = data.balance;
//   }

//   deposit(amount) {
//     if (amount <= 0) {
//       throw new Error('Amount must be greater than 0');
//     } else {
//       this.#balance += amount;
//     }
//     return this;
//   }

//   withdraw(amount) {
//     if (amount > this.#balance) {
//       throw new Error('Amount error');
//     } else if (amount <= 0) {
//       throw new Error('Error 0');
//     }
//     this.#balance -= amount;
//     return this;
//   }

//   _addToBalance(amount) {
//     this.#balance += amount;
//   }

//   getBalance() {
//     return this.#balance;
//   }
// }

// class SavingsAccount extends Account {
//   constructor(data) {
//     super(data);
//     this.interestRate = data.interestRate;
//   }

//   addInterest() {
//     const interest = this.getBalance() * this.interestRate;
//     this._addToBalance(interest);
//     return this;
//   }
// }

// const acc = new SavingsAccount({
//   owner: 'Іван',
//   balance: 1000,
//   interestRate: 0.1,
// });

// acc.deposit(500).withdraw(200).addInterest();

// console.log(acc.getBalance());
// // 1430

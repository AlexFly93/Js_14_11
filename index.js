// homework
// 1) Запитувати у користувача число до тих пір, доки воно не буде більше 15 і менше 35 і кратне 6 (18,24,30 підходить)
// В користувача є 3 спроби

// зробити двома способами через while і for

// * це повинна бути функція(можливо і не одна)

// Classwork

// const START_YEAR = 1992;
// const END_YEAR = 2400;
// for (let i = START_YEAR; i <= END_YEAR; i++) {
//   if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0))
//     console.log(i);
// }
// const EnterYourNumber = function () {
//   while (true) {
//     const num = prompt("enter your number");
//     if (isNaN(Number(num)) || num === null || num === "" || num === " ") {
//       continue;
//     }
//     return num;
//   };
// }
// console.log(EnterYourNumber());

// const EnterYourNumber = function () {
//   while (true) {
//     const num = prompt("enter your number");
//     if (isNaN(Number(num)) === false && num !== null && num !== "" && num !== " ") {
//       return Number(num);
//     }
//   }
// };
// console.log(EnterYourNumber());

// const nameProduct = 't-short'
// const priceProduct = 456

// способы создать обьект
// const product1 = new Object()
// const product2 = Object()

// const product = {
//   name: "t-short",
//   price: 456,
//   currency: "$",
//   isHas: true,
//   amount: 12,
//   size: undefined,
//   pocket: null,
//   logProduct: function () {
//     console.log("name", product.name);
//   },
// };
// console.log(product)
// product.collor = "red";
// delete product.size;

// const Ukraine = {
//   name: 'Ukraine',
//   area: 603700,
//   population: 43810000,
//   logPopulatinoPerSquare: function () {
//     console.log("population per 1km", this.population / this.area);
//   },
// };
// Ukraine.logPopulatinoPerSquare();

// function Country(name, area, population) {
//   this.name = name;
//   this.area = area;
//   this.population = population;
// }

// const country = new Country("Ukraine", 603700, 43810000);
// console.log(country);
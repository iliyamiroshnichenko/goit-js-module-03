function calculateTotalPrice(array, prop) {
  "use strict";
  let sum = 0;
  for (const item of array) {
    if (item.name === prop) {sum += item.price * item.quantity}
  };
  return sum;
}
// const calculateTotalPrice = (array, prop) =>
//   array.reduce(
//     (sum, { name, price, quantity }) =>
//       name === prop ? sum + price * quantity : sum,
//     0
//   );

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

console.log(calculateTotalPrice(products, "Сканер"));
// 10200

console.log(calculateTotalPrice(products, "Захват"));
// 2400

console.log(calculateTotalPrice(products, "Дроид"));
// 2800

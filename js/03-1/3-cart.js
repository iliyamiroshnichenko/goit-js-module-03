// Работаем с коллекцией товаров в корзине

const fruits = [
  { name: "Apple", price: 50, quantity: 1 },
  { name: "Grapes", price: 70, quantity: 1 },
  { name: "Lemon", price: 60, quantity: 1 },
  { name: "Strawberry", price: 110, quantity: 1 },
];

const cart = {
  items: fruits,
  getItems() {
    return this.items;
  },
  // Добавление товара в корзину
  add(product) {
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    product.quantity = 1;
    this.items.push(product);
  },
  // Удаление товара из корзины по имени
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i].name;
      if (item === productName) {
        this.items.splice(i, 1);
      }
    }
  },
  // Очистка корзины
  clear() {
    this.items = [];
  },
  // Подсчитывает общую цену продуктов в корзине товара
  countTotalPrice() {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity;
    }
    return total;
  },
  // Увеличить количество товара
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  // Уменьшить количество товара
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          return;
        }
        item.quantity -= 1;
      }
    }
  },
};

cart.add(fruits[0]);
cart.add(fruits[1]);
cart.add({ name: "Peach", price: 50 });
cart.add({ name: "Melon", price: 60 });
cart.add({ name: "Melon", price: 60 });
// console.table(cart.getItems());

// cart.remove("Apple");
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());
// console.table(cart.increaseQuantity("Grapes"));
// console.table(cart.decreaseQuantity("Melon"));
// console.table(cart.getItems());
// console.table(cart.decreaseQuantity("Melon"));
// console.table(cart.getItems());
// console.table(cart.decreaseQuantity("Lemon"));
// console.table(cart.getItems());

// console.log('Общая сумма = ', cart.countTotalPrice());

export default cart;

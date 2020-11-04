const hotel = {
  name: "Ibiza Beach",
  stars: 4,
  capacity: 200,
  updateName(newName) {
    this.name = newName;
    this.someMethod();
  },
  someMethod() {
    console.log("Hello from someMethod!");
  },
};
console.log(hotel);
hotel.updateName("Sunset Resort");
console.log(hotel);

// const key = "stars";
// console.log(hotel[key]);

const entries = Object.entries(hotel);
for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    console.log(`${key}: ${value}`)
}
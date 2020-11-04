// let hobby = 'PS4';
// console.log(hobby);
// hobby = 'Gym';
// console.log(hobby);
// const message = 'Добро пожаловать в Славянск!';
// console.log("Надпись на указателе: ", message);

// var lastName = "sghbhdhdghdhdghdghsertr1_";
// var lastLetterOfLastName = lastName[lastName.length - 1];
// console.log(lastLetterOfLastName);

function wordBlanks(myNoun, myAdjective, myVerb, myADverb) {
  var result = `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myADverb}`;
  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));
console.log(wordBlanks("bike", "new", "flew", "slowly"));

let array = [10, 20, 30, 40, 50];
console.log(array);
array[3] = "vfvf";
array.push(false, undefined, 3.14);
console.log(array);
console.log(array[array.length - 2]);
let pop = array.pop();
console.log(pop, array);
array.shift();
console.log(array);
array.unshift(78, "sdfsd");
console.log(array);

let shoppingList = [
  ["Milk", 25],
  ["Bread", 14],
  ["Chicken", 95],
  ["Bananas", 29],
  ["Plum", 35],
];
for (let i = 0; i <= (shoppingList.length - 1); i += 1){
    shoppingList[i].push("UAH");
    if (i === 3) {
        shoppingList[i].shift();
        shoppingList[i].unshift("Apples");
    }
    console.log(shoppingList[i]);
}

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);
console.log(friends[0].online);

const nameToFind = "Poly";

for (const friend of friends) {
    if (friend.name === nameToFind) {
        console.log("Нашли ", nameToFind);
        break;
    }
}
// Ищем друга по имени
const findFriendByName = function (allFriends, name) {
    for (const friend of allFriends) {
        if (friend.name === name) {
            return "We've found IT!!!"
        }
    }
    return "Not found :("
 };

console.log(findFriendByName(friends, "Kiwi"));
console.log(findFriendByName(friends, "Chelsey"));

// Получаем имена всех друзей
const getAllNames = function (allFriends) {
    const names = [];
    for (const friend of allFriends) {
        names.push(friend.name);
    }
    return names;
};

console.log(getAllNames(friends));

// Получам имена только тех друзей, которые онлайн
const getOnlineFriends = function (allFriends) {
    const names = [];
    for (const friend of allFriends) {
        if (friend.online) { names.push(friend.name); }
      }
    return names;
};

console.log(getOnlineFriends(friends));
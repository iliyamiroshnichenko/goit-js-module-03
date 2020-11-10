const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};
// const { name, stars, capacity = 0 } = hotel;

const showHotelInfo = function ({ name, stars, capacity = 0 }) {
  //   const { name, stars, capacity = 0 } = obj;
  console.log("Name: ", name);
  console.log("Stars: ", stars);
  console.log("Capacity: ", capacity);
};
showHotelInfo(hotel);

const {
  name: hotelName,
  stars: hotelStars,
  capacity: hotelCapacity = 0,
} = hotel;
console.log(hotelName, hotelStars, hotelCapacity);

// Глубокая Деструктуразиация

const profile = {
  name: "Iliya Miroshnichenko",
  tag: "imiroshnichenko",
  location: "Slavyansk, Ukraine",
  avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg",
  stats: {
    followers: 453,
    views: 4576,
    likes: 1543,
  },
};

const destructProfile = function (obj) {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = obj;
  console.log(
    `${name}\n${tag}\n${location}\n${avatar}\nfollowers: ${followers}\nviews: ${views}\nlikes: ${likes}`
  );
};
destructProfile(profile);

const { name, tag, location, ...restProfile } = profile;
console.log(restProfile);

// const name = "Max";
// let age = 29;
// const hasHobbies = true;

// age = 30;

// arrow function
// const summmarizeUser = (userName, userAge, userHasHobby) =>
//   "Name is " +
//   userName +
//   ", age is " +
//   userAge +
//   " and the user has hobbies: " +
//   userHasHobby;

// function summmarizeUser(userName, userAge, userHasHobby) {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies: " +
//     userHasHobby
//   );
// }

// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;

// console.log(addOne(1));
// console.log(add(5, 3));

// console.log(summmarizeUser(name, age, hasHobbies));

// const addRandom = () => 1 + 2;
// console.log(addRandom());

const person = {
  name: "Max",
  age: 29,
  greet: () => {
    console.log("Hi, I am " + name);
  },
};

const copiedPerson = { ...person };

// person.greet();
const hobbies = ["Sports", "Cooking"];
// for (let hobby of hobbies) {
//   console.log(hobby);
// }
// console.log(
//   hobbies.map((hobby) => {
//     return "Hobby: " + hobby;
//   })
// );

// console.log(hobbies);
// hobbies.push("Programming");
// console.log(hobbies);
// console.log(copiedPerson);
const copiedArray = [...hobbies];
// console.log(copiedArray);

const toArray = (...arg) => {
  return arg;
};

// console.log(toArray(1, 2, 3));
const printName = ({ name }) => {
  console.log(name);
};

// printName(person);

const { name, age } = person;
// console.log(name, age);
const [hobby1, hobby2] = hobbies;
// console.log(hobby1, hobby2);

const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  console.log("Timer is done");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => console.log(text2));
}, 2000);

console.log("Hello!");
console.log("Hi!");

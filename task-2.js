// Write code under this line
const getUsersWithGender = (array, gender) =>
  array
    .filter(object => object.gender === gender)
    .map(object => {
      const { name } = object;
      return name;
    });

const users = [
  {
    name: 'Sveta',
    gender: 'female',
  },
  {
    name: 'Valera',
    gender: 'male',
  },
];

console.log(getUsersWithGender(users, 'male'));
/* [
  "Moore Hensley",
  "Ross Vazquez",
  "Carey Barr",
  "Blackburn Dotson"
] */

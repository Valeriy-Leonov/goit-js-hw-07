// Write code under this line
const getNamesSortedByFriendsCount = array =>
  [...array]
    .sort((obj1, obj2) => obj1.friends.length - obj2.friends.length)
    .map(({ name }) => name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

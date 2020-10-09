// Write code under this line
const calculateTotalBalance = array =>
  array.reduce((accumulator, { balance }) => {
    accumulator += balance;
    return accumulator;
  }, 0);

// console.log(calculateTotalBalance(users));
// 20916

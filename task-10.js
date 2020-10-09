// Write code under this line
const getSortedUniqueSkills = array =>
  array
    .reduce((acc, { skills }) => {
      return acc.concat(skills.filter(skill => !acc.includes(skill)));
    }, [])
    .sort();

// console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
console.log(true && 5 > 3 && 'javascript');
class Student {
  constructor() {}
}
console.log(typeof Student);

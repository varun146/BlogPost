// const people = [
//   { id: 1, name: "Jack" },
//   { id: 2, name: "Sally" },
//   { id: 3, name: "Joe" },
// ];
//
// const obj = people.reduce(
//   (lookup, person) => ({
//     ...lookup,
//     [person.id]: person,
//   }),
//
//   {},
// );
//
// console.log(obj);
//

const currentDate = new Date();

const day = currentDate.getDate();
const monthIndex = currentDate.getMonth(); // Note: Months are zero-based, so add 1
const year = currentDate.getFullYear();
console.log(monthIndex);
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const month = monthNames[monthIndex];
console.log(`${year}-${month}-${day}`);

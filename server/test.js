const people = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Sally" },
  { id: 3, name: "Joe" },
];

const obj = people.reduce(
  (lookup, person) => ({
    ...lookup,
    [person.id]: person,
  }),

  {},
);

console.log(obj);

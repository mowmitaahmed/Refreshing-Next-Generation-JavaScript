const person = {
    name: 'Mow'
};
const secondPerson = {
    ...person
};
person.name = 'Manu';
console.log(secondPerson);
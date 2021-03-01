const oldArray = [1, 2, 3];
const newArray = [...oldArray, 4, 5];
console.log(newArray);

const oldObject = {
    name: 'Mow'
};
const newObject = {
    ...oldObject,
    age: 28
};
console.log(newObject);
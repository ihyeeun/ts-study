/**
 * keyof 연산자
 */

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person: Person = {
  name: "이정환",
  age: 27,
};

console.log(getPropertyKey(person, "name")); // 이정환
console.log(getPropertyKey(person, "age")); // 27

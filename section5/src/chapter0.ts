/**
 * 인터페이스
 */

interface Person {
  name: string;
  age: number;
  sayHi?: () => void;
}

const person: Person = {
  name: "이정환",
  age: 27,
};

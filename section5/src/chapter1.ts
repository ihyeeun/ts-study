/**
 * 인터페이스 확장
 */

interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken {
  name: string;
  age: number;
  isFly: boolean;
}

interface DogCat extends Dog, Cat {
  // 여러가지 인터페이스를 확장하는 다중 확장도 가능하다.
}

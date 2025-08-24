/**
 * 선언 합침
 */

interface Person {
  name: string;
}

interface Person {
  // ✅
  age: number;
}

// 이렇게 가능한 이유는 모두 하나로 합쳐지기 때문이다.

const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강할때 사용한다.
 */

//대수 타입 : 여러개의 타입을 합성해서 새로 만들어낸 타입

// 1. 합집합(union) 타입
let a: string | number;
a = 1;
a = "hello";

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  // 세가지 프로퍼티를 다 가지는 객체 생성.
  name: "",
  color: "",
  language: "",
};

// 2. 교집합(intersection) 타입
let variable: number & string;
/**
 * variable 변수에 마우스를 올리면 never 타입으로 잡히는 것이 보인다.
 * 이는 number와 string의 교집합이 없기에 공집합을 의미하는 never로 잡히게 되는 것.
 */

type Intersection = Dog & Person;
let intersection: Intersection = {
  // 아래와 같이 모든 속성을 다 가지고 있어야 에러나지 않는다.
  name: "",
  color: "",
  language: "",
};

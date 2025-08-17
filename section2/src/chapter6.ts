// any
// 특정 변수의 타입을 우리가 확실히 모를 때

let anyVar = 10;
// anyVar = "hello"; // any 타입은 어떤 타입이든 할당 가능

// 자동 추론이 되니까 이미 number타입으로 추론이 되어있는데 string을 할당하려고 해서 에러가 발생.
// 그래서
// let anyVar: any = 10;
// 이렇게 명시적으로 any 타입으로 선언해주면 에러가 발생하지 않음

// 모든 타입 검사를 안하는 것과 똑같다. 그래서 런타임 에러를 발생하는 경우가 많음.

// unknown
let unknownVar: unknown;
unknownVar = 10;
unknownVar = "hello";
unknownVar = true;
// unknown 타입은 어떤 타입이든 할당 가능하지만,

let num: number = 10;
// num = unknownVar; // 에러 발생
// unknown 타입은 다른 타입에 할당하기 전에 타입 검사를 해야 한다.
if (typeof unknownVar === "number") {
  num = unknownVar; // 타입 검사를 통해 number 타입으로 변환 가능
}

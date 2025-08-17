// void
// 아무것도 없음을 의미하는 타입

function func(): string {
  // 이렇게 함수의 반환 타입을 명시할 수 있음.
  return "Hello, World!";
}

function func2(): void {
  console.log("Hello, World!");
  // 반환값이 없을 때는 void를 사용함.
}

let a: void;
a = undefined; // void 타입은 undefined만 할당할 수 있음.

// never
// 절대 반환하지 않는 함수의 반환 타입. 불가능한 타입
function func3(): never {
  while (true) {}
}
// 예를 들어, 무한 루프를 돌거나 항상 예외를 던지는 함수의 반환 타입으로 사용됨.
// never 타입은 어떤 값도 할당할 수 없고, 함수가 절대 반환하지 않는다는 것을 의미함.

function func4(): never {
  throw new Error();
}
// 예외를 던지는 함수도 never 타입을 반환함.

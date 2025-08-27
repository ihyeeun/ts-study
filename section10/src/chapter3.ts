/**
 * Exclude<T, U>
 * -> 제외하다, 추방하다.
 * -> T에서 U를 제거하는 타입
 */

type A = Exclude<string | boolean, boolean>;

//직접 구현
type Exlcude<T, U> = T extends U ? never : T;

/**
 * Extract<T, U>
 * -> T에서 U를 추출하는 타입
 */
// 직접구현
type Extract<T, U> = T extends U ? T : never;

/**
 * ReturnType
 * -> 함수의 반환값 타입을 추출하는 타입
 */
// 직접구현
type ReturnType<T extends (...args: any) => any> = T extends (...agrs: any) => infer R ? R : never;

function funcA() {
  return "hello";
}
function funcB() {
  return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string
type ReturnB = ReturnType<typeof funcB>; // number

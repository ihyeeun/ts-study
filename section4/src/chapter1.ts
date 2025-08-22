/**
 * 함수 타입 표현식
 * 함수의 별칭을 이용해서 타입을 표현 할 수 있다.
 */

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;

/**
 * 호출 시그니처
 * (콜 시그니처)
 */
type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

function func1(a: number, b: number): void {}
const add2: Operation2 = (a, b) => a + b;

add2(1, 2);

// 하이브리드 타입
add2.name;

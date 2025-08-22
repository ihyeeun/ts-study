/**
 * 함수 타입의 호환성
 */

// 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; // 이 문법은 다운 캐스팅 되는거라서 에러 발생.

// 2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업캐스팅인데 에러발생.
d = c; // 다운캐스팅인데 가능하다.

// 2-2. 매개변수의 개수가 다를 때

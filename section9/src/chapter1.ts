/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 이렇게 유니온 타입으로 전달하면 한번은 number로 타입이 들어가고, 또 string으로 타입이 한번 더 들어간다.
// 그래서 변수 c의 타입은 number | string 으로 타입이 잡히게 된다. type StringNumberSwitch 조건부 타입에 의해 각각 한번씩 들어가게 되니까

/**
 * 실용적인 예제
 * 1. 유니온에서 특정 타입만 제거하는 타입
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;

//2. 유니온에서 특정 타입만 살리는 타입
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
//step1
// Extract<number, string>
// Extract<string, string>
// Extract<boolean, string>

//step2
// never
// string
// never
// => never는 사실 공집합이므로 never | string | never => string
// 결론 type B = string 이 된다.

// 분산적인 조건부 타입이 되지 않도록 막고 싶다면
// extends 양 옆에 대괄호를 씌우면 된다.
// 그러면 유니온 타입을 전달해도 분산이 되지 않는다.
//type Extract<T, U> = [T] extends [U] ? T : never

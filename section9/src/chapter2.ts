/**
 * infer
 */

type FuncA = () => string;
type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>; //type A = string
type B = ReturnType<FuncB>; //type B = number
type C = ReturnType<number>;

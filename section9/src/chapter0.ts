/**
 * 조건부 타입
 */

type A = number extends string ? string : number;

/**
 * 제네릭과 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;
// number타입을 넘겼기에 스위치되어서 varA는 string 타입을 가진다.

function removeSpaces<T>(text: T): T extends string ? string : undefined; // 함수 오버로딩
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);

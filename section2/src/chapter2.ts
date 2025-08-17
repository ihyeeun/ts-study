//배열
let numArr: number[] = [1, 2, 3];

//배열의 제네릭 타입
let strArr: Array<string> = ["a", "b", "c"];

// 배열에 들어가는 타입이 다양한 경우
let multiArr: (number | string)[] = [1, "a", 2, "b"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// 튜플 타입
// 튜플은 고정된 길이와 타입을 가지는 배열
let tup1: [number, number] = [1, 2];
// 인덱스 위치를 명확하게 하기 위해서 튜플 타입을 사용하는 것임.

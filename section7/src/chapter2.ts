/**
 * map 메서드
 */

const arr = [1, 2, 3];
const newArr = arr.map((it) => it + 1);

function map<T>(arr: T[], callback: (item: T) => T) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    result.push(callback(arr[i]));
  }
  return result;
}

map(arr, (it) => it * 2);

map(["hi", "hello"], (it) => it.toUpperCase());
// map 메서드는 원본 배열 타입과 다른 타입의 배열로도 변환할 수 있어야한다.

//이렇게 타입 변수를 하나 더 추가하여 오류를 수정.
function map2<T, U>(arr: T[], callback: (item: T) => U) {
  let result = [];
  for (let i = 0; i < arr.length; ++i) {
    result.push(callback(arr[i]));
  }
  return result;
}

map2(["hi", "hello"], (it) => parseInt(it));

/**
 * forEach
 */

const arr2 = [1, 2, 3];
arr2.forEach((it) => console.log(it));

function forEach<T>(arr: T[], callback: (item: T) => void) {
  for (let i = 0; i < arr.length; ++i) {
    callback(arr[i]);
  }
}

forEach([1, 2, 3], (it) => it + 1);

forEach(["123", "456"], (it) => {
  it;
});

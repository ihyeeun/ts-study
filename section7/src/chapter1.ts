// 사례1️⃣
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);
// 2개의 타입 변수가 필요한 상황이라면 두개의 타입변수를 사용

//사례2️⃣
function returnFirstValue<T>(data: T[]) {
  return data[0];
}
// 함수의 매개변수 타입을 T[]로 설정했기에
// 배열이 아닌 값은 인수로 전달할 수 없다.

let num = returnFirstValue([0, 1, 2]);
// number

let str = returnFirstValue([1, "hello", "mynameis"]);
// number | string
// 인수로 (number|string)[]으로 전달했기에 반환값의 타입이 위와 같다.

//사례3️⃣
// 만약 타입을 좁히고 싶다면
// 아래 예시처럼
// 반환값의 타입을 배열의 첫번째 요소의 타입이 되도록 하려면
// 나머지 요소의 타입은 ...unknown[]으로 길이,타입이 상관없도록 정의한다.
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
  return data[0];
}
// 이렇게하면 첫번째 인자의 타입으로 반환값의 타입이 정의된다.

let str2 = returnFirstValue2([1, "hello", "mynameis"]);
// number

//사례4️⃣
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123"); // ✅

getLength([1, 2, 3]); // ✅

getLength({ length: 1 }); // ✅

// getLength(undefined); // ❌

// getLength(null); // ❌

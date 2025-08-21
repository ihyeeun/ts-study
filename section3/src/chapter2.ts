/** 1. Unknown 타입
 * Unknown 타입은 모든 타입의 상위 타입으로, 모든 타입의 슈퍼타입이 된다.
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;

  // 하지만 unknown 타입은 다운 캐스팅은 불가능하다.
}

/** 2. Never 타입
 *
 * 가장 하위 타입으로, 어떤 값도 할당할 수 없다.
 * 공집합의 개념
 * 즉, 반환할 수 있는 값이 아무것도 없다. 아무것도 저장할 수 없는 타입.
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  // let never1: never = 1; // 다운 캐스팅이 불가능하기에 에러가 난다.
}

/** 3. void 타입
 * void 타입은 undefined의 슈퍼타입이다.
 *
 */
function voidExam() {
  function voidFunc(): void {
    console.log("This function returns nothing.");
  }
  function voidFunc2(): void {
    console.log("This function returns nothing.");
    return undefined;
  }

  let voidVar: void = undefined;
}

/** 4. any 타입
 * any 타입은 모든 타입의 슈퍼타입이지만, 타입 검사를 우회한다.
 * 즉, 타입 검사를 하지 않기 때문에, 타입 안정성을 잃게 된다.
 */
function anyExam() {
  let anyVar: any = 1;
  anyVar = "hello"; // 타입 검사를 하지 않기 때문에, 어떤 타입도 할당할 수 있다.
  anyVar = true;

  let num: number = anyVar; // 타입 검사를 하지 않기 때문에, 다운 캐스팅이 가능하다.

  //또한 unknown 타입을 any 타입에 할당하면 다운 캐스팅이 되어서 에러가 나야하는데 치트키라서 에러가 나지 않는다.
}

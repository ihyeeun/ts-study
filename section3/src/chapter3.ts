/**
 * 객체간의 호환성
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "노랑",
};

let dog: Dog = {
  name: "코코",
  color: "흰색",
  breed: "진도",
};

// Dog 타입은 Animal 타입의 속성을 모두 포함하고 있으므로 호환됩니다.
animal = dog; // OK

// 하지만 Animal 타입은 Dog 타입의 속성을 모두 포함하지 않으므로 호환되지 않습니다.
// dog = animal;
// Error: Type 'Animal' is not assignable to type '

//즉, 객체 타입은 프로퍼티에 의해 결정된다.

// 하지만 초기값 세팅을 객체 리터럴 타입으로 정의하면 에러 발생(초과 프로퍼티 검사)한다.
let animal2: Animal = {
  name: "기린",
  color: "노랑",
  // breed: "진도", // Error: Object literal may only specify known properties,
};
// 객체 타입 변수를 초기화할 때 객체 리터럴을 사용하면 초과 프로퍼티검사에 걸리게 된다.
// 하지만 미리 선언 된 타입에 할당하는 경우에는 초과 프로퍼티 검사에 걸리지 않는다.

function func(animal: Animal) {}
func({
  name: "코코",
  color: "흰색",
  //breed: "진도"
});

// 아래처럼 변수에 넣어서 할당하는 건 가능하다.
let animal3: Animal = dog;
func(dog);

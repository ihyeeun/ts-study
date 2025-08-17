// object
let user: object = {
  name: "Alice",
  age: 30,
};

// 이렇게 하고 user.name을 접근하면 오류가 발생한다.
// 왜냐하면 object는 그냥 객체라는 정보만 주는 것 뿐이지,
// 그 안에 어떤 프로퍼티가 있는지, 어떤 타입인지 알 수 없기 때문이다.

// 그래서 아래와 같이 바꿔야한다.
let user2: {
  name: string;
  age: number;
} = {
  name: "Alice",
  age: 30,
};

user2.name; // 이제 오류가 발생하지 않는다.
// 이와 같은 방식으로 객체의 타입을 정의하는 것을 "객체 리터럴 타입"이라고 한다.

let config: {
  readonly apiKey: string; // readonly로 선언하면 읽기 전용이 된다.
} = {
  apiKey: "MY API KEY",
};
// config.api = "NEW API KEY"; // 오류 발생: 읽기 전용 속성은 수정할 수 없다.

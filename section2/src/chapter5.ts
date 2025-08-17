// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// JS에는 없고, TS에만 있는 문법

enum Role {
  USER, // 0
  ADMIN, // 1
  GUEST, // 2
}

const user1 = {
  name: "이정환",
  role: Role.USER, // 0
};
const user2 = {
  name: "이정환",
  role: Role.ADMIN, // 1
};
const user3 = {
  name: "이정환",
  role: Role.GUEST, // 2
};

// JS로 변환하면 아래와 같이 됨
// const user1 = {
//   name: "이정환",
//   role: 0, //이렇게 숫자로 자동 변환된다. (위에서부터 0,1,2, ...)
// };

//enum 은 컴파일해도 사라지지 않고 값이 남아있다.
//컴파일 결과 객체로 변환 되는 것을 확인할 수 있다.

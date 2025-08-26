/**
 * Mapped Type
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type booleanUser = {
  [key in keyof User]: boolean;
  //booleanUser의 프로퍼티의 타입을 모두 boolean으로 바꾸는 것
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

function updateUser(user: PartialUser) {
  // ... 유저 정보 수정 기능
}

updateUser({
  age: 25,
});

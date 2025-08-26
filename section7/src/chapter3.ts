/**
 * 제네릭 인터페이스
 */

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let KeyPair: KeyPair<string, string> = {
  key: "key입니다.",
  value: "value입니다",
};

/**
 * 인덱스 시그니처
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -123,
  key2: 1234,
};

interface Map<V> {
  //이렇게 유연하게 타입 정의하고자 할 때
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "string으로 key 값 정의",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "string으로 정의 했기에 value는 string으로 작성해줍니다.",
};

/**
 * 제네릭 인터페이스의 활용 예시
 */
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
} // 이렇게 작성하면 함수 내부에서 타입을 좁힐 필요가 없어져서 코드가 간결해진다.

function goToSchool(user: User<Student>) {
  // if (user.profile.type !== "student") {
  //   console.log("학생이 아니라서 잘못 들어오셨습니다.");
  //   return;
  // }
  const school = user.profile.school;
  console.log(`${school}로 등교 완료!`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "TypeScript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};

goToSchool(studentUser);

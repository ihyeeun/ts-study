// 타입 별칭
type User = {
  id: number;
  name: string;
  email: string;
};

let user1: User = {
  id: 1,
  name: "Alice",
  email: "tmp@gmail.com",
};

// 이런 타입 별칭도 js 컴파일시 다 제거 된다.

// 인덱스 시그니처
// 필요한 상황 예시

// type CountryCodes = {
//   Korea: string;
//   UnitedState: string;
//   UnitedKingdom: string;
// }; // 이렇게 쓰게 되면, 만약에 요소들이 엄청나게 많아진다면 TS를 사용하는 의미가 없어진다.

type CountryCodes = {
  [key: string]: string; // key는 string, value도 string
}; //키와 value가 규칙을 가지고 값을 가질 때 이런 걸 사용할 수 있음.

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 82,
  UnitedState: 1,
  UnitedKingdom: 44,
};

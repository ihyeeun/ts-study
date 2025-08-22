// 타입 단언
type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "Alice";
person.age = 30;

type Dog = {
  name: string;
  color: string;
};

let dog: Dog = {
  name: "Buddy",
  color: "Brown",
  breed: "진도",
} as Dog;
// 원래 초과 프로퍼티 검사로 인해 오류가 발생하지만, Dog타입으로 단언했기에 에러가 없어지게 된다.

/**
 * 타입 단언의 규칙
 * [값 as 단언]
 * ex) A as B
 * 1. A가 B의 슈퍼타입이거나
 * 2. A가 B의 서브타입이어야한다.
 */
let num1 = 10 as never;

let num3 = 10 as unknown as string;
// 이런식으로 서로소 집합인 타입이라서 절대 선언이 안되던걸 다중 단언을 통해서 할수도 있음 ㅋ.ㅋ
// 결코좋은 방식은 아님!

/**
 * const 단언
 */
let num4 = 10 as const;
// const 단언은 타입을 리터럴로 고정시켜준다.
// 즉, num4는 10이라는 값만 가질 수 있다.

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;
// 이렇게하면 모든 프로퍼티가 읽기전용으로 변한다. 즉, cat.name = "" 이런 수정이 안되는 객체가 되어버린다.

/**
 * Non Null 단언
 * - 어떤 값이 Null이거나 undefined이 아니라고 TS 컴파일러에게 알려주는 상황.
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "철수",
};

const len: number = post.author!.length; // !를 붙여주면, post.author가 null이나 undefined가 아니라고 단언하는 것.

// 프로퍼티에 접근할 때 null/undefined 일때 점표기법 접근하면 오류가 발생하기에
// 물음표를 붙여주면, 값이 없을때 undefined를 반환하게 해준다. => "옵셔널 체이닝" 이라고 한다.
// const len: number = post.author?.length; => 하지만 이 값은 undefined가 될 수 있기에 에러를 발생시킴.

const len2: number | undefined = post.author?.length;

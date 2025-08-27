/**
 * Pick<T,K>
 * -> 뽑다, 고르다.
 * -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // 여기서 K의 제약조건을 건 이유는 아래에서 in 연산자 우측항에는 항상 유니온 타입이 와야한다.
  // key의 값으로는 항상 string | number | symbol 중에서 와야하는데
  // 제약을 걸어놓지 않았기때문에 객체, never 등 아무거나 들어올 수 있어서 에러 발생.
  // 그래서 extends로 타입을 좁힌 것!
  [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
  title: "옛날 글",
  content: "옛날 글의 컨텐츠",
  // 옛날 글이라서 현재 Post타입의 tags가 없어서 에러 발생.
  // Pick 문법을 사용하여
  // Post 타입에서 title, content 만 꺼내와서 타입으로 사용한다는 의미.
};

/**
 * Omit<T,K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// 이 예시는 넣는 값보다 빼는 갯수가 훨 적으니까 빼는 걸로 사용.
const noTitlePost: Omit<Post, "title"> = {
  content: "",
  tags: [],
  thumbnailURL: "",
};

/**
 * Record<K, V>
 * K : 유니온 타입
 * V : 각 프로퍼티의 value로 들어갈 값을 받는다.
 */
type ThumbnailLegacy = {
  lg: { url: string };
  md: { url: string };
  sm: { url: string };
};

type Thumbnail = Record<"lg" | "md" | "sm", { url: string }>;

type Record<K extends keyof any, V> = {
  // 여기서 any라고 하는건
  // 어떤 객체의 키 타입이라고 하는건데, 간단히 표현하는 문법이 any라서
  [key in K]: V;
};

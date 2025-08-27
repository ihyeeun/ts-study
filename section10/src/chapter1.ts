/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 어떻게 동작되는지 실제로 한번 구현 해보자
type Partial<T> = {
  [key in keyof T]?: T[key];
  //우측항은 indexed contents로 해당 key의 value를 꺼내주는 것이다.
};

const draft: Partial<Post> = {
  title: "임시제목",
  content: "초안",
};

/**
 * Required<T>
 * -> 필수의, 필수적인
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  [key in keyof T]-?: T[key];
  // 물음표를 빼겠다라는 의미. 선택 연산자를 제거하겠다는 의미
};

const withThumbnailPost: Required<Post> = {
  title: "한입 TS",
  tags: ["ts"],
  content: "",
  thumbnailURL: "https://...",
};

/**
 * Readonly<T>
 * -> 읽기전용. 수정불가.
 * -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입.
 */
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: "보호된 게시글입니다.",
  tags: [],
  content: "",
};

// readonlyPost.content = "해킹당함"; // ❌

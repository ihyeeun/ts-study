/**
 * 인덱스드 액세스 타입
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

function printAuthorInfo(author: Post["author"]) {
  //(parameter) author: { id: number; name: string;}
  // 이렇게 property의 타입이 변경되었을 때에도 별도로 추가적인 작업을 하지 않아도 된다.
  console.log(`${author.name}-${author.id}`);
}

function printAuthorInfoId(authorId: Post["author"]["id"]) {
  //이렇게 특정 property만 가져오고 싶다면
  console.log(`${authorId}`);
}

const post: Post = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "이정환",
  },
};

// 배열 요소의 타입 추출하기
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];
//이건 글 목록이 여러개 있다는 의미

const post2: PostList[number] = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "이정환",
    age: 29,
  },
};

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];

type TupNum = Tup[number]; //type TupNum = string | number | boolean

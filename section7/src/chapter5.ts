/**
 * 프로미스
 */

//작업의 결과 타입을 Promise뒤에 <>를 이용해서 붙여주면 타입이 좁혀진다.
const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20); //성공했을 때 넘길 값
    reject("~ 때문에 실패");
  }, 3000);
});

promise.then((response) => {
  //unknown으로 추론되고 있음. 이를 해결하기 위해서 제네릭으로 선언!
  console.log(response * 10); //
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});
// 에러의 타입을 대부분 문자열 형태로 보내주지만,
// 프로젝트 상황에 맞게 에러의 형태를 잘 좁혀서 사용하기
// 성공했을때 타입은 정의할 수 있지만, 실패했을 때 타입을 정하기는 어렵다.

//그리고 만약 반환값의 <> 타입을 정하지 않으면
//기본적으로 unknown으로 타입이 잡히게 된다.

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "제목",
        content: "내용",
      });
    }, 3000);
  });
}
// 반환값을 명시하는 방법에서
// 1. 함수명 뒤에 반환 타입 명시
// 2. return 에 반환 타입 명시

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});

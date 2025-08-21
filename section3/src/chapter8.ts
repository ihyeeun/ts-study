/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함.
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

function login(user: User) {
  if ("kickCount" in user) {
    // Admin
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if ("point" in user) {
    // Member
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    // Guest
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}
// 이렇게 하면 코드가 직관적이지는 않음.

//아래처럼 tag를 이용해서 직관적으로 바꿀 수 있음. + switch를 이용해서 더 쉽게 표현할 수도 있음.
function login2(user: User) {
  if (user.tag === "ADMIN") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 추방했습니다`);
  } else if (user.tag === "MEMBER") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다`);
  }
}

// 이렇게 하면 서로소 집합이 되어버린다.
// 동일한 프로퍼티인 tag를 모두 가지고 있고, 다 다른 값을 가지고 있기 때문에 교집합없이 서로소가 되어버리게 된다

// 비동기 작업의 결과를 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;
// 이렇게 타입을 명확히 나누고 아래처럼 사용하면 타입 좁히기도 가능해짐.

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data}`);
      break;
    }
  }
}

// 이렇게 선택적 프로퍼티를 사용하는 것보다는 상태에 따라서 타입을 잘게 쪼개서
// 서로소 유니온 타입을 만들어서 사용하면 직관적이면서 안전하게 타입을 좁혀서 사용할 수 있다.

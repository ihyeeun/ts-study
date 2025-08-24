/**
 * 클래스
 */

let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  //메서드
  study() {
    console.log("열심히 공부 함");
  },
  introduce() {
    console.log("안녕하세요!");
  },
};

class Student {
  //필드 : 클래스가 만들어낼 객체 프로퍼티를 의미.
  name;
  grade;
  age;

  //생성자 : 클래스를 호출하면 실제로 객체를 생성하는 함수.
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //메서드
  study() {
    console.log("열심히 공부함.");
  }
}

let studentB = new Student("이정환", "A", 27);
// 클래스를 호출해서 객체를 생성할 때에는 이렇게 new 라는 키워드를 붙여야한다.
// 함수를 호출하듯이 인수를 전달하게 되면 클래스에 있는 constructor를 호출하게 된다.
console.log(studentB); //Student { name: '이정환', grade: 'A', age: 27 }

//그리고 클래스를 이용해서 만든 객체를 "인스턴스"라고 부른다.

studentB.study();
// Student { name: '이정환', grade: 'A', age: 27 }
// 열심히 공부함.

class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); //확장을 해서 사용하지만 확장된 프로퍼티들은 super라는 함수를 이용해서 인수로 전달해야한다.
    this.favoriteSkill = favoriteSkill;
  }

  //메서드
  study() {
    console.log("열심히 공부함.");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 합니다.`);
  }
}

const studentDeveloper = new StudentDeveloper("이정환", "B", 26, "TypeScript");
console.log(studentDeveloper);

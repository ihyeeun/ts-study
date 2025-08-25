/**
 * 접근 제어자
 * access modifier
 * ==> public private proteced
 */

class Employee {
  // 필드
  name: string; // 자동으로 public
  age: number; // 자동으로 public
  position: string; // 자동으로 public

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employee = new Employee("이정환", 27, "devloper");

employee.name = "홍길동";
employee.age = 30;
employee.position = "디자이너";

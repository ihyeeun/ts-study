/**
 * 타입스크립트의 클래스
 */

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함.");
  }
}

const employeeB = new Employee("이정환", 28, "개발자");

/**
 * 제네릭 클래스
 */
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

//여기서 제네릭 인터페이스와 다르게 생성자의 인수로 전달하는 이 값을 기준으로 타입을 추론하기에
//new List<>() 이렇게 타입을 명시하지 않아도 된다.
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);

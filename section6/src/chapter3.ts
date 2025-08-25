/**
 * 인터페이스와 클래스
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
} // 여기는 무조건 public 필드로만 정의가 가능하다.

class Character implements CharacterInterface {
  // 여기서 인터페이스는 클래스의 설계도 역할을 한다고 알면 된다.
  name: string;
  moveSpeed: number;

  constructor(name: string, moveSpeed: number) {
    this.name = name;
    this.moveSpeed = moveSpeed;
  }

  move(): void {
    console.log(`${this.moveSpeed}속도로 이동!`);
  }
}

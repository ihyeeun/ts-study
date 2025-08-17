// number
let num1: number = 123;
// 여기서 num1 이라는 변수 뒤에 세미콜론과 함께 타입을 지정하는 것을 타입주석(annotation)이라고 부른다.
// 여기서 number라는 타입에는 다양한 값이 올 수 있음. 양/음/소수/Infinity/NaN 등
let num2: number = -123;
let num3: number = Infinity;
let num4: number = NaN;

// string
let str1: string = "hello";

// null
let nullValue: null = null;

// undefined
let undefinedValue: undefined = undefined;

// tsconfig.json 파일에 strictNullChecks 옵션이 true로 설정되어 있으면
let num5: number = null; //오류가 발생하지 않는다.

/*광란의 코드질주

타입스크립트는 무엇이냐
요상야릇하고 야리꾸리한 자바스크립트를 사람구실하게 만들어주는 수퍼셋 언어다!
 */

// 데이터 타입 명시 방법
let myString: string;
let myNumber: number;
let myBoolean: boolean;
let myObject: object;
let myArray: number[];
let myTuple: [number, string];

let myAny: any //이걸로 떡칠하면 타입스크립트를 쓰는 이유가 없으니 지양하자

// object 코드가 드러워지는 것 같아서 슬펐는데 IDE에서 다행히 타입 정의부분만 접을 수 있다.
const objectExample: {
    myName: string;
    myNumber: number;
    myBoolean: boolean
} = {
    myName: "jinho",
    myNumber: 25,
    myBoolean: true
}


//enum 이넘(이놈 아님ㅎ)은 코드 가독성, 오타나 잘못된 값 사용을 방지할 수 있다.
enum myEnum { FREE, PAID } // 기본값으로는 0부터 숫자들이 순서대로 들어감
enum myEnum2 { FREE = "FREE", PAID = "PAID" } // 값을 지정할 수도 있다.

// 유니온 타입
let combineType: string | number;

// 리터럴 타입
type literalType = "hi" | "bye"; //값 제한할때 씀

//타입을 잘 쓰면 불필요한 반복을 피하고 타입을 중심에서 관리할 수 있음.

// return값은 ts가 알아서 추론해준다. 명탐정 TS

// void 짠돌이마냥 아무것도 안주면 void를 줌.
// js는 void를 모름 undefined뱉음.
// 굳이 명시 안해도 추론 해줌
function testAnyFunc(): void {
    console.log("hi");
}

// 이걸 뭐라고 부르는지 까먹었다
function abababab(a: string, b: number) {
    return "안녕하세요";
}
let abcabc: (a: string, b: number) => string;

abcabc = abababab;


// 콜백함수 타입 명시법 끔찍하게 생겼다
function hihihi(cb: (a: number) => number): void {
    cb(3);
}

// unknown
let adfsfsdf: unknown;
//왜 쓰고 any와는 뭔 차이냐.
// 뭔 값이 들어갈지 아직 모를때 임시로 정해놓을 용도로 쓰기 좋을 듯
// any는 쓰지 말자


// never
function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code }
}

///////////// 여기까지가 기본사용법 끝

// 오늘은 개 열받아버리게 리액트랑 TS를 같이 써보려고 삽질을 좀 했다.
// 결국 해결은 했다.
// 아직 뭐 거창한 프로젝트를 해본게 아니라 TS의 쓰임새를 경험해보지는 못했지만 좋은 것 같다.
// 2024.12.29
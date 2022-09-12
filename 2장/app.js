function b() {
  var i = 3;
  for (var i = 0; i < 10; i++) {}
  return i;
}
// i가 10에 이를때까지 반복하다가, 맨 끝에 갱신된 i를 출력

console.log(b());

function c() {
  for (var i = 0; i < 10; i++) {}
  return i;
}

console.log(c());

// 호이스팅 : 모든 함수, 변수가 선언될 때 해당 선언이 들어있는 스코프의 최상단으로 가는 것
// 변수와 함수 선언은, 들어있는 스코프 안에서 항상 가장 위에서 이루어지는 것이나 마찬가지

// function c() {
//   for (let i; i < 10; i++) {}
//   return i; 여기서 i는 선언되지 않았다! i는 블럭 바깥에서는 읽지 못하기 때문!
//              때문에, 호이스팅이 일어나지 않은 것처럼 보이나, 단순히 스코프 바깥에서 읽지 못하는 문제일뿐이다.
// }

// console.log(c());
// let과 const의 변수 선언 스코프는 블럭단위!

// let a = 1;
// if (true) {
//   console.log(a);
//   let a = 2;
// }

// app.js:30 Uncaught ReferenceError: Cannot access 'a' before initialization
// TDZ : Temporal Dead Zone 선언과 초기화가 동시에 일어나는 것을 막음
// 호이스팅이 일어나는 증거! 다만 초기화와 할당은 나중에 일어나기 때문에 에러가 난다

if (true) {
  console.log(a);
  var a = 2; // 이 경우, 선언과 할당이 동시에 이루어지기 때문에 콘솔에 undefined가 찍힌다
}

function d() {
  return 1;
}

const d_ES6 = () => 1;

console.log(d());
console.log(d_ES6());

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

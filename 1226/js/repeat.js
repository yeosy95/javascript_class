//1.while문
let n = 1;//초기값
while(n<=10){ //n이 10보다 작거나 같을 때까지 아래 내용을 실행.
  document.write(n);
  n++;
}

document.write('1.while문'+'<br>'+'<hr>');

//do.while문
let n1=1;//초기값
do{
  document.write(n1);
  n1++;
}while(n1<=10)
document.write(' 2.do while문'+'<br>');

//3.for문
for(let n2=1;n2<=10;n2++){
  document.write(n2);
}
document.write(' 3.for문'+'<br>');


//반복문을 사용하여 구구단 출력하기 - 중첩 for문
/*******************2단******************/
for(let i=2;i<=9;i++){
  document.write('**************'+i+'단****************<br>');
  for(let j=1;j<=9;j++){
    let gugu = i * j;
    document.write(i+'*'+j+'='+gugu+'<br>');
  }
}
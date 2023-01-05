//1.if문
    // if( 1 === '1'){
    //   document.write("참");
    // }else{
    //   document.write('수식은 <span>거짓</span>입니다.\n');
    // }
//3.사용자가 입력한 숫자데이터를 비교하여 '홀수','짝수'판단
    // let num = prompt('숫자입력');
    // if( num%2 == 0){
    //   document.write('짝수입니다.\n');
    // }else{
    //   document.write('홀수입니다.\n');
    // }
    
    //4.else if문을 사용하여 여러 조건식에 맞는 결과 나타내기
    // let jumsu = prompt('자신의 성평균점수를 입력하세요.');
    // if(jumsu>=90){
    //   document.write('<p>당신의 성적은 <span>수</span>입니다.</p>');
    // }
    // else if(jumsu>=80){
    //   document.write('<p>당신의 성적은 <span>우</span>입니다.</p>');
    // }
    // else if(jumsu>=70){
    //   document.write('<p>당신의 성적은 <span>미</span>입니다.</p>');
    // }
    // else if(jumsu>=60){
    //   document.write('<p>당신의 성적은 <span>양</span>입니다.</p>');
    // }else{
    //   document.write('<p>당신의 성적은 <span>가</span>입니다.</p>');
    // }

    //5.좌,우 방향 버튼을 클릭하면 해당 함수가 호출되게하여 1씩 증가되거나, 1씩감소

    let n = 1;//초기값
    document.getElementById('page').innerHTML = n +'/10';

    //증가하는 함수
    function plus(){
      if(n==10){
        n=1;
      }else{
        n++;
      }
      document.getElementById('page').innerHTML = n +'/10';
      document.getElementById('book').src="./images/book"+ n +".jpg";
    }

    //감소하는 함수
    function minus(){
      if(n==1){
        n=10;
      }else{
        n--;
      }
      document.getElementById('page').innerHTML = n +'/10';
      document.getElementById('book').src="./images/book"+ n +".jpg";
    }


    //switch case문 사용자가 입력한 데이터가 정확하게 일치 할 대만 결과가 나온다.
/*    let a = prompt("숫자를 입력해주세요"); 

    switch(a){
      case '1':
        document.write('해외여행 상품권');
        break;
      case '2':
        document.write('대형tv');
        break;
      case '3':
        document.write('상품권');
        break;
      default:
        document.write('다음기회에....');
        break;
    }
*/
    //switch case문을 사용하여 현재요일 표시하기
    //요일에 해당하는 번호구하기

    let today = new Date();

    document.write(today+'<br>');//현재시간, 날짜,년도 모두표시
    document.write(today.getDay()+'<br>');

    document.write('오늘의 요일은 ');
    let num = today.getDay();//요일번호를 변수에 담는다.
    switch(num){
      case 0:document.write('일요일');break;
      case 1:document.write('화요일');break;
      case 2:document.write('화요일');break;
      case 3:document.write('목요일');break;
      case 4:document.write('금요일');break;
      case 5:document.write('토요일');break;
      default:document.write('토요일');break;
    }
    document.write('입니다.');



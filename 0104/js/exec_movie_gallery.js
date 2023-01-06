let n = 1;
const img = document.querySelectorAll('.lnb > li');
const left = document.querySelector('i.fa-angle-left');
const right = document.querySelector('i.fa-angle-right');

document.getElementById('paging').innerHTML = n + ' / 10';

img.forEach((e, index) => {
  e.onclick=()=>{
    n = index + 1;

    document.getElementById('paging').innerHTML = n + ' / 10';
    document.getElementById('poster').src='./img/movie'+ n +'.jpg';
  }
});

left.addEventListener('click',function(){
  if(n == 1){
    n = 10;
  }else{
    n--;
  }
  // console.log(n);
  document.getElementById('paging').innerHTML = n + '/ 10';
  document.getElementById('poster').src='./img/movie'+ n +'.jpg';
});

right.addEventListener('click',function(){
  if(n == 10){
    n = 1;
  }else{
    n++;
  }
  console.log(n);
  document.getElementById('paging').innerHTML = n + '/ 10';
  document.getElementById('poster').src = './img/movie' + n + '.jpg';
});
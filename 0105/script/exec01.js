const slide = document.querySelector('.slide');
const slide_img = document.querySelectorAll('li');
const left_btn = document.getElementById('left_btn');
const right_btn = document.getElementById('right_btn');

const img_n = slide_img.length;
// console.log(img_n);

const img_w = 100;//li태그의 너비
const m = 0;
const s_count = 1;//한페이지당 1개만

let count = 0;

slide.style.width=(img_w+m)*img_n-m+'%';

function auto_slide(n){
  slide.style.width = (img_w+m)*- n + '%';
  count = n;
  console.log(slide.style.left);
  console.log(count);
}

left_btn.addEventListener('click', function(){
  if(count > 0){
    auto_slide(count-1);
  }else{
    auto_slide(img_n-s_count);
  }
  clearInterval(Timer);
});

right_btn.addEventListener('click',function(){
  if(count < img_n-s_count){
    auto_slide(count+1);
  }else{
    auto_slide(0);
  }
  clearInterval(Timer);
});

let Timer = setInterval(function(){
  if(count<img_n-s_count){
    auto_slide(count+1);
  }else{
    auto_slide(0);
  }
},4000);

left_btn.addEventListener('mouseout',function(){
  Timer = setInterval(function(){
    if(count < img_n-s_count){
      auto_slide(count+1);
    }else{
      auto_slide(0);
    }
    
  },4000);
});

right_btn.addEventListener('mouseout',function(){
  Timer = setInterval(function(){
    if(count<img_n-s_count){
      auto_slide(count+1);
    }else{
      auto_slide(0);
    }
  },4000);
});

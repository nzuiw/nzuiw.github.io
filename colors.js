// 파일로 만들기
// 새로운 파일이 와도 colors.js 파일을 추가하면 되는 것
// 1 모든 웹페이지에 동시에 반영 가능
// 2 유지보수에 용이해짐
// 3 캐쉬 네트워크트래픽 절약 등


var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i=0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i + 1;
    // }
    $('a').css('color', color);
    // 이 웹페이지의 모든 a 태그를 jQuery로 제어하겠다
  }
}

var Body = {
  setColor:function(color){
    $('body').css('color', color);
    //document.querySelector('body').style.color = color;
  }, //함수이면서 객체 소속 = 메소드
  //다큐멘트 = 객체, 쿼리셋컬러 = 함수이면서 객체 소속 = 메소드
  setBackgroundColor:function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}


function nightDayHandler(self){
  function BodySetColor(color){
    document.querySelector('body').style.color = color;
  }
  function BodySetBackgroundColor(color){
    document.querySelector('body').style.backgroundColor = color;
  }


  var target = document.querySelector('body');
  if(self.value == 'night'){  //this는 input버튼 가르키는게 아니라 전역변수 되어버림
    Body.setBackgroundColor('black');
    Body.setColor('white');
    Links.setColor('yellow');
    self.value = 'day';

  }
  else{
    Body.setBackgroundColor('#99b3ff');
    Body.setColor('black');
    Links.setColor('blue');
    self.value = 'night';
  }
}

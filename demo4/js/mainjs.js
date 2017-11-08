$(function(){
  var clickNum=1;
  $('.box').children().click(function(){
    if (clickNum%2==0) {
      $('.out-front').css({transform:'translateZ(100px)'});
      $('.out-back').css({transform:'translateZ(-100px) rotateY(180deg)'});
      $('.out-left').css({transform:'translateX(-100px) rotateY(-90deg)'});
      $('.out-right').css({transform:'translateX(100px) rotateY(90deg)'});
      $('.out-top').css({transform:'translateY(-100px) rotateX(90deg)'});
      $('.out-bottom').css({transform:'translateY(100px) rotateX(-90deg)'});
    }else{
      $('.out-front').css({transform:'translateZ(200px)'});
      $('.out-back').css({transform:'translateZ(-200px) rotateY(180deg)'});
      $('.out-left').css({transform:'translateX(-200px) rotateY(-90deg)'});
      $('.out-right').css({transform:'translateX(200px) rotateY(90deg)'});
      $('.out-top').css({transform:'translateY(-200px) rotateX(90deg)'});
      $('.out-bottom').css({transform:'translateY(200px) rotateX(-90deg)'});
    }
    clickNum++;
  });
      var RotateY = 0;
      var RotateX = 0;

      $('.box').children().mouseenter(function () {   //box 的所有子元素
        $(this).css({cursor: 'pointer'});
      });

      var flag = false;
      var old_x = 0;
      var old_y = 0;
      document.onmousedown = function (e) {
        flag = true;
        old_x = e.pageX;
        old_y = e.pageY;
        //console.log(old_x, old_y);
        /*原本所处的位置*/
      }
      document.onmouseup = function () {
        flag = false;
        //鼠标抬起时结束
      };
      document.onmousemove = function (e) {
        if (flag) {
          var _x = e.pageX - old_x;
          var _y = e.pageY - old_y;
          /*新位置减去老位置*/
          console.log(_x, _y);
          RotateY += _x / 100;
          RotateX += -(_y / 100);
          $('.box').css({
            transition: 'linear',
            transform: 'rotateX(' +RotateX + 'deg) rotateY(' +RotateY + 'deg)'
          });
        }
      };


    })
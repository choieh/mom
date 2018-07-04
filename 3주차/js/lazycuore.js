$(document).ready(function(){

  var nowIdx = 0;

  setInterval(function(){

      if(nowIdx==2){
        nowIdx=0;
      }else{
        nowIdx++;
      }

      $("section>.restaurant>.shop_detail>.slide_wrap>.slide-container>.slides").stop().animate({
        "left": -100*nowIdx+"%"
      });

  },2000);

  $("section>.restaurant>.shop_detail>.slide_wrap>.left>a").on("click",function(evt){
            if(nowIdx==0){
              nowIdx=2;
            }else{
              nowIdx--;
            }

        $("section>.restaurant>.shop_detail>.slide_wrap>.slide-container>.slides").stop().animate({
          "left": 100*nowIdx+"%"
        });

        evt.preventDefault();
  });

  $("section>.restaurant>.shop_detail>.slide_wrap>.right>a").on("click",function(evt){
            if(nowIdx==2){
              nowIdx=0;
            }else{
              nowIdx++;
            }

        $("section>.restaurant>.shop_detail>.slide_wrap>.slide-container>.slides").stop().animate({
          "left": -100*nowIdx+"%"
        });
        evt.preventDefault();
  });

});

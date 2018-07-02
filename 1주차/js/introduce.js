$(document).ready(function(){

    /*스크롤시 메뉴 보이게하기*/
    $("window").scroll(function(){

        var scroll_text = $("section>.main>.total>.text");


        if($(this).scrollTop()>=0){
          console.log($(this).scrollTop());
            scroll_text.addClass("shown");

        }else{
            scroll_text.removeClass("shown");
        }

    });


});

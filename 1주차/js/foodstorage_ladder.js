
$(document).ready(function(){
    
    /*리사이즈 될때마다 페이지 리로드*/
    $(window).resize(function(){location.reload();});
    
    $("section>.ladder>.salt_img>ul>li").mouseover(function(evt){
        
        evt.preventDefault();
        
        var nowIdx = $("section>.ladder>.salt_img>ul>li").index(this);
        
        if(nowIdx == 0){
            /*히말라야*/ 
            $("section>.ladder>.ladder_text>ul>.himalaya").css({
                "background-color":"#a0344e",
                "color" : "#fff"
            
            });
            
        }else if(nowIdx == 1){
            /*말돈*/  
            $("section>.ladder>.ladder_text>ul>.maldon").css({
                "background-color":"#d7909b",
                "color" : "#000"
            
            });
        }else{
            /*플뢰르*/ 
            $("section>.ladder>.ladder_text>ul>.fleur").css({
                "background-color":"#ddd4d3",
                "color" : "#000"
            
            });
        }
        
        evt.preventDefault();
        
        
    });
    
    $("section>.ladder>.salt_img>ul>li").mouseout(function(evt){
        
        
        
        $("section>.ladder>.ladder_text>ul>li").css({
//            "background-color":"#ddd4d3",
            "background-color":"#fff",
            "color" : "#000"
        });
        
        
        evt.preventDefault();
         
        
        
    });
    
    
    
    
    /*ladder_text_m*/
function ladder_text_mobile(){
         
        $("section>.ladder>.salt_img>ul>li>a").on("click",function(evt){
        
            evt.preventDefault();
        
//		$(this).next().toggle();
        
            $(this).next().slideUp();
            
            if(!$(this).next().is(":visible"))
            {
                $(this).next().slideDown();
            }

        });


}
    
    var window_width = $(window).width();
    
    if(window_width <= 796){
        
        ladder_text_mobile();
    }
    
    
    
});

















timer();
var current=0;
var $interval;

function timer(){
  var $interval=setInterval(function(){slide()},3000);                        
}

function slide(){
  $(".hufs_link").animate({left:"-=187px"},1000,function(){
    $(this).css({"left":0});
    $(".hufs_link").append( $(".hufs").children("li").eq(0) );
  });    
  current++;
  if(current==5)current=0;
}    
// 导航
var mainTopArr=new Array();
$(".inforcenter h3").each(function(index){
  var top = $(this).offset().top;
  mainTopArr.push(top);
   var text=$(this).find("span").text();
    if(index==0){
      $(".schoolflex ul").append('<li class="on">'+text+'</li>')
    }else{
      $(".schoolflex ul").append('<li>'+text+'</li>')
    }
})
function fllexnav(obj){
  function autowh(){
      var scroll_top = $(window).scrollTop();
      var h=$(".schoolflex").height()/2;
      var k;
        var left=($(window).width())/2  +250;
        if($(window).width()<=1200){
          left=850;
        }
        if(scroll_top <=mainTopArr[0]-100) {
          $('.schoolflex').fadeOut()
          } else {
              $('.schoolflex').fadeIn()
              $('.schoolflex').css({'marginTop':-h+"px","left": left + 'px'})
          };
          for(var i=0;i<mainTopArr.length;i++){ if(scroll_top>=mainTopArr[i]){  k=i; }}
          $(".schoolflex ul li").eq(k).addClass("on").siblings().removeClass("on");
  }
  autowh()
  $(window).resize(function() {  autowh();});
  $(window).scroll(function() { autowh(); });
  obj.on('click',function(){
      var i=$(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      $("body,html").animate({scrollTop:mainTopArr[i]},300);
  })
  $(".schoolflex .top").click(function(){
      $("body,html").animate({scrollTop:mainTopArr[0]},400);
  })
}
if($(".schoolflex").size()>=1){ fllexnav($(".schoolflex ul li")) }
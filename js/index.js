  // 切换的公共类名
  $(".swichbox  .swichlab  a").mouseenter(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(this).parents(".swichbox").find(".swichitem .item").eq($(this).index()).show().siblings().hide();
})
  // 切换的公共类名
$(".switchboxck  .switchlab  a").click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    $(this).parents(".switchboxck").find(".switchitem .item").eq($(this).index()).show().siblings().hide();
})

// 首页轮播
if($(".Imai1-1-1 .lunbox .bd li").size()>=1){
  jQuery(".Imai1-1-1 .lunbox").slide({
          mainCell: ".bd ul",
          titCell:".hd ul",
          effect:'leftLoop',
          autoPlay: true,
          trigger: 'mouseover',
          easing: 'swing', interTime:"6000",
          mouseOverStop: 'true',
          pnLoop: 'true',
          autoPage:true,
        
   });
};
if($(".Imai1-1-2 .lunbox .bd li").size()>=1){
  $(".Imai1-1-2 .lunbox").each(function(index){
   if($(this).find(".bd li").size()>=1){
     var name="lunbox"+index;
    $(this).addClass(name)
    jQuery(".Imai1-1-2 .lunbox"+index).slide({
        mainCell:".bd ul",
        titCell:".hd ul",
        effect:'leftLoop',
        trigger: 'mouseover',
        easing: 'swing', 
        mouseOverStop: 'true',
        pnLoop: 'true',
        autoPage:true,
        startFun:function(i,c){
          $('.Imai1-1-2 .lunbox'+index).find(".labbox .sp1").text(i+1)
          $('.Imai1-1-2 .lunbox'+index).find(".labbox .sp2").text(c)
        }
    });
   }
  })
};
layui.use(['element','form'], function(){
  var headernav = layui.element; //  导航
  var form= layui.form; //  form
  form.on('select(selectschool)', function(data){
    layui.layer.msg(data.value);//得到被选中的值学校的值
  });  
});
// 学校
$(".Imai2 .warpitem .labbt li").click(function(){
  $(this).addClass("on").siblings().removeClass("on")
  $(this).parents(".item").find(".scroll .lis").eq($(this).index()).show().siblings().hide()
})

  // TAB
  function tabhover(e, f) {
    e.mouseenter(function() {
        $(this).addClass('on').siblings().removeClass('on');
        if (f) {
            f.hide().eq($(this).index()).show();
        }
    })
} 
tabhover($(".Imai6  ul li"))

// 导航
function fllexnav(obj){
  var mainTopArr=new Array();
  $(".indexcommont .Imaibox").each(function(){
    var top = $(this).offset().top;
    mainTopArr.push(top);
  })
  function autowh(){
      var scroll_top = $(window).scrollTop();
      var h=$(".fellnav").height()/2;
      var k;
        var left=($(window).width()-1200)/2  -110;
        if(scroll_top <=mainTopArr[0]-100) {
          $('.fellnav').fadeOut()
          } else {
              $('.fellnav').fadeIn()
              $('.fellnav').css({'marginTop':-h+"px","right": left + 'px'})
          };
          for(var i=0;i<mainTopArr.length;i++){ if(scroll_top>=mainTopArr[i]){  k=i; }}
          $(".fellnav ul li").eq(k).addClass("on").siblings().removeClass("on");
  }
  autowh()
  $(window).resize(function() {  autowh();});
  $(window).scroll(function() { autowh(); });
  obj.on('click',function(){
      var nav_clas = $(this).attr('data-id');
      var i=$(this).index();
      $(this).addClass("on").siblings().removeClass("on");
      var nav_num = document.getElementById(nav_clas).offsetTop;
      console.log(nav_num)
      $("body,html").animate({scrollTop:nav_num},300);
  })
  $(".fellnav .top").click(function(){
      $("body,html").animate({scrollTop:0},400);
  })
}
if($(".fellnav ul li").size()>=1){ fllexnav($(".fellnav ul li")) }
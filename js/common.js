//页面左右划动
function HomeScroll(a, b) {
  function g() {
      var g = $(window).scrollLeft()
          , h = $(window).scrollTop()
          , i = $(document).height()
          , j = $(window).height()
          , k = c.height()
          , l = d.height()
          , m = k > l ? f : e
          , n = k > l ? d : c
          , o = k > l ? c.offset().left + c.outerWidth(!0) - g : d.offset().left - c.outerWidth(!0) - g
          , p = k > l ? l : k
          , q = k > l ? k : l
          , r = parseInt(q - j) - parseInt(p - j);
      $(a + "," + b).removeAttr("style"),
          j > i || p > q || m > h || p - j + m >= h ? n.removeAttr("style") : j > p && h - m >= r || p > j && h - m >= q - j ? n.attr("style", "margin-top:" + r + "px;") : n.attr("style", "_margin-top:" + (h - m) + "px;position:fixed;left:" + o + "px;" + (j > p ? "top" : "bottom") + ":0;")
  }
  if ($(a).length > 0 && $(b).length > 0) {
      var c = $(a)
          , d = $(b)
          , e = c.offset().top
          , f = d.offset().top;
      $(window).resize(g).scroll(g).trigger("resize")
  }
}
HomeScroll(".Cont_L", ".Cont_R");

//声明插件
layui.use(['element','form'], function(){
  var headernav = layui.element; //  导航
  var form = layui.form; //  form
  form.on('select(schoolstel)', function(data){
    layui.layer.msg(data.value);//得到学校首页的切换学校
  }); 
});
  // TAB
  function tabhover(e, f) {
    e.mouseenter(function() {
        $(this).addClass('on').siblings().removeClass('on');
        if (f) {
            f.hide().eq($(this).index()).show();
        }
    })
}  
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

// 切换收藏
function Collection(obj){
  if($(obj).hasClass("on")){
    $(obj).find("span").text("收藏");
    $(obj).removeClass("on");
  }else{
    $(obj).find("span").text("取消收藏");
    $(obj).addClass("on");
  }
   
}
// 点击到顶部
$(".Feedbackfixed .top").click(function(){
  $("body,html").animate({scrollTop:0},400);
})
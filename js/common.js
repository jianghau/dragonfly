
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
  form.on('select(selectschool)', function(data){
    layui.layer.msg(data.value);//得到被选中的值学校的值 首页
  }); 
  form.on('select(selectaddress)', function(data){
    layui.layer.msg('切换的城市'+data.value);//得到地址定位
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
tabhover($(".Imai6  ul li"))   //首页的排行榜
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

$(".schoolht .title .topic").click(function(){
  var id=$(this).attr("data-id");
  var nav_num = document.getElementById(id).offsetTop;
  $("body,html").animate({scrollTop:nav_num},400);
})


// 详情
//点击跳转大图
$(' .inforcenter p > img ').click(function() {
	var imgurl = $(this).attr('src');
	if ($("#abigimg").length == 0) {
		var a = document.createElement("a");
		a.setAttribute("id", "abigimg");
		a.setAttribute("href", imgurl);
		a.setAttribute("target", "_blank");
		document.body.appendChild(a);
	} else {
		$("#abigimg").attr("href", imgurl);
	}
	document.getElementById("abigimg").click();
});


// 筛选
function screenlist(){
  var h1=$(".screenlist .list").eq(0).height();
  var h2=$(".screenlist").height();
  $(".screenlist .item").css("height",h1+"px");
  $(".screenlist .morelis").click(function(){
    if($(this).hasClass("on")){
      $(this).find("span").text("展开");
      $(this).removeClass("on");
      $(".screenlist .item").stop().animate({"height":h1+"px"},300)
    }else{
      $(this).addClass("on");
      $(this).find("span").text("收起");
      $(".screenlist .item").stop().animate({"height":h2+"px"},300)

    }
  })
  // 切换筛选
  var tabli = $(".screenlist .list");
   var screenrecordul = $(".screenrecord ul");
   for (var i = 0; i < tabli.length; i++) {
    tabli[i].mark=false;	//给每一行的dl标签添加一条属性，用于对应下面的dd标签。我们约定如果这个属性的值为true表示对应的标签没有创建。如果值为false表示对应的标签已经创建了
      select(i);
      console.log(tabli)
    }
		function select(n) {
      var lisa = tabli.eq(n).find(".lis a");
      var html=null;	
			for (var i = 0; i < lisa.length; i++) {
				lisa[i].onclick = function () {
          var parent=this.parentNode;
          if($(this).hasClass("first")){
            $(this).parent(".lis").find("a").removeClass("on");
            html.remove();
            parent.mark=false;
            return false;
          }
         
          $(this).addClass("on").siblings().removeClass("on");
          if(!parent.mark){	
            html=document.createElement('li');
						html.innerHTML=this.innerHTML;
            screenrecordul.append(html);
						parent.mark=true;
					}else{
            html.innerHTML=this.innerHTML;
					}
					var span=document.createElement('span');
					var This=this;
					span.onclick=function(){
						html.remove();
						This.className='';
						parent.mark=false;
					};
          html.append(span);
				};
			}
		}
}
screenlist();
// 竞赛轮播
if($(".competitionlab1  .lunbox .bd li").size()>=1){
  jQuery(".competitionlab1  .lunbox").slide({
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

// 手册轮播
if($(".manualtop_R .lunbox .bd li").size()>=1){
  jQuery(".manualtop_R .lunbox").slide({
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

// 换一换
var Changeit_i=0;
$(".Changeit .hyh").click(function(){
  var i=$(this).parents(".Changeit").find(".itemhyh").size();
  Changeit_i++;
  if(Changeit_i>=i){  Changeit_i=0; }
  $(this).parents(".Changeit").find(".itemhyh").eq(Changeit_i).show().siblings().hide();
})

// 分享右侧的定位
$(window).resize(function() {  flex_share();});
$(window).scroll(function() { flex_share(); });
function flex_share(){
  var left=($(window).width()-1200)/2-70;
  var top=$(".commont").offset().top+50;
  if($(window).width()<=1300){  left=0  }
  if($(window).scrollTop() <=top-50){  $(".flex_share").fadeOut()}else{  $(".flex_share").fadeIn() }
  $(".flex_share").css({"left":left+"px","top":top+"px"})
}
flex_share();

// 手册内页左侧树形菜单
$(".manuallab ul li .bt_a").click(function(){
  if($(this).hasClass("on")){
  
  }else{
    $(this).parents("li").addClass("on");
    $(this).parents("li").siblings().removeClass("on");
  }
})

$(function () {
  //查看更多小区简介
  if ($('.housinglis .text_more').size() >= 1) {
      var txt_h = 192;
      var txt_h1 = $('.housinglis .text_more').height();
      var top_ = $(".housinglis .text_more ").offset().top;
      console.log(txt_h1)
      if (txt_h1 > txt_h) {
          $('.housinglis .text_more').addClass('show_js');
          $('.housinglis .text_more').css({height: txt_h + "px", "overflow": "hidden", })
          $('.housinglis .text_more .morelink').show();
          $('.housinglis .text_more .morelink').click(function () {
              if ($('.housinglis .text_more').hasClass('show_js')) {
                  $('.housinglis .text_more').removeClass('show_js');
                  $('.housinglis .text_more .morelink').html('收起更多>> ');
                  $('.housinglis .text_more').css({height: "auto"});
              } else {
                  $('.housinglis .text_more').addClass('show_js');
                  $('.housinglis .text_more .morelink').html('展开更多>> ');
                  $('.housinglis .text_more').css({height: txt_h + "px"});
                  $("body,html").animate({scrollTop: top_ - 40 + "px"}, 0);
              }
          })
      }
  }
});
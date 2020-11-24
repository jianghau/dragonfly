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
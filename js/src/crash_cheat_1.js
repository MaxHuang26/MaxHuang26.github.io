<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 //添加全局变量x，用于存储第一次页面被隐藏的时候使用的表情组别。
 var x=null;
 //用函数返回随机数1,2,3。
  function myRandom() {
 var rand = Math.random();
 if (rand < .33) return 1;
 if (.33<rand < .66) return 2;
 if (rand > .67) return 3;
}
 document.addEventListener('visibilitychange', function () {
	 //第一次页面被隐藏的时候，addEventListener监听到页面可见性改变，调用函数
	 //页面被隐藏的时候使用的表情组别赋给局部变量b。
	 var b = myRandom();
     //b负责页面被隐藏的时候显示的表情。	 
	 if(b==1){
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
	 }
	  else if (b==2){
		      if (document.hidden) {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '(งᵒ̌皿ᵒ̌)ง⁼³₌₃ 别跑呀！！ ~';
         clearTimeout(titleTime);
     }   
	 }
	 else if (b==3){
		      if (document.hidden) {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '(/∇＼*) 我藏好啦 ~';
         clearTimeout(titleTime);
     }   
	 }	
	 //如果x的值为null，就把b的值给x，
	 //x负责的是用户返回页面的时候调用之前使用的组别表情，完成后半部分的动作。
	 if(x==null){
	 x=b;}	
	  
	 	 if(x==1){
     if (!document.hidden) {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 噫又好了~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
		 
         //完成后半部分动作后，x再次置null，等待接受下一次b给的值。
		 x=null;
     }
	 }

	  else if (x==2){
		  if (!document.hidden) {
		      $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '((٩(´͈ᗨ`͈)۶)) 回来啦~抱一个';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
		 x=null;

     }
   
	 }
	 else if (x==3){
		 if (!document.hidden) {
 $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title =  '(*๓´╰╯`๓) 嗨呀~被找到啦';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
		 x=null;
     }
     
	 }
	
 });

	  
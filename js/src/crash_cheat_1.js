<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 function myRandom() {
 var rand = Math.random();
 if (rand < .33) return 1;
 if (.33<rand < .66) return 2;
 if (rand > .67) return 3;
}
	  //var a = parseInt(Math.random()*100);
var x;
 document.addEventListener('visibilitychange', function () {
	 var b = myRandom();

	 if(x==null){
	 x=b;}
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
	 
	 
	 
	 	 if(x==1){
     if (!document.hidden) {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 噫又好了~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
 
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
	 
	 }
	
 });

	  
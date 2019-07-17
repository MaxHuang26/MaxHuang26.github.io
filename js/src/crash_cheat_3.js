<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 function myRandom() {
 var rand = Math.random();
 if (rand < .5) return 1;
 if (rand < .8) return 2;
 if (rand < .95) return 3;
}
 document.addEventListener('visibilitychange', function () {
	 while(true){
		 int i = myRandom();
	 switch{
		 case(i==1){
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '(/∇＼*) 我藏好啦 ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title =  '(*๓´╰╯`๓) 嗨呀~被找到啦';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
		 }break;
		 		 case(i==2){
          if (document.hidden) {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '╭(°A°`)╮ 页面崩溃啦 ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 噫又好了~';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
		 }break;
		 		 case(i==3){
          if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/TEP.ico");
         document.title = '(งᵒ̌皿ᵒ̌)ง⁼³₌₃ 别跑呀！！ ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = '((٩(´͈ᗨ`͈)۶)) 回来啦~抱一个';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
		 }break;
	 }
	 }
 });
<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
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
 });
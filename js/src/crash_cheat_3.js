<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon-192x192.png");
         document.title = '(/∇＼*) 我藏好啦 ~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/MaxHuang26.github.io/images/favicon-192x192.png");
         document.title = '(*๓´╰╯`๓) 嗨呀~被找到啦' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
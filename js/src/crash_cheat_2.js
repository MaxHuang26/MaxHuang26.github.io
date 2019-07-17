<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
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
 });
<script src="http://code.jquery.com/jquery-1.7.2.min.js"></script>

        var OriginTitile = document.title;
		var titleTime = null;
		var titleIndex = 0;
		title = [{
			blur: "(●—●) 哎呦，崩溃啦！",
			focus: "o(≧∇≦o) 啊咧，又好了……"
		}, {
			blur: "(つェ⊂) 看不到我～",
			focus: "(*´∇｀*) 被发现啦～"
		}, {
			blur: "(>_<) 我藏好了哦",
			focus: "(*´∇｀*) 被发现啦～"
		}];
<script type="text/javascript">
	$(document).on("visibilitychange", function() {
		if (document.hidden) {
			titleIndex = Math.floor(Math.random() * 3);
			document.title = title[titleIndex].blur;
			if (titleTime) {
				clearTimeout(titleTime);
				titleTime = null;
			}
		}
		else {
			document.title = title[titleIndex].focus;
			titleTime = setTimeout(function() {
				document.title = OriginTitile;
			}, 3000);
		}
	});
</script>
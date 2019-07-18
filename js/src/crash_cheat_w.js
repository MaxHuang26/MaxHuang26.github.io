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
		},
		{
			blur:  "(งᵒ̌皿ᵒ̌)ง⁼³₌₃ 别跑呀！！ ~",
			focus: "((٩(´͈ᗨ`͈)۶)) 回来啦~抱一个"
		}
		];

	document.onvisibilitychange= function() {
		if (document.hidden) {
			titleIndex = Math.floor(Math.random() * 4);
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
		}

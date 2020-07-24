$(function() {
	var Android = false;
	if (/(Android)/i.test(navigator.userAgent)) Android = true;
	var can = document.getElementById("videoCanvas");
	var _video = document.getElementById("video");
	can.height = $(window).height();
	var player;
	var tsVideourl = "video/video.ts?v=2";
	player = new JSMpeg.Player(tsVideourl, {
		canvas: can,
		loop: false,
		autoplay: false
	});
	var $videoBtn = $("#videoBtn");
	var $load=$(".loader_box"),loadflag=true;
	
	function tsListenerEnd() {
		var playVideoTimeIndex = setInterval(function() {
			if(player.getCurrentTime()>0 && loadflag){
				loadflag=false;
				$load.fadeOut();
			}
			if (player.getCurrentTime() >= 14) {
				$(".musicicon").hide();
				$(".musicicin").show();
				clearInterval(playVideoTimeIndex);
				$(".second-page").hide();
				$(".second-page").remove();
				$(".third-page").show();
				pause();
				player.setCurrentTime(0);
					BGMT.play()
				
			}
		}, 1000);

	}

	function play() {
		if (Android) {
			player.play();
			tsListenerEnd();
		} else {
			_video.play();
		}
		$videoBtn.fadeOut();
	}

	function pause() {
		if (Android) {
			player.pause();
		} else {
			_video.pause();
		}
		$videoBtn.fadeIn();
	}
	$(".btn1").click(function() {
		//	进入页面判断系统
			if (Android) {
				$('#video').remove();
				play();
			} else {
				$('#videoCanvas').remove();
				_video.play();
				// document.addEventListener("WeixinJSBridgeReady", function() {
				// 	_video.pause();
				// 	_video.play();
				// 	_video.addEventListener("timeupdate",function(){
				// 		var timeDisplay;
				// 		//用秒数来显示当前播放进度
				// 		timeDisplay = _video.currentTime;
				// 		if(timeDisplay>0){
							
				// 		}				
				// 	},false)
				// });
			}
	});
	//	非安卓手机播放结束判断
		if (!Android) {
	
			
			_video.addEventListener("ended", function() {
				$(".musicicon").hide();
				$(".musicicin").show();
				$(".second-page").hide();
				$(".second-page").remove();
				$(".third-page").show();
				pause();
					BGMT.play()
			});
		}
	//	跳过视频
		$(".skip-btn").click(function(){
			pause();
		})
});

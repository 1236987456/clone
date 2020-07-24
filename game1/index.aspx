<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="WAdmin.home.game1.index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="x-ua-compatible" content="IE=edge,chrome=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="apple-touch-fullscreen" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no">
<meta name="viewport" content="width=640,target-densitydpi=320,user-scalable=no">
<title>惠氏玛特纳：名画出走悬赏令</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />











</head>


    
<body>
<div class="baol">
  	<div class="loader_box">
	  <div class="loader">
		<div class="progress-bar">
		  <div class="progress-stripes"></div>
		</div>
	  </div>
	  <div class="percentage">0%</div>
	  <div style="margin-top: 20px;">名画出走悬赏令</div>
	  <div>加载中...</div>
	  <div class="loader_text red" style="display:none;">Loading...</div>
</div>
</div>
<script type="application/javascript">
    var demoImgArray = ["img/bg1.jpg", "img/bg2.jpg", "img/bg3.jpg", "img/1.png", "img/2.png", "img/3.png", "img/4.png", "img/5.png", "img/6.png", "img/btn1.png", "img/card_bg.png",
    "img/failbox.png", "img/information.png", "img/load.jpg", "img/logo.png", "img/music.png", "img/rank.png", "img/round1.png", "img/round2.png", "img/round3.png", "img/round4.png", "img/round5.png",
    "img/skip-btn.png", "img/start-btn.png", "img/suc.png", "img/tip.png", "img/explain.png", "img/self.png"];
</script>
<audio id="bgm" class="media-audio" src="audio/music1.mp3" autoplay="autoplay" preload="auto" loop="loop"></audio>
<audio id="bgm2" class="media-audio" src="audio/music2.mp3"  preload="auto" loop="loop"></audio>
<div class="wrapper">
  <!--音乐-->
  <div class="musicicon musicplay on"></div>
  <div class="musicicin musicplay on"></div>
  <!-- 首页 -->
  <div class="first-page">
	  <div class="logo"></div>
	  <div class="btn1"></div>
	  <div class="explain-btn ex2"></div>
  </div>
  <!-- 视频页 -->
  <div class="second-page">
	  <div class="video-box" id="videoBox" ontouchmove="return false;">
	  	<video id="video" class="player" style="width:100%;height: 100%;" preload="auto" playsinline="true" webkit-playsinline="true" src="video/video.mp4"></video>
	  	<canvas class="video_canvas" id="videoCanvas"></canvas>
	  </div>
	  <div class="skip-btn"></div>
	  <!-- 倒计时 -->
	  <div class="overtime"></div>
  </div>
  <!-- 过渡页 -->
  <div class="third-page">
	  <div class="logo"></div>
	  <div class="start-btn"></div>
	  <div class="explain-btn ex2"></div>
  </div>
  <!-- 第一关 -->
  <div class="rounds">
	  <div class="round1">
		  <div class="item_list lv1">
		  	<div class="item item0" data-type="">
		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
		  	</div>
		  	<div class="item item1" data-type="">
		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
		  	</div>
		  	<div class="item item2" data-type="">
		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
		  	</div>
		  	<div class="item item3" data-type="">
		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
		  	</div>
		  </div>
		  <div class="times time1"><span></span>S</div>
		  <div class="spite"></div>
	  </div>
	  <!-- 第二关 -->
	  <div class="round2">
	  		  <div class="item_list lv2">
	  		  	<div class="item item0" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
	  		  	</div>
	  		  	<div class="item item1" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
	  		  	</div>
	  		  	<div class="item item2" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
	  		  	</div>
	  		  	<div class="item item3" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
	  		  	</div>
				<div class="item item4" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item5" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
	  		  </div>
	  		  <div class="times time2"><span></span>S</div>
			  <div class="spite"></div>
	  </div>
	  <!-- 第三关 -->
	  <div class="round3">
	  		  <div class="item_list lv3">
	  		  	<div class="item item0" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
	  		  	</div>
	  		  	<div class="item item1" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
	  		  	</div>
	  		  	<div class="item item2" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
	  		  	</div>
	  		  	<div class="item item3" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
	  		  	</div>
	  			<div class="item item4" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item5" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
				<div class="item item6" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item7" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item8" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item9" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item10" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item11" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
	  		  </div>
	  		  <div class="times time3"><span></span>S</div>
			  <div class="spite"></div>
	  </div>
	  <!-- 第四关 -->
	  <div class="round4">
	  		  <div class="item_list lv4">
	  		  	<div class="item item0" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
	  		  	</div>
	  		  	<div class="item item1" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
	  		  	</div>
	  		  	<div class="item item2" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
	  		  	</div>
	  		  	<div class="item item3" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
	  		  	</div>
	  			<div class="item item4" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item5" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item6" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item7" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item8" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item9" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
	  			<div class="item item10" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item11" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
				<div class="item item12" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item13" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item14" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item15" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
			   </div>
	  		<div class="times time4"><span></span>S</div>
			<div class="spite"></div>
	  </div>
	  <!-- 第五关 -->
	  <div class="round5">
	  		  <div class="item_list lv5">
	  		  	<div class="item item0" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
	  		  	</div>
	  		  	<div class="item item1" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/1.png')"></div>
	  		  	</div>
	  		  	<div class="item item2" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
	  		  	</div>
	  		  	<div class="item item3" data-type="">
	  		  		<div class="card_front" style="background-image:url('img/2.png')"></div>
	  		  	</div>
	  			<div class="item item4" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item5" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item6" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item7" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item8" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item9" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item10" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item11" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item12" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item13" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item14" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
	  			<div class="item item15" data-type="">
	  				<div class="card_front" style="background-image:url('img/3.png')"></div>
	  			</div>
				<div class="item item16" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item17" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item18" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
				<div class="item item19" data-type="">
					<div class="card_front" style="background-image:url('img/3.png')"></div>
				</div>
	  		</div>
	  		<div class="times time5"><span></span>S</div>
			<div class="spite"></div>
	  </div>
	  <!-- 失败页面 -->
	  <div class="failure">
		  <div class="failbox">
			  <!-- 成绩 -->
				<div class="fail-time">您在<span id="ftbox"></span><span>秒</span>里收集了</div>
				<div class="fail-result"><span id="frbox"></span>个</div>
		  </div>
		  <div class="ling-btn"></div>
	  </div>
	  <!-- 成功页面 -->
	  <div class="success">
		  <div class="suc-in">
			  <div class="result-time">成功寻回出走的世界名画 你在<span id="suc-time">85</span><span>秒</span>里共收集 </div>
			  <div class="result-sum"><span id="suc-sum">58</span>个</div>
			  <div class="deng-btn"></div>
		  </div>
	  </div>
	  <!-- 填写信息 -->
	  <div class="infor">
		  <div class="inforbox">
			  <div class="writebox">
				  <input class="name" type="text" placeholder="您的姓名">
				  <input class="phone" type="number" placeholder="您的电话">
				  <input class="local" type="text" placeholder="请填写详细地址">
				  <div class="dui"></div>
				  <div class="self-btn"></div>
				  <div class="sub-btn"></div>
			  </div>
		  </div>
		  <!-- 条款协议 -->
		  <div class="article">
			  <div class="artibox">
				  <div class="ok-btn"></div>
			  </div>
		  </div>
	  </div>
	  <!-- 排行榜 -->
	  <div class="rank">
		  <div class="rankbox">
			  <div class="rank-list">
				  <ul>
				  	<li>
						<div class="place">1</div>
						
						<div class="nic">包子</div>
						<div class="geshu">58个</div>
					</li>
				  </ul>
			  </div>
			  <!-- 我的排名 -->
			  <div class="myrank">我的排名: <span id="myrank">120</span>名, <span id="mynum">58</span>个</div>
			  <!-- 按钮 -->
			  <div class="explain-btn"></div>
			  <div class="replay-btn"></div>
			  <div class="prize-btn"></div>
		  </div>
		  <!-- 公众号浮层 -->
		  <div class="code">
			  <div class="codebox">
				  <img src="img/code.jpg" >
				  <div class="close"></div>
			  </div>
		  </div>
	  </div>
	  <!-- 提示页 -->
	  <div class="tips">
		  <div class="tipin"><div class="go-btn"></div></div>
	  </div>
  </div>
  <!-- 活动说明 -->
  <div class="explain">
  			  <div class="exin">
  				  <div class="know-btn"></div>
  			  </div>
  </div>
</div>
<script type="application/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="application/javascript" src="js/jquery.loader.js"></script>
<script type="application/javascript" src="js/sortable.js"></script>
<script src="js/rem.js"></script>
<script src="js/ts.js"></script>
<script src="js/index.js?v=14"></script>
<script type="application/javascript" src="js/common.js"></script>
<script type="text/javascript">
    //原理是在微信执行Ready之前，先注册事件，所以放在所有请求的最前面
    document.addEventListener("WeixinJSBridgeReady", function () {
        audioAutoPlay('bgm');//给个全局函数
    }, false);
    function audioAutoPlay(id) {//全局控制播放函数
        var audio = document.getElementById(id),
        play = function () {
            audio.play();
            document.removeEventListener("touchstart", play, false);
        };
        audio.play();
        document.addEventListener("touchstart", play, false);
    }

</script>
<script type="text/javascript">
    function getQuery(name) {
        var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
        if (result == null || result.length < 1) {
            return "";
        }
        return result[1];
    }
    var openid = getQuery("openid");
    //去掉弹窗连接提示
    window.alert = function (name) {
        var iframe = document.createElement("IFRAME");
        iframe.style.display = "none";
        iframe.setAttribute("src", 'data:text/plain,');
        document.documentElement.appendChild(iframe);
        window.frames[0].window.alert(name);
        iframe.parentNode.removeChild(iframe);
    }
	</script>


     <script src="https://res2.wx.qq.com/open/js/jweixin-1.6.0.js" type="text/javascript"></script>      
    <script src="https://www.wegogo.net.cn/share/share2.js" type="text/javascript"></script>  
    <script>
        var sharelink = "https://www.wegogo.net.cn/Q2/home/index.aspx";
        wx.ready(function () {
            // 2. 分享接口
            // 2.1 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareAppMessage({
                title: "惠氏玛特纳：名画出走悬赏令",
                desc: '惠氏玛特纳带你躺赢朋友圈！',
                link: sharelink, //链接
                imgUrl: 'https://www.wegogo.net.cn/Q2/home/images/star.png', //分享图片
                trigger: function (res) {
                    //alert('用户点击发送给朋友');
                },
                success: function (res) {
                    // alert('分享成功');
                    // sharejilv(":朋友");
                },
                cancel: function (res) {
                    //alert('已取消');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
            // 2.2 监听“分享到朋友圈”按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareTimeline({
                title: "惠氏玛特纳：名画出走悬赏令",
                link: sharelink, //链接
                imgUrl: 'https://www.wegogo.net.cn/Q2/home/images/star.png', //分享图片
                trigger: function (res) {
                    //alert('用户点击分享到朋友圈');
                },
                success: function (res) {
                    //alert('分享成功');
                    //sharejilv(":朋友圈");
                },
                cancel: function (res) {
                    //alert('已取消');
                },
                fail: function (res) {
                    alert(JSON.stringify(res));
                }
            });
        })

    </script>
</body>

</html>

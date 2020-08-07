var c_height=$(window).height();
var BGM=$("#bgm")[0];
var BGMT=$("#bgmt")[0];
var isSoundOn=true;
var fen=0;
var xuan;
var sui=parseInt(Math.random()*(90-60)+60);
$(function(){
	document.getElementById("bgm").volume = 0.1;
	//音乐icon & 提示箭头 
	$(".musicicon").click(function(){
		isSoundOn=!isSoundOn;
		isSoundOn?$(".musicicon").addClass("musicplay on"):$(".musicicon").removeClass("musicplay on");
		isSoundOn?BGM.play():BGM.pause();
	})
})

//图片加完后执行
function home_ac(){
	
	$(".wrapper").fadeIn(500);
	//启动首页效果
//	首页
//	规则
	$(".rule").click(function(){
		$(".tan").fadeIn();
	});
	$(".close").click(function(){
		$(".tan").fadeOut();
	});
//	按钮点击
	$(".btn").click(function(){
		$(".lun").fadeIn();
		var mySwiper = new Swiper('.swiper-container1',{	
			autoplay: {
					    delay: 3500,
					    stopOnLastSlide: false,
					    disableOnInteraction: false,
					   },
				slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
   			observer: true,//修改swiper自己或子元素时，自动初始化swiper
　　　　	observeParents: true,//修改swiper的父元素时，自动初始化swiper
		navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
			})
	});
	$(".start").click(function(){
		$(".wrap").fadeIn();
	});
	$(".play").click(function(){
		$(".play").hide();
		var dao=4;
		setTimeout(function(){
			$(".front").hide();
		},300);
		$(".card").addClass("card-flipped");
		var she=setInterval(function(){
			dao--;
			if(dao==1){
				clearInterval(she)
			}
			$(".back").html(dao)
		},1000);
		setTimeout(function(){
				$(".fu").fadeOut();
				start();
				fenshu();
				$(".timein").addClass("yizou");
				setTimeout(function(){
					pause();
					if(fen>19){
						setTimeout(function(){
							$("#gan").html(fen);			
							$("#bai").html(sui);
							$(".suc").fadeIn();
						},1000)		
					}else{
						setTimeout(function(){
							$(".failure").fadeIn();
							$(".timein").removeClass("yizou");
						},1000)				
					}
				},15000)
		},4000)
	});
	
	$(".replay").click(function(){
		$(".failure").hide();
		$(".timein").addClass("yizou");
		fen=0;
		$("#fen").html(fen);
		start();
		$(".timein").addClass("yizou");
		setTimeout(function(){
			pause();
			if(fen>19){
				setTimeout(function(){
					$("#gan").html(fen);
					$("#bai").html(sui);
					$(".suc").fadeIn();
				},1000)	
			}else{
				setTimeout(function(){
					$(".failure").fadeIn();
					$(".timein").removeClass("yizou");
				},1000)	
			}
		},15000)
	})
//		开始游戏
		function start(){
			timer=setInterval(game,400);
			function game(){
				var mark=parseInt(Math.random()*9+1);
				var hou=parseInt(Math.random()*3+1);
				if($(".shu"+mark).hasClass("shang")){
					
				}else{
					$(".shu"+mark).addClass("shang");
					setTimeout(function(){
						$(".shu"+mark).removeClass("shang");
						$(".shu"+mark).attr("src","img/ok"+hou+".png")
					},1800)	
				};
			};
		};
//		结束
		function pause(){
			clearInterval(timer)
		}
//		分数
		

		$("#fen").html(fen);
		function fenshu(){
			$(".shu").click(function(){
				BGMT.play();
				fen=fen+1;
				$("#fen").html(fen);
				xuan=$(this).attr("src");
				if(xuan=="img/ok1.png"){
					$(this).next().attr("src","img/jia1.png");
				}else if(xuan=="img/ok2.png"){
					$(this).next().attr("src","img/jia2.png");
				}else{
					$(this).next().attr("src","img/jia3.png");
				}
				var jj=$(this).data("id");
				$(".jia"+jj).show();
				$(".jia"+jj).next().show();
				setTimeout(function(){
					$(".jia"+jj).hide();
					$(".jia"+jj).next().hide();
				},700);
				$(".shu"+jj).hide();
				setTimeout(function(){
					$(".shu"+jj).show();
				},1500)
			})
		}
}




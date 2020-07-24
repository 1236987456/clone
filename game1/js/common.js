var c_height=$(window).height();
var BGM=$("#bgm")[0];
var BGMT=$("#bgm2")[0];
var isSoundOn=true;
var isSoundin=true;
$(function(){
	document.getElementById("bgm").volume = 0.1;
	//音乐icon & 提示箭头 
	$(".musicicon").click(function(){
		isSoundOn=!isSoundOn;
		isSoundOn?$(".musicicon").addClass("musicplay on"):$(".musicicon").removeClass("musicplay on");
		isSoundOn?BGM.play():BGM.pause();
	})
	$(".musicicin").click(function(){
		isSoundin=!isSoundin;
		isSoundin?$(".musicicin").addClass("musicplay on"):$(".musicicin").removeClass("musicplay on");
		isSoundin?BGMT.play():BGMT.pause();
	})
})

//图片加完后执行
function home_ac(){
	$(".wrapper").show();
	// 视频倒计时
	var overtime=15;
	var over=setInterval(function(){
		overtime--;
		$(".overtime").html(overtime);
		if(overtime==0){
			clearInterval(over)
		}
	},1000);
	clearInterval(over)
	//启动首页效果
	var vv=document.getElementById("vv")
	$(".btn1").click(function(){
		$(".first-page").hide();
		$(".second-page").fadeIn();
		BGM.pause();
		over=setInterval(function(){
			overtime--;
			if(overtime<0){
				overtime=0
			}
			$(".overtime").html(overtime)
		},1000);
	});
	// 跳过视频
	$(".skip-btn").click(function(){
		$(".second-page").hide();
		$(".second-page").remove();
		$(".third-page").show();
		$(".musicicin").show();
		$(".musicicon").hide();
			BGMT.play()
		clearInterval(over)
	});
	// 开始游戏
	$(".start-btn").click(function(){
		$(".rounds").fadeIn();
		$(".musicicon").hide();
	});
	// 点击开始
	$(".go-btn").click(function(){
		rand(n1,arr1);
		$(".tips").fadeOut()
	});
	// 随机方法
	var arr1=[1,1,2,2],arr2=[1,1,2,2,3,3],arr3=[1,1,2,2,3,3,4,4,5,5,6,6],arr4=[1,1,2,2,3,3,4,4,5,5,6,6,2,2,4,4],arr5=[1,1,2,2,3,3,4,4,5,5,6,6,1,1,2,2,3,3,4,4];
	 function method1(arr){
	    for(var i=0,len=arr.length;i<len;i++){
	        var a=parseInt(Math.random()*len);
	        var temp=arr[a];
	        arr[a]=arr[i];
	        arr[i]=temp;
			}
		return arr;
	 }
	 // 关卡数据
	 var round=1;
	 // 所用时间
	 var taketime=0;
	 var grades;
	 // 时间限制
	 var stime1=10,stime2=15,stime3=30,stime4=40,stime5=50;
	 var out1=function(){
		 stime1--;
		 $(".time1 span").html(stime1);
		 if(stime1==0){
			 $(".failure").fadeIn();
			 clearInterval(t1);
			 taketime+=10;
			 $("#ftbox").html(taketime);
			 $("#frbox").html($(".active").length)
		 }
	 }
	 var out2=function(){
	 		 stime2--;
	 		 $(".time2 span").html(stime2);
	 		 if(stime2==0){
	 			 $(".failure").fadeIn();
	 			 clearInterval(t2);
				 taketime+=15;
	 			 $("#ftbox").html(taketime);
	 			 $("#frbox").html($(".active").length)
	 		 }
	 }
	 var out3=function(){
	 		 stime3--;
	 		 $(".time3 span").html(stime3);
	 		 if(stime3==0){
	 			 $(".failure").fadeIn();
	 			 clearInterval(t3);
	 				 taketime+=30;
	 			 $("#ftbox").html(taketime);
	 			 $("#frbox").html($(".active").length)
	 		 }
	 }
	 var out4=function(){
	 		 stime4--;
	 		 $(".time4 span").html(stime4);
	 		 if(stime4==0){
	 			 $(".failure").fadeIn();
	 			 clearInterval(t4);
	 				 taketime+=40;
	 			 $("#ftbox").html(taketime);
	 			 $("#frbox").html($(".active").length)
	 		 }
	 }
	 var out5=function(){
	 		 stime5--;
	 		 $(".time5 span").html(stime5);
	 		 if(stime5==0){
	 			 $(".failure").fadeIn();
	 			 clearInterval(t5);
	 				 taketime+=50;
	 			 $("#ftbox").html(taketime);
	 			 $("#frbox").html($(".active").length)
	 		 }
	 }
	 // 时间设定
	 var time=1000;
	 var t1=setInterval(out1,time);
	 var t2=setInterval(out2,time);
	 var t3=setInterval(out3,time);
	 var t4=setInterval(out4,time);
	 var t5=setInterval(out5,time);
	 clearInterval(t1);
	 clearInterval(t2);
	 clearInterval(t3);
	 clearInterval(t4);
	 clearInterval(t5);
	 // 随机分配加刷新
	 var n1="lv1",n2="lv2",n3="lv3",n4="lv4",n5="lv5";
	 function rand(lv,arr){
		 var types=method1(arr);
		 console.log(types)
		 for(var j=0;j<$("."+ lv +">.item").length;j++){
		 		 $("."+ lv +">.item"+j).data("type",types[j]) 
		 		 $("."+ lv +">.item" + j + ">.card_front").css("background-image","url(img/" + types[j] +".png)");
		 }
		 $("."+ lv +">.item").removeClass("current");
		 $("."+ lv +">.item").removeClass("active");
		 // 判断关卡
		 if(lv=="lv1"){
			 stime1=10;
			 $(".time1 span").html(stime1);
			 t1=setInterval(out1,time);
		 }else if(lv=="lv2"){
			 stime2=15;
			 $(".time2 span").html(stime2);
			 t2=setInterval(out2,time);
		 }else if(lv=="lv3"){
			 stime3=30;
			 $(".time3 span").html(stime3);
			 t3=setInterval(out3,time);
		 }else if(lv=="lv4"){
		 	 stime4=40;
		 	 $(".time4 span").html(stime4);
		 	 t4=setInterval(out4,time);
		 }else if(lv=="lv5"){
		 	 stime5=50;
		 	 $(".time5 span").html(stime5);
		 	 t5=setInterval(out5,time);
		 }
	 }
	// 重新玩按钮点击
	$(".again-btn").click(function(){
		$(".failure").fadeOut();
		if(round==1){
			rand(n1,arr1);
			taketime-=10;
		}else if(round==2){
			rand(n2,arr2);
			taketime-=15;
		}else if(round==3){
			rand(n3,arr3);
			taketime-=30;
		}else if(round==4){
			rand(n4,arr4);
			taketime-=40;
		}else if(round==5){
			rand(n5,arr5);
			taketime-=50;
		}
		
	})
	
	// 游戏机制
	var num1,num2,flag=true;
	$(".item").click(function(e){
		e.preventDefault();
		// 判断是否已经配对的牌不能再点
		if($(this).hasClass("active")){
			return false;
		}else if(flag){
			// 加一个开关防止用户点击过快造成bug
			$(this).addClass("current")
			var len=$(".current").length;
			// 等于1说明是第一个开的牌
				if(len==1){
					num1=$(this).data("type");
				}else{
					// 第二个开的牌和第一个对比
					num2=$(this).data("type");
					// 如果一样
					if(num1==num2){
						$(".current").addClass("active");
						$(".current").removeClass("current");
						num1="";
						num2="";
						if($(".active").length==4&&round==1){
								clearInterval(t1);
								round++;
								taketime+=(10-stime1);
								setTimeout(function(){
									$(".round2").show();
									rand(n2,arr2);
								},500)
						}else if($(".active").length==10&&round==2){
							clearInterval(t2);
							round++;
							taketime+=(15-stime2);
							setTimeout(function(){
								$(".round3").show();
								rand(n3,arr3);
							},500)
						}else if($(".active").length==22&&round==3){
							clearInterval(t3);
							round++;
							taketime+=(30-stime3);
							setTimeout(function(){
								$(".round4").show();
								rand(n4,arr4);
							},500)
						}else if($(".active").length==38&&round==4){
							clearInterval(t4);
							round++;
							taketime+=(40-stime4);
							setTimeout(function(){
								$(".round5").show();
								rand(n5,arr5);
							},500)
						}else if($(".active").length==58&&round==5){
							clearInterval(t5);
							taketime+=(50-stime4);
							$(".success").show();
							$("#suc-time").html(taketime);
							$("#suc-sum").html($(".active").length)
						}
						// 不一样
					}else{
						flag=false;
						setTimeout(function(){
							$(".current").removeClass("current");
							flag=true
						},500)	
						num1="";
						num2=""
					}
				}
		}		
	});
	// 登榜按钮
	$(".deng-btn,.ling-btn").click(function(){
		grades=$(".active").length;
		taketime=parseFloat((Math.random()*((taketime+1)-taketime)+taketime).toFixed(2));
		console.log(taketime)
		$.ajax({
			url:"https://www.wegogo.net.cn/Q2/data/data.aspx?RqtAction=add&oL56G1n_cDfSyxt4KaUKNPhwEn7cadd&openid="+ openid +"&materna="+ grades +"&time="+ taketime +"",
			success:function(data){
				var result=JSON.parse(data);
				console.log(result)
				if(result.Result==1){
					$(".infor").fadeIn();
				}else if(result.Result==2){
					$(".rank").fadeIn();
					$.ajax({
					    url: "https://www.wegogo.net.cn/Q2/data/data.aspx?RqtAction=add4&openid=" + openid + "",
					    success: function (data) {
					        var result = JSON.parse(data);
					        var mate = result.Data.materna;
					        var pai = result.Data.paiming;
					        $("#myrank").html(pai);
					        $("#mynum").html(mate);
					        console.log(data)
					    }
					});
					$.ajax({
					    url: "https://www.wegogo.net.cn/Q2/data/data.aspx?RqtAction=add3",
					    success: function (data) {
					        var result = JSON.parse(data);
					        var con = "";
					        for (var i = 0; i < result.Data.length; i++) {
					            con += '<li><div class="place">' + result.Data[i].id + '</div><div class="nic">' + result.Data[i].nickname + '</div><div class="geshu">' + result.Data[i].materna + '个</div><div class="append">' + result.Data[i].time + 's</div></li>'
					            $(".rank-list>ul").html(con)
					        }
					
					    }
					});
				}
			}
		})
	});
	// 同意协议按钮
	var agree=false;
	$(".dui").click(function(){
		if(!agree){
			$(".dui").addClass("agree")
			agree=!agree
		}else{
			$(".dui").removeClass("agree")
			agree=!agree
		}
	})
	// 提交信息按钮
	$(".sub-btn").click(function(){
		if($(".name").val()==""||$(".phone").val()==""||$(".local").val()==""){
			alert("请填写完整信息");
		}else if(!(/^1\d{10}$/.test($(".phone").val()))){
			alert("手机号码有误，请重填"); 
		}else if(!agree){
			alert("请阅读并同意协议和隐私条款"); 
		}else{
			$(".rank").fadeIn();
			var name=$(".name").val();
			var number=$(".phone").val();
			var local=$(".local").val()
			// 提交信息接口
			$.ajax({
				url:"https://www.wegogo.net.cn/Q2/data/data.aspx?RqtAction=add2&openid="+ openid +"&name="+ name +"&tel="+ number +"&add="+ local +"",
				async: true,
				success: function (data) {
				    var result = JSON.parse(data);

				    $.ajax({
				        url: "https://www.wegogo.net.cn/Q2/data/data.aspx?RqtAction=add4&openid=" + openid + "",
				        success: function (data) {
				            var result = JSON.parse(data);
				            var mate = result.Data.materna;
				            var pai = result.Data.paiming;
				            $("#myrank").html(pai);
				            $("#mynum").html(mate);
				            console.log(result)
				        }
				    });

				    $.ajax({
				        url: "https://www.wegogo.net.cn/Q2/data/data.aspx?RqtAction=add3",
				        success: function (data) {
				            var result = JSON.parse(data);
				            var con = "";
				            for (var i = 0; i < result.Data.length; i++) {
				                con += '<li><div class="place">' + result.Data[i].id + '</div><div class="nic">' + result.Data[i].nickname + '</div><div class="geshu">' + result.Data[i].materna + '个</div><div class="append">' + result.Data[i].time + 's</div></li>'
				                $(".rank-list>ul").html(con)
				            }

				        }
				    });
				   
				}
			});

			
		}
	});
	// 说明按钮
	$(".explain-btn").click(function(){
		$(".explain").fadeIn()
	});
	$(".self-btn").click(function(){
		$(".article").show()
	});
	$(".know-btn").click(function(){
		$(".explain").fadeOut()
	});
	$(".ok-btn").click(function(){
		$(".article").hide()
	});
	$(".prize-btn").click(function(){
		$(".code").fadeIn()
	});
	$(".close").click(function(){
		$(".code").fadeOut()
	})
	// 再玩一次
	$(".replay-btn").click(function(){
		taketime=0;
		round=1;
		$(".item").removeClass("active");
		$(".item").removeClass("current")
		rand(n1,arr1);
		setTimeout(function(){
			$(".rank,.infor,.success,.failure,.round2,.round3,.round4,.round5").hide();
		},500)
	})
	//			输入
		$('input').bind("blur",function(){
			$("html,body").scrollTop(0);
		}).bind("focus",function(){
			$("html,body").scrollTop();
		});

}




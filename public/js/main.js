

var $$ = function(){
	this.contactBtn = $("a.go");
	this.init();
};

$.extend($$.prototype,{

	init : function(){
		this.bindEvents();
		this.rechargeCode();
		this.selectAmount();
	},

	bindEvents : function(){
		this.contactBtn.on("click",$.proxy(this.contactUs,this))
	},

	contactUs : function(){
		window.location.href = "http://f18.livechatvalue.com/chat/chatClient/chatbox.jsp?companyID=870787&configID=75764&jid=2552196099";
	},

	rechargeCode : function(){
		var This = this;
		// $(".payType").click(function(){
		// 				var method = $(this).data('method');
		// 				var pay    = $(".dimBox li.active").data('pay');
		// 				var os     = $("#os").data('val');
		// 				var money     = $(".dimBox li.active").data('num');
		// 				var channel = $("#channel").data('val');
		// 				var uid  = $("#uid").data('val');
		// 				var token  = $("#token").data('val');
		// 				var url = window.location.href
		// 				var id,payurl;
		// 				var testId =url.split("&")[url.split("&").length-1].split("=")[0]
		// 				var wechatQr=$("#wechatQr").data("val")
		// 				//判断room_id是否存在,再提交
		// 						if(testId=="room_id"){
		// 						    id =url.split("=")[url.split("=").length-1]
		// 								payurl = "project_id=1&pay_method="+method+"&money="+money+"&uid="+uid+"&id="+pay+"&os="+os+"&ch="+channel+"&room_id="+id;
		// 						}else{
		// 						    id =0
		// 								payurl = "project_id=1&pay_method="+method+"&money="+money+"&uid="+uid+"&id="+pay+"&os="+os+"&ch="+channel+"&room_id="+id;
		// 						}
		// 						if(method=="wechat"&&wechatQr=="open"){
		// 							console.log('wechatQr')
		// 							var link=window.location.origin
		// 							window.location.href=link+'/api/pay/qr?item_id='+pay+'&price='+money+'&uid='+uid
    //                                 return false
		// 						}
		// 						if(method=="wechat"&&wechatQr=="close"){
		// 						}
    //         pay ? This.rechargeHandle(payurl,token) : This.messageTip("section.tip",2000);
    //     });
	},

	rechargeHandle : function(payurl,token){
        var orderUrl  = $("#orderUrl").data('val');
				    // orderUrl='http://pay-api.6fg645fsd.com/api/pay/pay?'//测试地址
		$.ajax({
            type:"GET",
            // url:"pay?"+payurl,
            url:orderUrl+payurl,
            cache:false,
            headers:{'api_token':token},
            "beforeSend" : $.proxy(this.layerRequest,this),
            success : $.proxy(this.rechargeHandleSuc,this)
        });
	},

	messageTip : function(elem,time){
		$(elem).fadeIn();

        setTimeout(function(){
        	$(elem).fadeOut();
        },time)
	},

	layerRequest : function(){
		layer.open({
            type: 2,
            content: '请求中',
            shadeClose:false
        });
	},

	selectAmount : function(){
		$(".dimBox > li").on("click",function(){

			var _this = $(this);
			var aMount = parseInt(_this.data("num"));

			_this.addClass("active")
				 .siblings("li")
				 .removeClass("active");
		});
	},

	rechargeHandleSuc : function(data){
        if(data.status == 0){
            if(data.data.type === "wap" && data.data.pay_channel === "Tjfpay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "WDpay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "AYpay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "YQpay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "AngelPay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "Ymfpay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "TSPay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "HFPay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "Happypay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "Slpay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "SRBpay"){
                $('html').html(data.data.pay_html_url);

            } else if(data.data.pay_channel === "JCpay"){
                location.href = data.data.pay_html_url;

            } else if(data.data.type == 'native' && data.data.os == 'android') {
                window.javaObject.invokeNativeAlipay(data.data.alipayStr);

            } else if(data.data.type == 'native' && data.data.os == 'ios'){
                window.location.href = 'nativeAction://alipay?title='+data.data.alipayStr;

            }else if(data.data.pay_channel === "XFTpay"){
                $('html').html(data.data.pay_html_url);

            }  else{
                location.href = data.data.pay_html_url;
            }
        }else{
            layer.open({
                content: data.message,
                area: ['200px','100px'],
                shadeClose:true,
                btn:['确定'],
                yes:function(index,layero){
                    layer.closeAll();
                }
            });
        }
    },

    loadProgressBar : function(timer){
        var currentExp = parseInt($("#currentExp").text()),
            nextExp = parseInt($("#nextExp").text()),
            totalExp = currentExp + nextExp;
        var percent = Math.ceil((currentExp / totalExp) * 100);

        $(".progress > i").animate({"width" : percent + "%"},timer)
    }
});
